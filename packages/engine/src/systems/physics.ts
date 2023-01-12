import { addComponent, defineQuery, hasComponent, IWorld, removeComponent } from "bitecs";
import { ArcadePhysics } from "arcade-physics"
import { collision as Collision, dimension as Dimension, position as Position, rigidbody as Rigidbody, velocity as Velocity } from "../components";



export default (world: IWorld, width: number, height: number) => {
    const physics = new ArcadePhysics({
        gravity: {
            x: 0,
            y: 300
        },
        width,
        height
    })

    const physicsQuery = defineQuery([Rigidbody, Position, Velocity])

    const seenBefore = new Set<number>();
    const eidToMatterId = new Map<number, number>();
    const matterIdToEid = new Map<number, number>();

    type Body = ReturnType<typeof physics["add"]["body"]>;
    const eidToBody = new Map<number, ReturnType<typeof physics["add"]["body"]> | ReturnType<typeof physics["add"]["staticBody"]>>();
    const bodyToEid = new Map<ReturnType<typeof physics["add"]["body"]> | ReturnType<typeof physics["add"]["staticBody"]>, number>();

    const mapClear = new Map<string, [number, () => unknown]>();


    const getBodyFromEid = (eid: number) => {
        return eidToBody.get(eid)
    }

    const colliders: (ReturnType<typeof physics["add"]["body"]> | ReturnType<typeof physics["add"]["staticBody"]>)[] = []


    physics.world.on('collide', (...args) => {
        /** @ts-ignore */
        const [a, b]: [Body, Body] = args.filter(a => {
            return a.isBody;
        });

        const eidA = bodyToEid.get(a)!
        const eidB = bodyToEid.get(b)!

        if (!hasComponent(world, Collision, eidA)) {
            addComponent(world, Collision, eidA)
        }


        if (!hasComponent(world, Collision, eidB)) {
            addComponent(world, Collision, eidB)
        }

        const [e0, e1] = [eidA, eidB].sort();

        mapClear.set(`${e0}-${e1}`, [frame, () => {
            setTimeout(() => {
                removeComponent(world, Collision, eidA)
                removeComponent(world, Collision, eidB)
            }, 0)
        }])

        Collision.entitiy[eidA] = eidB
        Collision.entitiy[eidB] = eidA
    })


    let frame = 0;
    function main(dt: number) {
        const ents = physicsQuery(world)


        for (let i = 0; i < ents.length; i++) {
            const eid = ents[i]

            const body = getBodyFromEid(eid)

            if (body) {
                if (hasComponent(world, Position, eid) && hasComponent(world, Dimension, eid)) {
                    body.x = Position.x[eid];
                    body.y = Position.y[eid];
                }

                if (hasComponent(world, Velocity, eid)) {
                    const x = Velocity.x[eid]
                    const absX = Math.abs(x);

                    const valX = Math.sign(x) * (absX < 0.001 ? 0 : absX)

                    const y = Velocity.y[eid]
                    const absY = Math.abs(y);

                    const valY = Math.sign(y) * (absY < 0.001 ? 0 : absY)

                    if (!Rigidbody.static[eid]) {
                        (body as any).setVelocity(valX, valY)
                    }
                }

            }
        }

        physics.world.update(performance.now(), dt)

        let seenNow = new Set();

        for (let i = 0; i < ents.length; i++) {
            const eid = ents[i]

            seenNow.add(eid);
            if (!seenBefore.has(eid)) {
                const x = Position.x[eid];
                const y = Position.y[eid];

                const width = Dimension.width[eid];
                const height = Dimension.height[eid];


                const body = Rigidbody.static[eid] ? physics.add.staticBody(x, y, width, height) : physics.add.body(x, y, width, height)


                body.onCollide = true;

                colliders.forEach(c => {
                    physics.add.collider(c, body);
                })
                colliders.push(body)
                eidToBody.set(eid, body)
                bodyToEid.set(body, eid)
            }

            const body = getBodyFromEid(eid)

            if (body) {
                Position.x[eid] = body.x;
                Position.y[eid] = body.y;

                Velocity.x[eid] = body.velocity.x
                Velocity.y[eid] = body.velocity.y
            }

            seenBefore.add(eid)
        }

        const removed = [...seenBefore.values()].filter(e => !seenNow.has(e));

        removed.forEach(r => {
            seenBefore.delete(r);
        })

        seenNow.clear();

        const toClear = [...mapClear.entries()].filter(([key, val]) => {
            return val[0] != frame;
        })

        toClear.forEach(([key, val]) => {
            val[1]();

            mapClear.delete(key)
        })

        frame++;
    }


    return main;
}
