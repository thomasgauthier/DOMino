import {
    createWorld,
    defineQuery,
    getAllEntities,
    Component,
    defineComponent,
    removeComponent,
} from 'bitecs'
import Components, { dimension as Dimension, position as Position, timescale as Timescale, rigidbody as Rigidbody, velocity as Velocity, debugstring as Debugstring } from './components';
import setupRenderSystem from "./systems/canvasRenderer"
import setupPhysicsSystem from "./systems/physics"
import inputSystem from "./systems/input"

import react2interpreter from "interpreter"

import CustomElements from "./customelements"
import { propertyCaseToComponentRead, componentStringNameToComponent, propertyCaseToComponentWrite, componentPropertyWrite, componentPropertyRead } from './ecss/utils';
import { ASTNode } from 'ecss-parser/dist/ast-types';
import { Schema } from 'interpreter/dist/contexts/OutsideWorldContext';

const definedComponents = new Map<string, Component>()

const timesScaleQuery = defineQuery([Timescale])

const debugQuery = defineQuery([Debugstring])


export type EComponents = {
    [key: string]: {
        [key: string]: 'number' | 'boolean';
    }
}

export default function createEngine(canvas: HTMLCanvasElement, callbacks: {
    highlightCode: (loc: ASTNode["loc"], timeout?: number) => void;
    clearHighlights: () => void,
}) {

    const world = createWorld()

    const renderSystem = setupRenderSystem(canvas);
    let physicsSystem = setupPhysicsSystem(world, canvas.width, canvas.height);

    CustomElements.init("x-entity", world);

    const interpreterCallables = {
        readComponent(component: Component, property, eid: number) {
            return componentPropertyRead(world, component, property, eid, definedComponents);
        },
        componentNameToComponent(name: string) {
            return componentStringNameToComponent(world, name, definedComponents);
        },
        writeComponent(component: Component, property, value: any, eid: number) {
            return componentPropertyWrite(world, component, property, value, eid, definedComponents)
        },
        getAllEntities() {
            return new Set(getAllEntities(world));
        },
        defineQuery(all: Component[]) {
            const query = defineQuery(all);

            return () => {
                return new Set(query(world))
            }
        },
        removeComponent: (component: Component, eid: number) => {
            setTimeout(() => {
                removeComponent(world, component, eid)
            }, 0);

            ; (async () => await Promise.resolve())()
        },
        defineComponent: (schema: Schema) => {
            return defineComponent(schema);
        },
        highlightCode(loc: ASTNode["loc"]) {
            callbacks.highlightCode(loc);
        }
    }

    let currentRuntime: ReturnType<typeof react2interpreter["createRuntime"]>;// = ecssRuntime(code);

    let keepLooping = true;

    function loop() {

        let lastTime = performance.now();


        const innerLoop = async () => {
            setTimeout(() => { }, 0)
            let now = performance.now();
            const timeScale = timesScaleQuery(world).reduce((acc, val) => Timescale.timescale[val], 1)

            let dt = (now - lastTime) * timeScale;
            while (dt < 16.666666667 && keepLooping) {
                now = performance.now();
                dt = (now - lastTime) * timeScale;
                await Promise.resolve()
            }

            let clears = renderSystem(world);
            physicsSystem(dt);

            inputSystem(world);

            if (currentRuntime) {
                callbacks.clearHighlights();
                currentRuntime.update(dt);
            }

            debugQuery(world).forEach(eid => {
                console.log(Debugstring.value[eid]);
            })

            CustomElements.update(dt);

            lastTime = now;

            if (keepLooping) {
                window.requestAnimationFrame(innerLoop)
            }
        }

        window.requestAnimationFrame(innerLoop)
    }


    loop();

    return {
        update(code: string) {
            try {
                currentRuntime = react2interpreter.createRuntime(code, interpreterCallables)
            } catch (error) {
                currentRuntime = null;
            }
        },
        components: Object.keys(Components).reduce<EComponents>((acc, key: keyof typeof Components) => {
            acc[key] = Object.keys(Components[key]).reduce((acc, key) => ({ ...acc, [key]: 'number' }), {})

            return acc;
        }, {}),
        stop: () => {
            keepLooping = false;
        },
        play: () => {
            if (!keepLooping) {
                keepLooping = true;
                loop();
            }
        }
    }
}

