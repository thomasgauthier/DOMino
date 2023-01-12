import { System as ASTSystem } from "ecss-parser/dist/ast-types";
import Block from "./block"
import { FunctionComponent, EntityNodeEvaluator, EntityNodeEvaluatorProps, NodeEvaluator, NodeEvaluatorProps } from "../node";
import React2 from "../react2"
import { BlockContext } from "../contexts/BlockContext";
import Query from "./query";
import { useMemo, useState } from "../reactive";
import { QueryWithLifecycle } from "../queryLifecycle";
import QueryAndBlock from "../virtual/QueryAndBlock";

type Props = NodeEvaluatorProps<{ node: ASTSystem }>

const System: NodeEvaluator<Props> = ({ node: system, setEvaluate }) => {
    console.log("visit System");
    
    return <QueryAndBlock query={system.query} block={system.body} setEvaluate={setEvaluate} />
}

export default System
