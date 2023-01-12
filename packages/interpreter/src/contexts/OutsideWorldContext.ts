
import { Type } from "bitecs";
import React2 from "./../react2"

export interface Schema { [key: string]: Type };

export const OutsideWorldContext = React2.createContext<{
    readComponent: (component: any, property: string | null, eid: number) => any,
    componentNameToComponent: (name: string) => any,
    writeComponent: (component: any, property: string | null, value: any, eid: number) => void,
    getAllEntities: () => Set<number>,
    defineQuery: (all: any[]) => () => Set<number>,
    defineComponent: <T extends Schema>(name: string, schema: T) => any
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
    }) => void,
    getDeltaTime: () => number
}>();

export const useOutsideWorldContext = () => React2.useContext(OutsideWorldContext);

