import { EventHandler as ASTEventHandler } from "ecss-parser/dist/ast-types";
import Block from "..";
import { EntityNodeEvaluator, EntityNodeEvaluatorProps, FunctionComponent } from "../../../node";
import { QueryWithLifecycle } from "../../../queryLifecycle";
import { useMemo, useState } from "../../../reactive";

type Props = { node: ASTEventHandler, setOnExit: (onExit: () => (set: Set<number>) => void) => void, setOnEnter?: (onEnter: () => (set: Set<number>) => void) => void }

const EventHandler: FunctionComponent<Props> = ({ node: eventHandler, setOnExit, setOnEnter }) => {
    const [block, setBlockEvaluate] = useState<() => (set: Set<number>) => void>(() => () => { })

    if (setOnEnter && eventHandler.event === ':enter') {

        const evaluate = useMemo(() => {
            const evChild = block()();

            return (set: Set<number>) => {
                return evChild(set);
            }
        })

        setOnEnter(() => evaluate.value);
    }

    if (setOnExit && eventHandler.event === ':exit') {

        const evaluate = useMemo(() => {
            const evChild = block()();

            return (set: Set<number>) => {
                return evChild(set);
            }
        })

        setOnExit(() => evaluate.value);
    }

    return <Block node={eventHandler.body} setEvaluate={setBlockEvaluate} />

}

export default EventHandler
