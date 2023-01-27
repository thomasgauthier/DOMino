import { ParserRuleContext } from "antlr4ts";
import { ASTNode, BinaryExpression, Block, ComponentSelector, ComponentStatement, Declaration, EventHandler, Identifier, Literal, StringLiteral, Program, BinarySelector, Query, System, ComponentDefinition, Property, AtQuery, CompoundSelector, OperatorArgumentList, FunctionArgumentList, WildcardSelector, Function, Keyframe } from "./ast-types";
import { AtRuleContext, ComponentIdContext, ComponentSelectorContext, ComponentStatementContext, ComponentStatementsContext, EventHandlerBodyContext, EventHandlerContext, EventHandlerHeaderContext, ExpressionContext, FactorContext, FunctionContext, FunctionParametersContext, IntersectionQueryContext, LiteralContext, MathoperatoradditionsContext, MathoperatorfactorsContext, ProgramContext, QueryContext, QueryExpressionContext, QueryOperationParametersContext, QueryvarContext, SetoperatorContext, StringLiteralContext, SystemBodyContext, SystemContext, SystemHeaderContext, TermContext } from "./antlr/ecssParser";
import { createOk, Err, Ok } from "option-t/cjs/PlainResult"

function withLoc<T extends ASTNode>(node: T, ctx: ParserRuleContext) {
    return {
        ...node, loc: {
            start: {
                line: ctx.start.line,
                column: ctx.start.charPositionInLine,
                offset: ctx.start.startIndex
            },
            end: {
                line: ctx.stop!.line,
                column: ctx.stop!.charPositionInLine,
                offset: ctx.stop!.stopIndex + 1
            }
        }
    }
}

export function visitProgram(ctx: ProgramContext): Ok<Program> | Err<any> {


    const program: Program = {
        type: 'Program',
        components: [],
        systems: [],
        keyframes: []
    }

    if (ctx.system()) {
        for (let system of ctx.system()) {
            if (system.text.length) {
                program.systems.push(visitSystem(system));
            }
        }
    }

    if (ctx.keyframe()) {

        for (let keyframe of ctx.keyframe()) {
            const from = [];
            const to = [];

            let inside: 'from' | 'to' | 'none' = 'none'
            keyframe.children.forEach(c => {

                if (c.text === 'from') {
                    inside = 'from'
                }


                if (c.text === 'to') {
                    inside = 'to'
                }

                if (c instanceof ComponentStatementsContext) {

                    if (inside === 'from') {
                        const dldl = c.componentStatement().map(cc => visitComponentStatement(cc!))
                        return from.push(...c.componentStatement().map(cc => visitComponentStatement(cc!)));
                    }

                    if (inside === 'to') {
                        return to.push(...c.componentStatement().map(cc => visitComponentStatement(cc!)));
                    }
                }

            })

            program.keyframes.push(withLoc<Keyframe>({
                type: 'Keyframe',
                from: {
                    type: 'Block',
                    children: from
                },
                to: {
                    type: 'Block',
                    children: to
                }
            }, keyframe))
        }
    }

    if (ctx.define()?.length) {
        const components = ctx.define().map(def => {

            const componentDefinition: ComponentDefinition = {
                type: 'ComponentDefinition',
                name: def.defineHeader().componentId().text,
                properties: []
            }

            if (def.defineDeclarations()) {
                def.defineDeclarations().defineDeclaration().forEach(defineDeclaration => {

                    const type = defineDeclaration.type().text

                    if (new Set(["i8", "ui8", "ui8c", "i16", "ui16", "i32", "ui32", "f32", "f64", "eid", "number", "boolean"]).has(type)) {
                        const property = withLoc<Property>({
                            type: 'Property',
                            name: defineDeclaration.componentPropertyId().text,
                            propertyType: type as "i8" | "ui8" | "ui8c" | "i16" | "ui16" | "i32" | "ui32" | "f32" | "f64" | "eid" | "number" | "boolean"
                        }, defineDeclaration)

                        componentDefinition.properties.push(property)
                    }
                })
            }


            return withLoc<ComponentDefinition>(componentDefinition, def)
        })

        program.components = components;
    }


    return createOk(program);
}

function visitSystem(ctx: SystemContext): System {

    return withLoc<System>({
        type: 'System',
        query: {
            type: 'Query',
            selector: visitQueryExpresion(ctx.systemHeader().queryExpression()),
            text: ctx.systemHeader().queryExpression().text
        },
        body: visitSystemBody(ctx.systemBody())
    }, ctx)
}

