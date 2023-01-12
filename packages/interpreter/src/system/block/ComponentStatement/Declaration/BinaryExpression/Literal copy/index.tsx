import { Literal } from "ecss-parser/dist/ast-types";
import { EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../../../../../node";


type Props = EntityNodeEvaluatorProps<{ node: Literal }>


const component: EntityNodeEvaluator<Props> = ({ node, setEvaluate }) => {
    const _val = node.value

    if (setEvaluate) {
        setEvaluate(() => (eid: number) => {
            
            return JSON.parse(_val) as boolean | number
        });
    }


    return <></>
}

export default component
