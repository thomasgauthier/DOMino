
import React2 from "../react2"

export const BlockContext = React2.createContext<{
    evaluateQueryVar: (queryVar: string, eid: number) => any,
    evaluateComponentIdentifier: (identifier: string) => string,
    addQueryVarEvaluator: (queryVar: string, evaluator: (() => (eid: number) => any)) => void,
    getTime: (eid: number) => number,
}>();

export const useBlockContext = () => React2.useContext(BlockContext);

