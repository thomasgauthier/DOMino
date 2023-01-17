import { Literal } from "ecss-parser/dist/ast-types";
import { EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../../../../../node";


type Props = EntityNodeEvaluatorProps<{ node: Literal, setEvaluate: (evaluate: () => (eid: number) => boolean | number | "unset") => void }>


const Literal: EntityNodeEvaluator<Props> = ({ node, setEvaluate }) => {
    if (setEvaluate) {
        const _val = node.value
        const val = _val == "unset" ? _val : JSON.parse(_val)

        setEvaluate(() => (eid: number) => {

            return val as boolean | number | "unset"
        });
    }


    return <></>
}

export default Literal
