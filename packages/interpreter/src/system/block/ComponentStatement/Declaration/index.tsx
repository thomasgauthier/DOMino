import { Declaration as ASTDeclaration, StringLiteral as ASTStringLiteral } from "ecss-parser/dist/ast-types";
import BinaryExpression from "./BinaryExpression"
import Function from "./Function"
import Identifier from "./BinaryExpression/Identifier"
import { EntityNodeEvaluator, EntityNodeEvaluatorProps } from "../../../../node";
import React2 from "../../../../react2";
import { useEffect, useMemo, useState } from "../../../../reactive";
import { useBlockContext } from "../../../../contexts/BlockContext";
import Literal from "./BinaryExpression/Literal";
import StringLiteral from "./BinaryExpression/StringLiteral";
import { useOutsideWorldContext } from "../../../../contexts/OutsideWorldContext";
import { componentStringNameToComponentProperty } from "../../../../utils";


type Props = EntityNodeEvaluatorProps<{ node: ASTDeclaration }>

const Declaration: EntityNodeEvaluator<Props> = ({ node: declaration, setEvaluate }) => {
    const { writeComponent, removeComponent, highlightCode, componentNameToComponent } = useOutsideWorldContext()

    const ctx = useBlockContext()

    const [childEvaluate, setChildEvaluate] = useState<() => (eid: number) => number | boolean | string | "unset">(() => (eid: number) => 0)


    if (setEvaluate) {

        const evaluate = useMemo(() => {

            const evChild = childEvaluate()();

            if (typeof evChild === 'function') {
                return (eid: number) => {
                    highlightCode(declaration.loc);
                    const resolvedName = ctx.evaluateComponentIdentifier(declaration.componentIdentifier.name);
                    const [name, property] = componentStringNameToComponentProperty(resolvedName);

                    if (evChild(eid) == 'unset') {
                        removeComponent(componentNameToComponent(name), eid);
                    } else {
                        writeComponent(componentNameToComponent(name), property, evChild(eid), eid)
                    }


                }
            }
        })

        setEvaluate(() => evaluate.value);
    }


    return <>
        <Identifier node={declaration.componentIdentifier} />
        {declaration.value.type === 'Function' && <Function node={declaration.value} setEvaluate={setChildEvaluate} />}
        {declaration.value.type === 'BinaryExpression' && <BinaryExpression node={declaration.value} setEvaluate={setChildEvaluate} />}
        {declaration.value.type === 'Literal' && <Literal node={declaration.value} setEvaluate={setChildEvaluate} />}
        {declaration.value.type === 'StringLiteral' && <StringLiteral node={declaration.value} setEvaluate={setChildEvaluate} />}
        {declaration.value.type === 'Identifier' && <Identifier node={declaration.value} setEvaluate={setChildEvaluate} />}
    </>
}

export default Declaration
