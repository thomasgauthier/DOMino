import { CompoundSelector as ASTCompoundSelector, Literal as ASTLiteral } from "ecss-parser/dist/ast-types";
import { useOutsideWorldContext } from "../../../contexts/OutsideWorldContext";
import { EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../../node";
import { componentStringNameToComponentProperty } from "../../../utils";
type Props = EntityNodeEvaluatorProps<{ node: ASTCompoundSelector, setEvaluate: (val: () => () => Set<number>) => void }>
import ComponentSelector from "./ComponentSelector";
const CompoundSelector: EntityNodeEvaluator<Props> = ({ node: compoundSelector, setEvaluate }) => {
    const { defineQuery, componentNameToComponent, readComponent } = useOutsideWorldContext()


    if (setEvaluate) {
        setEvaluate(() => {
            const components = compoundSelector.selectors.map(s => componentNameToComponent(s.identifier.name));

            const query = defineQuery(components);

            const guards = compoundSelector.selectors.map(s => (s.matcher && !(s.value.type == 'Identifier' && s.value.name && s.value.name.startsWith('?'))) ?
            
            (eid: number) => {

                const [name, property] = componentStringNameToComponentProperty(s.identifier.name);

                if(s.matcher == '=') {
                    return readComponent(componentNameToComponent(name), property, eid) == JSON.parse((s.value as ASTLiteral).value);
                }

                if(s.matcher == '<') {
                    return readComponent(componentNameToComponent(name), property, eid) < JSON.parse((s.value as ASTLiteral).value);
                }

                if(s.matcher == '>') {                    
                    return readComponent(componentNameToComponent(name), property, eid) > JSON.parse((s.value as ASTLiteral).value);
                }

                if(s.matcher == '<=') {
                    return readComponent(componentNameToComponent(name), property, eid) <= JSON.parse((s.value as ASTLiteral).value);
                }

                if(s.matcher == '>=') {
                    return readComponent(componentNameToComponent(name), property, eid) >= JSON.parse((s.value as ASTLiteral).value);
                }
            } : null).filter(f => f !== null)

            return () => {
                const set = query();
                return new Set([...set].filter(eid => guards.every(g => g(eid))));
            }

        })
    }
    return <>
        {compoundSelector.selectors.map(s => <ComponentSelector node={s} />)}
    </>

}

export default CompoundSelector