function visitAtRule(ctx: AtRuleContext) {
    if (ctx.query()) {
        const p = ctx.query().children.map(c => {
            if (c instanceof ComponentStatementsContext) {
                return c.componentStatement().map(cc => visitComponentStatement(cc!))
            }

            if (c instanceof EventHandlerContext) {
                return visitEventHandler(c);
            }

            if (c instanceof AtRuleContext && c.query()) {
                return visitAtRule(c)
            }
        }).filter(e => e).flat()

        const block = p.length ? withLoc<Block>({
            type: 'Block',
            children: p
        }, ctx.query().componentStatements()[0] || ctx.query().eventHandler()[0] || ctx.query().atRule()[0]) : {
            type: 'Block',
            children: []
        } as Block;




        const query = withLoc<Query>({
            type: 'Query',
            selector: visitQueryExpresion(ctx.query().queryHeader().queryExpression()),
            text: ctx.query().queryHeader().queryExpression().text
        }, ctx.query().queryHeader().queryExpression());


        return withLoc<AtQuery>({
            type: 'AtQuery',
            query,
            body: block
        }, ctx)
    }
}

function visitSystemBody(ctx: SystemBodyContext): Block {
    const children = ctx.children.map(c => {
        if (c instanceof ComponentStatementsContext) {
            return c.componentStatement().map(cc => visitComponentStatement(cc!))
        }

        if (c instanceof EventHandlerContext) {
            return visitEventHandler(c);
        }

        if (c instanceof AtRuleContext && c.query()) {
            return visitAtRule(c)
        }
    }).flat().filter(c => typeof c != 'undefined');

    return withLoc<Block>({
        type: 'Block',
        children: children
    }, ctx)
}

function visitEventHandler(ctx: EventHandlerContext) {
    return withLoc<EventHandler>({
        type: 'EventHandler',
        event: ctx.eventHandlerHeader().text,
        body: visitEventHandlerBody(ctx.eventHandlerBody()),
    }, ctx);
}


function visitEventHandlerBody(ctx: EventHandlerBodyContext) {
    const children = ctx.children.map(c => {
        if (c instanceof ComponentStatementsContext) {
            return c.componentStatement().map(cc => visitComponentStatement(cc!))
        }

        if (c instanceof AtRuleContext) {
            return visitAtRule(c);
        }
    }).flat().filter(c => typeof c != 'undefined');


    return withLoc<Block>({
        type: 'Block',
        children
    }, ctx);
}

function visitComponentStatement(ctx: ComponentStatementContext): ComponentStatement {

    return withLoc<ComponentStatement>({
        type: "ComponentStatement",
        declaration: withLoc<Declaration>({
            type: 'Declaration',
            componentIdentifier: visitComponentId(ctx.componentId()!),
            value: ctx.expression() ? visitExpression(ctx.expression()) : visitFunction(ctx.function())
        }, ctx)
    }, ctx)

}

function visitFunction(ctx: FunctionContext): Function {
    try {
        return withLoc<Function>({
            type: 'Function',
            arguments: withLoc<FunctionArgumentList>({
                type: 'FunctionArgumentList',
                arguments: visitFunctionParameters(ctx.functionParameters()),
            }, ctx.functionParameters()),
            functionName: ctx.functionName().text
        }, ctx)
    } catch (error) {
        throw new Error(JSON.stringify({ start: ctx.start, stop: ctx.stop }))
    }

}

function visitFunctionParameters(ctx: FunctionParametersContext) {
    return ctx.children.map(c => {
        if (c instanceof ExpressionContext) {
            return visitExpression(c)
        }

        if (c instanceof QueryvarContext) {
            return withLoc<Identifier>({
                type: 'Identifier',
                name: c.text
            }, c)
        }

        if (c instanceof LiteralContext) {
            return withLoc<Literal>({
                type: 'Literal',
                value: c.text
            }, c)
        }

        if (c instanceof StringLiteralContext) {
            return withLoc<StringLiteral>({
                type: 'StringLiteral',
                value: c.text
            }, c)
        }

        if (c instanceof FunctionContext) {
            return visitFunction(c)
        }
    }).filter(param => param)
}

function visitExpression(ctx: ExpressionContext): Function | BinaryExpression | Literal | StringLiteral | Identifier {
    if (ctx.childCount == 1 && ctx.term().length) {
        return visitTerm(ctx.term(0))
    } else if (ctx.childCount == 3 && (ctx.mathoperatoradditions())) {
        return withLoc<BinaryExpression>({
            type: 'BinaryExpression',
            left: visitTerm(ctx.term(0)!),
            right: visitTerm(ctx.term(1)!),
            operator: ctx.mathoperatoradditions(0).text as ('+' | '-' | '*' | '/' | '%')
        }, ctx)
    } else if (ctx.term().length >= 3) {
        let terms = ctx.term().map(term => visitTerm(term));
        let operators = ctx.mathoperatoradditions();

        function buildTree(terms: (Function | BinaryExpression | Literal | StringLiteral | Identifier)[], operators: MathoperatoradditionsContext[]) {
            if (terms.length == 1) {
                return terms[0]
            } else {
                const last = terms.pop();
                const lastOp = operators.pop();

                const left = buildTree(terms, operators);

                return {
                    type: 'BinaryExpression',
                    left: left,
                    right: last,
                    operator: lastOp.text,
                    loc: {
                        start: left.loc.start,
                        end: last!.loc!.end
                    }
                }
            }
        }

        const tree = buildTree(terms, operators) as BinaryExpression

        return withLoc<BinaryExpression>(tree as BinaryExpression, ctx);
    }
}


