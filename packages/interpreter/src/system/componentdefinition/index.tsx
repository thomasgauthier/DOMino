import { ComponentDefinition as ASTComponentDefinition } from "ecss-parser/dist/ast-types";
import { useOutsideWorldContext } from "../../contexts/OutsideWorldContext";
import { NodeEvaluator, NodeEvaluatorProps } from "../../node";
import { useMemo, useState } from "../../reactive";
import Property from "./property";


type Props = NodeEvaluatorProps<{ node: ASTComponentDefinition }>

const ComponentDefinition: NodeEvaluator<Props> = ({ node: componentDefinition, setEvaluate }) => {
    const { defineComponent } = useOutsideWorldContext()

    const evaluators = componentDefinition.properties.map(() => useState<() => () => void>(() => () => { }))

    if (setEvaluate) {
        const evaluate = useMemo(() => {
            const resolvedEvaluators = evaluators.map(e => e[0]()())

            return () => {

                let schema = resolvedEvaluators.reduce((acc, e, i) => {
                    return {
                        ...acc, ...{
                            [componentDefinition.properties[i].name]: e()
                        }
                    }
                }, {})

                if (Object.keys(schema).length === 0) {
                    schema = {
                        is: "i32"
                    }
                }

                defineComponent(componentDefinition.name, schema);
            }
        })

        setEvaluate(() => evaluate.value)
    }


    return <>

        {componentDefinition.properties.map((property, i) => {
            return <Property node={property} setEvaluate={evaluators[i][1]} />
        })}

    </>
}

export default ComponentDefinition