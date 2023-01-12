import { defineQuery, hasComponent, IWorld, removeComponent } from "bitecs";
import { color as Color, color2 as Color2, debugdraw as Debugdraw, dimension as Dimension, position as Position, scale as Scale, sprite as Sprite } from "../components";
import queryLifecycle from "../queryLifecycle";
import stringmap from "../stringmap";

const renderingQuery = defineQuery([Position, Dimension])
const spriteQuery = defineQuery([Sprite])
const colorQuery = defineQuery([Color2])

const debugDrawQuery = defineQuery([Debugdraw])


const spriteSet = queryLifecycle()();
const debugSet = queryLifecycle()();


const imageStrIdMap = (() => {
    const map = new Map<number, HTMLImageElement>()

    return {
        add(srcStringId: number) {
            const image = document.createElement('img');
            image.src = stringmap.getString(srcStringId)!;

            image.onload = () => {
                imageSrcLoadMap.set(srcStringId, true)
            }

            map.set(srcStringId, image);
        },
        get(srcStringId: number) {
            return map.get(srcStringId)
        },
    }
})()

const imageSrcLoadMap = (() => {

    const map = new Map<number, boolean>();
    const callbacks = new Map<number, Function[]>();

    return {
        set(srcStringId: number, loaded: boolean) {
            const different = map.get(srcStringId) != loaded;
            map.set(srcStringId, loaded);

            if (different) {
                callbacks.get(srcStringId)?.forEach(clb => {
                    clb(loaded);
                })
            }
        },
        get(srcStringId: number) {
            return map.get(srcStringId)
        },
        onchange(srcStringId: number, clb: Function) {
            if (!callbacks.get(srcStringId)) {
                callbacks.set(srcStringId, [])
            }

            callbacks.get(srcStringId)!.push(clb)
        }
    }
})()

const seenBefore = new Set<number>();

const previousSprite = new Map<number, number>();

export default (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')!;

    function main(world: IWorld) {

        const clears: Function[] = [];

        ctx.clearRect(0, 0, canvas.width, canvas.height);


        function rects() {
            const renderEnts = new Set(renderingQuery(world));
            const spritesEnts = new Set(spriteQuery(world))


            const basicRender = [...new Set([...renderEnts].filter(x => !spritesEnts.has(x)))];


            for (let i = 0; i < basicRender.length; i++) {
                const eid = basicRender[i]

                if (hasComponent(world, Color2, eid)) {
                    const color = `rgb(${Color2.x[eid]}, 0, 0)`

                    ctx.fillStyle = color;
                } else if (hasComponent(world, Color, eid)) {
                    const color = stringmap.getString(Color.stringmapid[eid])!
                    ctx.fillStyle = color;
                } else {
                    ctx.fillStyle = '#ff0000';
                }
                ctx.fillRect(Position.x[eid], Position.y[eid], Dimension.width[eid], Dimension.height[eid]);
                seenBefore.add(eid)
            }
        }



        function sprites() {
            const renderEnts = new Set(renderingQuery(world));
            const spritesEnts = new Set(spriteQuery(world))


            const spriteRender = new Set([...renderEnts].filter(x => spritesEnts.has(x)));

            spriteSet.update(spriteRender);

            spriteSet.added.forEach(eid => {
                imageStrIdMap.add(Sprite.stringmapid[eid])

                previousSprite.set(eid, Sprite.stringmapid[eid]);
            })

            spriteSet.all.forEach(eid => {
                if (previousSprite.get(eid) && previousSprite.get(eid) != Sprite.stringmapid[eid]) {
                    const [a,b] = [stringmap.getString(previousSprite.get(eid)), stringmap.getString(Sprite.stringmapid[eid])]

                    imageStrIdMap.add(Sprite.stringmapid[eid])
                    previousSprite.set(eid, Sprite.stringmapid[eid]);
                }

                const srcStringIdId = Sprite.stringmapid[eid];

                if (imageSrcLoadMap.get(srcStringIdId)) {

                    const scale = Scale.scale[eid];
                    ctx.drawImage(imageStrIdMap.get(srcStringIdId)!, Position.x[eid], Position.y[eid], Dimension.width[eid] * scale, Dimension.height[eid] * scale)
                }

            })

            const debugs = debugDrawQuery(world);
            debugSet.update(new Set(debugs));

            for (let i = 0; i < debugs.length; i++) {

                const eid = debugs[i]

                if (Debugdraw.is[eid]) {

                    const x = Position.x[eid];
                    const y = Position.y[eid];
                    const width = Dimension.width[eid]
                    const height = Dimension.height[eid]

                    const scale = hasComponent(world, Scale, eid) ? Scale.scale[eid] : 1;

                    const fill = ctx.fillStyle;
                    ctx.fillStyle = "rgba(255,255,0,0.5)"
                    ctx.fillRect(x, y, width * scale, height * scale)

                    ctx.fillStyle = fill;
                }
            }
        }



        rects();
        sprites()


        return clears;
    }

    return main;
}
