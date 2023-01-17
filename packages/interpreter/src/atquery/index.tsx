import { AtQuery as ASTAtQuery, System as ASTSystem } from "ecss-parser/dist/ast-types";
import { FunctionComponent, EntityNodeEvaluator, EntityNodeEvaluatorProps, NodeEvaluator, NodeEvaluatorProps } from "../node";
import React2 from "../react2"
import { BlockContext } from "../contexts/BlockContext";
import { useMemo, useState } from "../reactive";
import { QueryWithLifecycle } from "../queryLifecycle";
import QueryAndBlock from "../virtual/QueryAndBlock";

type QueryContext = ReturnType<typeof React2.createContext<{
    evaluateQueryVar: (queryVar: string, eid: number) => any,
    evaluateComponentIdentifier: (identifier: string) => string,
}>>;

type Props = NodeEvaluatorProps<{ node: ASTAtQuery, setOnExit?: (onExit: () => (set: Set<number>) => void) => void, setOnEnter?: (onEnter: () => (set: Set<number>) => void) => void, }>

const AtQuery: NodeEvaluator<Props> = ({ node: atquery, setEvaluate, setOnExit, setOnEnter }) => {
    function setOnExitT(onExit: () => (set: Set<number>) => void) {
        setOnExit(() => {
            return onExit()
        })
    }

    return <QueryAndBlock query={atquery.query} block={atquery.body} setEvaluate={setEvaluate} setOnExit={setOnExitT} setOnEnter={setOnEnter} />

}

export default AtQuery
