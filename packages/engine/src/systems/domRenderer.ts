import { defineQuery, hasComponent, IWorld, removeComponent } from "bitecs";
import { color as Color, dimension as Dimension, position as Position, sprite as Sprite, debugdraw as Debugdraw, debugstring as Debugstring } from "../components";
import queryLifecycle from "../queryLifecycle";
import stringmap from "../stringmap";

const renderingQuery = defineQuery([Position, Dimension])
const spriteQuery = defineQuery([Sprite])
const debugDrawQuery = defineQuery([Debugdraw, Position, Dimension])
const debugQuery = defineQuery([Debugstring])


const spriteSet = queryLifecycle()();
const colorSet = queryLifecycle()();
const debugLife = queryLifecycle()();
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


const canvas = document.getElementsByTagName('canvas')[0]!;
const seenBefore = new Set<number>();

export default function (world: IWorld) {
    const clears: Function[] = [];

    function rects() {
        const renderEnts = new Set(renderingQuery(world));
        const spritesEnts = new Set(spriteQuery(world))

        const basicRender = new Set([...renderEnts].filter(x => !spritesEnts.has(x)));

        colorSet.update(basicRender);

        colorSet.added.forEach(e => {
            const elem = document.getElementById(`entity-${e}`);

            if (elem) {
                const parent = document.createElement('div')

                const div = document.createElement('div');
                div.setAttribute('style', `position: absolute; top: 0; left: 0;`)

                const child = document.createElement('div');
                child.classList.add('debug');

                parent.appendChild(div);
                parent.appendChild(child);

                elem.appendChild(parent);


            }
        })

        colorSet.all.forEach(e => {
            const elem = document.getElementById(`entity-${e}`);


            if (elem) {
                const div = elem.querySelector('div');

                if (div) {

                    elem.style.transform = `translate(${Position.x[e]}px, ${Position.y[e]}px)`

                    div.style.width = `${Dimension.width[e]}px`
                    div.style.height = `${Dimension.height[e]}px`

                    if (hasComponent(world, Color, e)) {
                        const color = stringmap.getString(Color.stringmapid[e])!

                        div.style.backgroundColor = color;
                    } else {
                        div.style.backgroundColor = '#ff0000';
                    }
                }


                clears.push(() => {
                    removeComponent(world, Debugdraw, e)
                })

                if (hasComponent(world, Debugdraw, e)) {
                    elem.querySelector('.debug')?.classList.add('shown')
                }
            }
        })
    }

    function sprites() {



        const renderEnts = new Set(renderingQuery(world));
        const spritesEnts = new Set(spriteQuery(world))


        const spriteRender = new Set([...renderEnts].filter(x => spritesEnts.has(x)));

        spriteSet.update(spriteRender);

        spriteSet.added.forEach(eid => {
            imageSrcLoadMap.onchange(Sprite.stringmapid[eid], (loaded) => {
                if (loaded) {


                    const elem = document.getElementById(`entity-${eid}`);

                    if (elem && !elem.querySelector('img')) {

                        const parent = document.createElement('div');

                        const clone = imageStrIdMap.get(Sprite.stringmapid[eid])!.cloneNode() as HTMLImageElement;
                        parent.setAttribute('style', `position: absolute; top: 0; left: 0; width:100%; height:100%`)

                        const img = parent.appendChild(clone);
                        img.setAttribute('style', `width:100%; height:100%`)

                        const child = document.createElement('div');
                        child.classList.add('debug');

                        parent.appendChild(child);

                        elem.appendChild(parent)
                    }
                }
            })
            imageStrIdMap.add(Sprite.stringmapid[eid])
        })

        spriteSet.all.forEach(e => {
            const elem = document.getElementById(`entity-${e}`);


            if (elem) {
                const img = elem.querySelector('img');

                if (img) {
                    elem.style.transform = `translate(${Position.x[e]}px, ${Position.y[e]}px)`


                    elem.style.width = `${Dimension.width[e]}px`
                    elem.style.height = `${Dimension.height[e]}px`
                }


            }

            clears.push(() => {
                removeComponent(world, Debugdraw, e)
            })
        })
    }


    rects();
    sprites()

    const debugs = debugDrawQuery(world);
    debugLife.update(new Set(debugs));


    debugLife.all.forEach(eid => {


        const elem = document.getElementById(`entity-${eid}`);

        if (Debugdraw.is[eid]) {
            if (!elem?.querySelector('.debug')?.classList.contains('shown')) {
                elem?.querySelector('.debug')?.classList.add('shown')
            }
        } else {
            elem?.querySelector('.debug.shown')?.classList.remove('shown')
        }
    })

    debugLife.removed.forEach(eid => {
        const elem = document.getElementById(`entity-${eid}`);
        elem?.querySelector('.debug.shown')?.classList.remove('shown')
    })

    return clears;
}