function visitTerm(ctx: TermContext): Function | Literal | StringLiteral | Identifier | BinaryExpression {

    if (ctx.childCount == 1 && ctx.factor(0)) {
        return visitFactor(ctx.factor(0));
    } else if (ctx.childCount === 3 && ctx.factor().length == 2) {
        return withLoc<BinaryExpression>({
            type: 'BinaryExpression',
            left: ctx.factor(0).expression() ? visitExpression(ctx.factor(0).expression()) : visitFactor(ctx.factor(0)),
            right: ctx.factor(1).expression() ? visitExpression(ctx.factor(1).expression()) : visitFactor(ctx.factor(1)),
            operator: ctx.mathoperatorfactors(0).text as ('+' | '-' | '*' | '/' | '%')
        }, ctx)
    } else if (ctx.factor().length > 2) {
        let factors = ctx.factor().map(factor => factor.expression() ? visitExpression(factor.expression()) : visitFactor(factor));
        let operators = ctx.mathoperatorfactors();

        function buildTree(factors: (Function | BinaryExpression | Literal | StringLiteral | Identifier)[], operators: MathoperatorfactorsContext[]) {
            if (factors.length == 1) {
                return factors[0]
            } else {
                const last = factors.pop();
                const lastOp = operators.pop();

                const left = buildTree(factors, operators);

                return {
                    type: 'BinaryExpression',
                    left: left,
                    right: last,
                    operator: lastOp.text,
                    loc: {
                        start: left.loc.start,
                        end: last.loc.end
                    }
                }
            }
        }

        const tree = buildTree(factors, operators) as BinaryExpression

        return withLoc<BinaryExpression>(tree as BinaryExpression, ctx);
    }
}

function visitFactor(ctx: FactorContext): Function | Literal | StringLiteral | Identifier | BinaryExpression {
    if (ctx.function()) {
        return visitFunction(ctx.function())
    }
    else if (ctx.queryvar()) {
        return withLoc<Identifier>({
            type: 'Identifier',
            name: ctx.queryvar().text
        }, ctx.queryvar())
    } else if (ctx.var()) {
        return withLoc<Identifier>({
            type: 'Identifier',
            name: ctx.var().text
        }, ctx.var())
    } else if (ctx.literal()?.stringLiteral()) {
        return withLoc<StringLiteral>({
            type: 'StringLiteral',
            value: ctx.text
        }, ctx)
    } else if (ctx.expression()) {
        return visitExpression(ctx.expression())
    } else {
        return withLoc<Literal>({
            type: 'Literal',
            value: ctx.text
        }, ctx)
    }
}

function visitLiteral(ctx: LiteralContext | StringLiteralContext) {
    if (ctx instanceof StringLiteralContext) {
        return withLoc<StringLiteral>({
            type: 'StringLiteral',
            value: ctx.text
        }, ctx)
    } else {
        return withLoc<Literal>({
            type: 'Literal',
            value: ctx.text
        }, ctx)
    }
}

function visitComponentId(ctx: ComponentIdContext): Identifier {

    return withLoc<Identifier>({
        type: 'Identifier',
        name: ctx.text
    }, ctx)

}

