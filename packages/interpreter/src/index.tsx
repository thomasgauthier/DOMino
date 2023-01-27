import parser from "ecss-parser"
import { isOk } from "option-t/lib/PlainResult";
import Program from "./program";
import React2 from "./react2"
import "core-js/features/set"
import { useMemo, useState } from "./reactive";
import { OutsideWorldContext, Schema } from "./contexts/OutsideWorldContext";
import { Type } from "bitecs";

const code = `

[aa][bb]:not([cc])
{
    velocity-a: 1;
    velocity-b: 2;

    velocity-c: 0;
}

`



export default {
    createRuntime: <Component,>(code: string, callables: {
        readComponent: (component: Component, property: string | null, eid: number) => any,
        componentNameToComponent: (name: string) => Component,
        writeComponent: (component: Component, property: string | null, value: any, eid: number) => void,
        getAllEntities: () => Set<number>,
        defineQuery: (all: Component[]) => () => Set<number>,
        defineComponent: <T extends Schema>(schema: T) => Component,
        removeComponent: (component: Component, eid: number) => void,
        highlightCode: (loc: {
            start: {
                line: number;
                column: number;
                offset: number;
            };
            end: {
                line: number;
                column: number;
                offset: number;
            }
        }) => void
    }) => {
        const parsed = parser(code)
        
        if (isOk(parsed)) {
            const { val: program } = parsed;
            const [e, setEvaluate] = useState<() => () => void>(() => () => { })

            const evaluate = useMemo(() => {
                return () => {
                    e()()()
                }
            })

            const map = new Map<string, Component>()

            let deltaTime = 0;

            function getDeltaTime() {
                return deltaTime;
            }

            React2.render(
                <OutsideWorldContext.Provider value={{
                    ...callables, defineComponent: (name: string, schema: Schema) => {
                        let component = map.get(name);

                        if (!component) {
                            component = callables.defineComponent(schema);
                            map.set(name, component)
                        }

                        return component
                    },
                    componentNameToComponent(name) {
                        const component = map.get(name) || callables.componentNameToComponent(name);

                        if (component) {
                            return component
                        }

                        const splitted = name.split('-')
                        return map.get(splitted[0]) || callables.componentNameToComponent(splitted[0]);
                    },
                    getDeltaTime
                }}>
                    <Program node={program} setEvaluate={setEvaluate} />
                </OutsideWorldContext.Provider>

            );

            return {
                update: (dt: number) => {
                    deltaTime = dt;
                    evaluate.value();
                }
            }
        }
                
        throw new Error(parsed.err.toString())
    }
};
