import { StringLiteral as ASTStringLiteral } from "ecss-parser/dist/ast-types";
import { EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../../../../../node";


type Props = EntityNodeEvaluatorProps<{ node: ASTStringLiteral, setEvaluate: (evaluate: () => (eid: number) => string) => void }>


const ASTStringLiteral: EntityNodeEvaluator<Props> = ({ node: stringLiteral, setEvaluate }) => {
    if (setEvaluate) {

        const _val = stringLiteral.value

        const val = JSON.parse(_val);

        const llsd = () => (eid: number) => {

            return val as string;
        };

        setEvaluate(llsd);
    }


    return <></>
}

export default ASTStringLiteral
