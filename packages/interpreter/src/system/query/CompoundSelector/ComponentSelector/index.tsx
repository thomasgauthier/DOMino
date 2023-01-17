import { ComponentSelector as ASTComponentSelector, Identifier } from "ecss-parser/dist/ast-types";
import { useOutsideWorldContext } from "../../../../contexts/OutsideWorldContext";
import { useBlockContext } from "../../../../contexts/BlockContext";
import { FunctionComponent } from "../../../../node";
import { componentStringNameToComponentProperty } from "../../../../utils";
type Props = { node: ASTComponentSelector }

const ComponentSelector: FunctionComponent<Props> = ({ node: componentSelector }) => {
    const { readComponent, componentNameToComponent } = useOutsideWorldContext()

    const ctx = useBlockContext()

    if (componentSelector.value?.type == 'Identifier') {
        const evalu = () => (eid: number) => {
            const [name, property] = componentStringNameToComponentProperty(componentSelector.identifier.name);
            return readComponent(componentNameToComponent(name), property, eid);
        };
        ctx.addQueryVarEvaluator(componentSelector.value.name, evalu)
    }

    return <>
    </>

}

export default ComponentSelector
