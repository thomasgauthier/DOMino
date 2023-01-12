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
        defineComponent: <T extends Schema>(schema: T) => Component
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

        const parsed = parser(code);

        if (isOk(parsed)) {
            const { val: program } = parsed;
            const [e, setEvaluate] = useState<() => () => void>(() => () => { })

            const evaluate = useMemo(() => {
                return () => {
                    e()()()
                }
            })

            const map = new Map<string, Component>()

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
                        return map.get(name) || callables.componentNameToComponent(name);
                    },
                    getDeltaTime: () => (1 / 60) * 1000
                }}>
                    <Program node={program} setEvaluate={setEvaluate} />
                </OutsideWorldContext.Provider>

            );

            return {
                update: (dt: number) => {
                    evaluate.value();
                }
            }
        }

        throw new Error()
    }
};
