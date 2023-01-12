import { Types } from "bitecs";
import { Property as ASTProperty } from "ecss-parser/dist/ast-types";
import { NodeEvaluator, NodeEvaluatorProps } from "../../../node";


type Props = NodeEvaluatorProps<{ node: ASTProperty }>

const Property: NodeEvaluator<Props> = ({ node: property, setEvaluate }) => {

    if (setEvaluate) {
        setEvaluate(() => () => {
            return property.propertyType === 'number' ? Types.f32 : (property.propertyType == 'boolean' ? Types.ui32 : null)
        })
    }

    return <></>
}

export default Property


