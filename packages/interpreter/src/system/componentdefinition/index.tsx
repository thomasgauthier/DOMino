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

                const schema = resolvedEvaluators.reduce((acc, e, i) => {

                    return {
                        ...acc, ...{
                            [componentDefinition.properties[i].name]: e()
                        }
                    }
                }, {})

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


// program?.components.forEach(c => {
//     if (c.properties.length) {
//         const schema = c.properties.reduce((acc, c) => {


//             acc[c.name] = (c.propertyType == 'number') ? Types.f32 : (
//                 c.propertyType == 'boolean' ? Types.ui32 : c.propertyType
//             )

//             return acc;
//         }, {})


//         const component = defineComponent(schema)
//         definedComponents.set(c.name, component)
//     } else {
//         const component = defineComponent({ is: Types.i32 })
//         definedComponents.set(c.name, component)
//     }
// })