function visitQueryExpresion(ctx: QueryExpressionContext): BinarySelector | CompoundSelector | WildcardSelector {
    function buildTree(terms: (IntersectionQueryContext | QueryOperationParametersContext | QueryExpressionContext | WildcardSelector)[], operators: SetoperatorContext[]): BinarySelector | CompoundSelector | WildcardSelector {
        if (terms.length == 1) {
            const term = terms[0] instanceof QueryOperationParametersContext && terms[0].childCount == 1 ? terms[0].getChild(0) : terms[0];

            if (term instanceof IntersectionQueryContext) {
                return visitIntersectionQuery(term);
            } else {
                const wildCard = withLoc<WildcardSelector>({ type: 'WildcardSelector' }, (term as ParserRuleContext).parent.parent);
                wildCard.loc.end = wildCard.loc.start;

                return wildCard;
            }
        } else {
            let poppedTerm = terms.pop();
            const last = poppedTerm instanceof QueryOperationParametersContext && poppedTerm.childCount == 1 ? poppedTerm.getChild(0) : poppedTerm;
            const lastOp = operators.pop();

            const left = buildTree(terms, operators);
            const r = last instanceof IntersectionQueryContext ? visitIntersectionQuery(last) :
                (last instanceof QueryExpressionContext ? visitQueryExpresion(last) :
                    (last instanceof QueryOperationParametersContext ? visitQueryOperationParameters(last) : null))


            let right: OperatorArgumentList;

            if (r.type === 'BinarySelector' || r.type == 'CompoundSelector') {
                right = {
                    type: "OperatorArgumentList",
                    selectors: [r],
                    loc: r.loc
                }

            };

            if (r.type === 'OperatorArgumentList') {
                right = r;
            }

            return {
                type: 'BinarySelector',
                left: left,
                right: right,
                operator: lastOp.text as ':any' | ':not',
                loc: {
                    start: {
                        line: ctx.start.line,
                        column: ctx.start.charPositionInLine,
                        offset: ctx.start.startIndex
                    },
                    end: {
                        line: right.loc.end.line,
                        column: right.loc.end.column + 1,
                        offset: right.loc.end.offset + 1
                    }
                }
            }
        }
    }

    const terms = ctx.children.map(child => {
        if (child instanceof QueryExpressionContext) {
            return child
        }

        if (child instanceof IntersectionQueryContext) {
            return child
        }

        if (child instanceof QueryOperationParametersContext) {
            return child;
        }
    }).filter(u => typeof u != 'undefined')


    return buildTree(terms, ctx.setoperator())
}

function visitIntersectionQuery(ctx: IntersectionQueryContext): CompoundSelector {
    return withLoc<CompoundSelector>({
        type: 'CompoundSelector',
        selectors: ctx.componentSelector().map(s => visitComponentSelector(s))
    }, ctx)
}


function visitQueryOperationParameters(ctx: QueryOperationParametersContext): OperatorArgumentList {
    ctx.queryExpression
    return withLoc<OperatorArgumentList>({
        type: 'OperatorArgumentList',
        selectors: ctx.children.map(i => i instanceof IntersectionQueryContext ? visitIntersectionQuery(i) : (i instanceof QueryExpressionContext && visitQueryExpresion(i) as CompoundSelector | BinarySelector)).filter(t => t.type)
    }, ctx)
}

function visitComponentSelector(ctx: ComponentSelectorContext): ComponentSelector {
    const value = ctx.componentAttribute()?.componentAttributeValue()?.queryvar() ? withLoc<Identifier>({
        type: 'Identifier',
        name: ctx.componentAttribute()?.componentAttributeValue()?.queryvar().text,
    }, ctx.componentAttribute()?.componentAttributeValue()?.queryvar()) : (ctx.componentAttribute() ? withLoc<Literal>({
        type: 'Literal',
        value: ctx.componentAttribute().componentAttributeValue().text
    }, ctx.componentAttribute().componentAttributeValue())
        : undefined
    )


    if (ctx.componentAttribute()) {
        return withLoc<ComponentSelector>({
            type: "ComponentSelector",
            identifier: withLoc<Identifier>({
                type: 'Identifier',
                name: ctx.componentAttribute()!.componentId()!.text,
            }, ctx.componentAttribute()!.componentId()!),
            matcher: ctx.componentAttribute().componentAttributeComparator().text as "=" | "<" | ">" | "<=" | ">=",
            value: value
        }, ctx);
    } /*else if (ctx.selector().componentSelector().componentAttribute().componentAttributeValue().queryvar()) {
        return withLoc<ComponentSelector>({
            type: "ComponentSelector",
            boundedEntity: withLoc<Identifier>({
                type: 'Identifier',
                name: ctx.queryvar()!.text,
            }, ctx.queryvar()ctx.queryvar()!),
            identifier: withLoc<Identifier>({
                type: 'Identifier',
                name: ctx.componentId()!.text,
            }, ctx.componentId()!),
        }, ctx);
    } */else if (ctx.componentAs()) {
        return withLoc<ComponentSelector>({
            type: "ComponentSelector",
            as: withLoc<Identifier>({
                type: 'Identifier',
                name: ctx.componentAs().componentId(1).text
            }, ctx.componentAs().componentId(1)),
            identifier: withLoc<Identifier>({
                type: 'Identifier',
                name: ctx.componentAs().componentId(0)!.text,
            }, ctx.componentAs().componentId(0)!),
        }, ctx);
    } else {
        return withLoc<ComponentSelector>({
            type: "ComponentSelector",
            identifier: withLoc<Identifier>({
                type: 'Identifier',
                name: ctx.componentId()!.text,
            }, ctx.componentId()!),
        }, ctx);
    }
}