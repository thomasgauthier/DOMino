import { Literal } from "ecss-parser/dist/ast-types";
import { EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../../../../../node";


type Props = EntityNodeEvaluatorProps<{ node: Literal, setEvaluate: (evaluate: () => (eid: number) => boolean | number) => void}>


const Literal: EntityNodeEvaluator<Props> = ({ node, setEvaluate }) => {
    if (setEvaluate) {
        const _val = node.value
        const val = JSON.parse(_val) 

        setEvaluate(() => (eid: number) => {

            return val as boolean | number
        });
    }


    return <></>
}

export default Literal
