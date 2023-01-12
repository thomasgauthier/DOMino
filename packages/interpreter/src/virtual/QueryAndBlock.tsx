import { Block as ASTBlock, Query as ASTQuery } from "ecss-parser/dist/ast-types";
import { BlockContext } from "../contexts/BlockContext";
import { NodeEvaluator, NodeEvaluatorProps } from "../node";
import { QueryWithLifecycle } from "../queryLifecycle";
import { useMemo, useState } from "../reactive";
import Block from "../system/block";
import Query from "../system/query";


type Props = NodeEvaluatorProps<{ query: ASTQuery, block: ASTBlock, setOnExit?: (onExit: () => (set: Set<number>) => void) => void, setOnEnter?: (onEnter: () => (set: Set<number>) => void) => void, }>

const QueryAndBlock: NodeEvaluator<Props> = ({ query, block, setEvaluate, setOnExit, setOnEnter }) => {
    const [blockEvaluate, setBlockEvaluate] = useState<() => (set: Set<number>) => void>(() => () => { })
    const [childOnExit, rawSetChildOnExit] = useState<() => (set: Set<number>) => void>(() => (set: Set<number>) => { })
    const [childOnEnter, rawSetChildOnEnter] = useState<() => (set: Set<number>) => void>(() => (set: Set<number>) => { })


    const [queryLifecycle, setQueryLifecycle] = useState<QueryWithLifecycle | null>(null)

    const [evaluateQuery, setEvaluateQuery] = useState<() => () => QueryWithLifecycle>(() => () => null)

    if (setEvaluate) {
        const evaluate = useMemo(() => {
            const getLifecycle = evaluateQuery()()
            const blockEval = blockEvaluate()();
            const childOnExitEval = childOnExit()()
            const childOnEnterEval = childOnEnter()()

            return () => {
                const lifecycle = getLifecycle();
                setQueryLifecycle(lifecycle);

                const all = lifecycle.all;
                if (all.size) {
                    blockEval(all);
                }

                const removed = lifecycle.removed;
                if (removed.size) {                    
                    childOnExitEval(removed);
                }


                const added = lifecycle.added;
                if (added.size) {
                    childOnEnterEval(added);
                }
            }
        })

        setEvaluate(() => evaluate.value)
    }

    if (setOnExit) {
        const onExit = useMemo(() => {
            const getLifecycle = evaluateQuery()()
            const childOnExitEval = childOnExit()()

            return () => childOnExitEval(getLifecycle().all);
        })

        setOnExit(() => {
            return onExit.value
        })
    }


    const queryVarEvaluationMap = new Map<string, () => (eid: number) => any>()

    const queryCtx = {
        evaluateQueryVar: (queryVar: string, eid: number) => {
            const evaluator = queryVarEvaluationMap.get(queryVar);
            return evaluator ? evaluator()(eid) : null
        },
        evaluateComponentIdentifier: (identifier: string) => {
            return identifier;
        },
        addQueryVarEvaluator: (queryVar: string, evaluator: (() => (eid: number) => any)) => {
            queryVarEvaluationMap.set(queryVar, evaluator);
        },
        getTime: (eid: number) => {
            return queryLifecycle()?.lifetime(eid) ?? 0;
        }
    };

    function setChildOnExit(onExit: () => (set: Set<number>) => void) {
        rawSetChildOnExit(onExit);
    }

    function setChildOnEnter(onEnter: () => (set: Set<number>) => void) {
        rawSetChildOnEnter(onEnter);
    }

    return <BlockContext.Provider value={queryCtx}>
        <Query node={query} setEvaluate={setEvaluateQuery} />
        <Block node={block} setEvaluate={setBlockEvaluate} setOnExit={setChildOnExit} setOnEnter={setChildOnEnter} />
    </BlockContext.Provider>
}

export default QueryAndBlock
