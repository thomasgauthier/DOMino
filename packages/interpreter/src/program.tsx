import { Program as ASTProgram } from "ecss-parser/dist/ast-types";
import System from "./system/index"
import { EntityNodeEvaluator, EntityNodeEvaluatorProps, NodeEvaluator, NodeEvaluatorProps } from "./node";
import { useMemo, useState } from "./reactive";
import ComponentDefinition from "./system/componentdefinition";


type Props = NodeEvaluatorProps<{ node: ASTProgram }>


const Program: NodeEvaluator<Props> = ({ node: program, setEvaluate }) => {
    const systemEvaluators = program.systems.map(() => useState<() => () => void>(() => () => { }))
    const definitionsEvaluators = program.components.map(() => useState<() => () => void>(() => () => { }))

    if (setEvaluate) {
        const evaluate = useMemo(() => {


            return () => {
                definitionsEvaluators.forEach(([e]) => e()()())
                systemEvaluators.forEach(([e]) => e()()())
            }
        })

        setEvaluate(() => evaluate.value)
    }


    return <>
        <>{program.components.map((c, i) => <ComponentDefinition node={c} setEvaluate={definitionsEvaluators[i][1]} />)}</>
        <>{program.systems.map((s, i) => <System node={s} setEvaluate={systemEvaluators[i][1]} />)}</>
    </>
}

export default Program;
