import { defineQuery, hasComponent, IWorld, removeComponent } from "bitecs";
import { spriteRepeat as SpriteRepeat, color as Color, color2 as Color2, debugdraw as Debugdraw, dimension as Dimension, frame as Frame, position as Position, flip as Flip, scale as Scale, sprite as Sprite, spritesheet as Spritesheet } from "../components";
import queryLifecycle from "../queryLifecycle";
import stringmap from "../stringmap";
import { basename } from "../utils";

const renderingQuery = defineQuery([Position, Dimension])
const spriteQuery = defineQuery([Sprite])
const spritesheetQuery = defineQuery([Spritesheet])

const colorQuery = defineQuery([Color2])

const debugDrawQuery = defineQuery([Debugdraw])


const spriteSet = queryLifecycle()();
const spriteSheetset = queryLifecycle()();
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

const spritesheets = new Map<number, {
    id: number,
    frames: {
        "x": number,
        "y": number,
        "w": number,
        "h": number
    }[]
}>();

const spritesheetsUrlMap = new Map<string, any>();


function setpixelated(context: CanvasRenderingContext2D) {
    context['imageSmoothingEnabled'] = false;       /* standard */
    context['mozImageSmoothingEnabled'] = false;    /* Firefox */
    context['oImageSmoothingEnabled'] = false;      /* Opera */
    context['webkitImageSmoothingEnabled'] = false; /* Safari */
    context['msImageSmoothingEnabled'] = false;     /* IE */
}

export default (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = false;
    setpixelated(ctx);
    ctx.filter = "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9ImZpbHRlciIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVDb21wb25lbnRUcmFuc2Zlcj48ZmVGdW5jUiB0eXBlPSJpZGVudGl0eSIvPjxmZUZ1bmNHIHR5cGU9ImlkZW50aXR5Ii8+PGZlRnVuY0IgdHlwZT0iaWRlbnRpdHkiLz48ZmVGdW5jQSB0eXBlPSJkaXNjcmV0ZSIgdGFibGVWYWx1ZXM9IjAgMSIvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj48L2ZpbHRlcj48L3N2Zz4=#filter)";

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
            const spritesheetEnts = new Set(spritesheetQuery(world))


            const spriteRender = new Set([...renderEnts].filter(x => spritesEnts.has(x)));

            spriteSet.update(spriteRender);

            spriteSheetset.update(spritesheetEnts)

            spriteSet.added.forEach(eid => {
                imageStrIdMap.add(Sprite.stringmapid[eid])
                previousSprite.set(eid, Sprite.stringmapid[eid]);
            })

            spriteSet.all.forEach(eid => {
                if (hasComponent(world, Spritesheet, eid)) {
                    return;
                }

                if (previousSprite.get(eid) && previousSprite.get(eid) != Sprite.stringmapid[eid]) {
                    imageStrIdMap.add(Sprite.stringmapid[eid])
                    previousSprite.set(eid, Sprite.stringmapid[eid]);
                }

                const srcStringIdId = Sprite.stringmapid[eid];

                if (imageSrcLoadMap.get(srcStringIdId)) {

                    const scale = Scale.scale[eid];

                    const isFlipped = Flip.horizontal[eid]
                    if (isFlipped) {
                        ctx.scale(-1, 1);
                    }


                    if (hasComponent(world, SpriteRepeat, eid)) {
                        const { width, height } = imageStrIdMap.get(srcStringIdId)!;
                        const xTimes = Dimension.width[eid] / width;
                        const yTimes = Dimension.height[eid] / height;

                        for (let x = 0; x < Math.ceil(xTimes); x++) {
                            for (let y = 0; y < Math.ceil(yTimes); y++) {
                                ctx.drawImage(imageStrIdMap.get(srcStringIdId)!, isFlipped ? -(Position.x[eid] + x * width) - Dimension.width[eid] : (Position.x[eid] + x * width), Position.y[eid] + y * height);
                            }
                        }
                    } else {
                        ctx.drawImage(imageStrIdMap.get(srcStringIdId)!, isFlipped ? -(Position.x[eid]) - Dimension.width[eid] : Position.x[eid], Position.y[eid], Dimension.width[eid] * scale, Dimension.height[eid] * scale)
                    }

                    if (isFlipped) {
                        ctx.scale(-1, 1);
                    }
                }

            })

            spriteSheetset.added.forEach(eid => {
                const url = stringmap.getString(Spritesheet.stringmapid[eid]);
                if (url) {
                    ; (async () => {
                        let sheet = spritesheetsUrlMap.get(url);

                        if (!sheet) {
                            const res = await fetch(url);
                            sheet = await res.json();
                            spritesheetsUrlMap.set(url, sheet);
                        }

                        const dir = url.substring(0, url.length - basename(url).length);
                        const spritesheet: string = dir + sheet.meta.image;

                        const id = stringmap.addString(spritesheet);
                        spritesheets.set(Spritesheet.stringmapid[eid], {
                            id,
                            frames: Object.keys(sheet.frames).map(key => sheet.frames[key].frame)
                        });
                        imageStrIdMap.add(id)
                    })()
                }

            })

            spriteSheetset.all.forEach(eid => {
                const srcStringIdId = spritesheets.get(Spritesheet.stringmapid[eid])?.id || Spritesheet.stringmapid[eid];

                if (imageSrcLoadMap.get(srcStringIdId)) {
                    const scale = Scale.scale[eid];
                    const frame = spritesheets.get(Spritesheet.stringmapid[eid]).frames[Frame.number[eid]];

                    const isFlipped = Flip.horizontal[eid]

                    if (isFlipped) {
                        ctx.scale(-1, 1);
                    }

                    ctx.drawImage(imageStrIdMap.get(srcStringIdId)!, frame.x, frame.y, frame.w, frame.h, isFlipped ? -(Position.x[eid]) - Dimension.width[eid] : Position.x[eid], Position.y[eid], Dimension.width[eid] * scale, Dimension.height[eid] * scale)

                    if (isFlipped) {
                        ctx.scale(-1, 1);
                    }
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
