import { Block as ASTBlock } from "ecss-parser/dist/ast-types";
import ComponentStatement from "./ComponentStatement"
import { NodeEvaluator, NodeEvaluatorProps } from "../../node";
import { useMemo, useState } from "../../reactive";
import EventHandler from "./EventHandler";
import AtQuery from "../../atquery";


type Props = NodeEvaluatorProps<{ node: ASTBlock, setOnExit?: (onExit: () => (set: Set<number>) => void) => void, setOnEnter?: (onEnter: () => (set: Set<number>) => void) => void, setEvaluate: (evaluate: () => (set: Set<number>) => void) => void }>

const Block: NodeEvaluator<Props> = ({ node: block, setEvaluate, setOnExit, setOnEnter }) => {
    const childEvaluates = block.children.map(() => useState<() => (eid: number) => number | boolean | string>(() => (eid: number) => 0))

    const [childOnExit, setChildOnExit] = useState<(() => (set: Set<number>) => void)[]>([])
    const [childOnEnter, setChildOnEnter] = useState<(() => (set: Set<number>) => void)[]>([])

    const [atQueryEvaluator, setAtQueryEvaluator] = useState<(() => () => void)>(() => () => null)

    if (setOnExit) {
        const onEnterMemo = useMemo(() => {

            const onEnters: (() => (set: Set<number>) => void)[] = []
            const onenters = childOnEnter();

            for (let i = 0; i < onenters.length; i++) {
                onEnters.push(onenters[i]);
            }

            return (set: Set<number>) => {

                onEnters.forEach((evaluate) => {
                    const childEv = evaluate()
                    childEv(set);
                })
            }
        })

        setOnEnter(() => onEnterMemo.value)
    }

    if (setOnExit) {
        const onExitMemo = useMemo(() => {

            const onExits: (() => (set: Set<number>) => void)[] = []
            const onexits = childOnExit();

            for (let i = 0; i < onexits.length; i++) {
                onExits.push(onexits[i]);
            }

            return (set: Set<number>) => {

                onExits.forEach((evaluate) => {
                    const childEv = evaluate()
                    childEv(set);
                })
            }
        })

        setOnExit(() => onExitMemo.value)
    }


    if (setEvaluate) {
        const evaluate = useMemo(() => {

            const evaluateAllChildren = (set: Set<number>) => {

                childEvaluates.forEach(([evaluate]) => {
                    const childEv = evaluate()()

                    set.forEach(e => {
                        childEv(e);
                    })
                })
            }

            const evaluateAtQuery = atQueryEvaluator()();

            return (entities: Set<number>) => {
                if (evaluateAtQuery) {
                    evaluateAtQuery();
                }
                evaluateAllChildren(entities);
            }
        })

        setEvaluate(() => evaluate.value)
    }

    function addChildOnExit(val: () => (set: Set<number>) => void) {
        setChildOnExit([...childOnExit(), val])
    }

    function addChildOnEnter(val: () => (set: Set<number>) => void) {
        setChildOnEnter([...childOnEnter(), val])
    }


    return <>
        {block.children.map((c, i) => {


            if (c.type === 'AtQuery') {
                return <AtQuery node={c} setEvaluate={setAtQueryEvaluator} setOnExit={addChildOnExit} setOnEnter={addChildOnEnter} />
            }

            if (c.type === 'ComponentStatement') {
                return <ComponentStatement node={c} setEvaluate={childEvaluates[i][1]} />
            }

            if (c.type == 'EventHandler') {
                return <EventHandler node={c} setOnExit={addChildOnExit} setOnEnter={addChildOnEnter} />
            }
        })}
    </>
}

export default Block
