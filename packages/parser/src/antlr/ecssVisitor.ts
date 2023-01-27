// Generated from antlr/ecss.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./ecssParser";
import { KeyframeContext } from "./ecssParser";
import { SystemContext } from "./ecssParser";
import { SystemHeaderContext } from "./ecssParser";
import { ComponentSelectorContext } from "./ecssParser";
import { ComponentIdContext } from "./ecssParser";
import { QueryExpressionContext } from "./ecssParser";
import { QueryOperationParametersContext } from "./ecssParser";
import { IntersectionQueryContext } from "./ecssParser";
import { SetoperatorContext } from "./ecssParser";
import { SetOperatorNotContext } from "./ecssParser";
import { SetOperatorAnyContext } from "./ecssParser";
import { ComponentAsContext } from "./ecssParser";
import { ComponentAttributesContext } from "./ecssParser";
import { ComponentAttributeContext } from "./ecssParser";
import { ComponentAttributeComparatorContext } from "./ecssParser";
import { ComponentAttributeValueContext } from "./ecssParser";
import { VarContext } from "./ecssParser";
import { QueryvarContext } from "./ecssParser";
import { SystemBodyContext } from "./ecssParser";
import { StatementPlaceHolderContext } from "./ecssParser";
import { ComponentStatementsContext } from "./ecssParser";
import { ComponentStatementContext } from "./ecssParser";
import { FunctionContext } from "./ecssParser";
import { FunctionNameContext } from "./ecssParser";
import { FunctionParametersContext } from "./ecssParser";
import { MathoperatoradditionsContext } from "./ecssParser";
import { MathoperatorfactorsContext } from "./ecssParser";
import { ExpressionContext } from "./ecssParser";
import { TermContext } from "./ecssParser";
import { FactorContext } from "./ecssParser";
import { LiteralContext } from "./ecssParser";
import { StringLiteralContext } from "./ecssParser";
import { RgbContext } from "./ecssParser";
import { RgbaContext } from "./ecssParser";
import { BoolvalContext } from "./ecssParser";
import { EventHandlerContext } from "./ecssParser";
import { EventHandlerHeaderContext } from "./ecssParser";
import { EventHandlerBodyContext } from "./ecssParser";
import { ArgumentsContext } from "./ecssParser";
import { ArgumentContext } from "./ecssParser";
import { AtRuleHeaderContext } from "./ecssParser";
import { AtRuleContext } from "./ecssParser";
import { VariableAssignmentContext } from "./ecssParser";
import { VariableAssignmentValueContext } from "./ecssParser";
import { DefineContext } from "./ecssParser";
import { DefineHeaderContext } from "./ecssParser";
import { QueryContext } from "./ecssParser";
import { QueryHeaderContext } from "./ecssParser";
import { ComponentPropertyIdContext } from "./ecssParser";
import { TypeContext } from "./ecssParser";
import { DefineDeclarationsContext } from "./ecssParser";
import { DefineDeclarationContext } from "./ecssParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ecssParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ecssVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ecssParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.keyframe`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyframe?: (ctx: KeyframeContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.system`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSystem?: (ctx: SystemContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.systemHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSystemHeader?: (ctx: SystemHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.componentSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentSelector?: (ctx: ComponentSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.componentId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentId?: (ctx: ComponentIdContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.queryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryExpression?: (ctx: QueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.queryOperationParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryOperationParameters?: (ctx: QueryOperationParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.intersectionQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntersectionQuery?: (ctx: IntersectionQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.setoperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetoperator?: (ctx: SetoperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.setOperatorNot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperatorNot?: (ctx: SetOperatorNotContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.setOperatorAny`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperatorAny?: (ctx: SetOperatorAnyContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.componentAs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentAs?: (ctx: ComponentAsContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.componentAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentAttributes?: (ctx: ComponentAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.componentAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentAttribute?: (ctx: ComponentAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.componentAttributeComparator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentAttributeComparator?: (ctx: ComponentAttributeComparatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.componentAttributeValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentAttributeValue?: (ctx: ComponentAttributeValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.queryvar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryvar?: (ctx: QueryvarContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.systemBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSystemBody?: (ctx: SystemBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.statementPlaceHolder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementPlaceHolder?: (ctx: StatementPlaceHolderContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.componentStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentStatements?: (ctx: ComponentStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.componentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentStatement?: (ctx: ComponentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.functionParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParameters?: (ctx: FunctionParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.mathoperatoradditions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMathoperatoradditions?: (ctx: MathoperatoradditionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.mathoperatorfactors`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMathoperatorfactors?: (ctx: MathoperatorfactorsContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.rgb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRgb?: (ctx: RgbContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.rgba`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRgba?: (ctx: RgbaContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.boolval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolval?: (ctx: BoolvalContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.eventHandler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventHandler?: (ctx: EventHandlerContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.eventHandlerHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventHandlerHeader?: (ctx: EventHandlerHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.eventHandlerBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventHandlerBody?: (ctx: EventHandlerBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.atRuleHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtRuleHeader?: (ctx: AtRuleHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.atRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtRule?: (ctx: AtRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.variableAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableAssignment?: (ctx: VariableAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.variableAssignmentValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableAssignmentValue?: (ctx: VariableAssignmentValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.define`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefine?: (ctx: DefineContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.defineHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefineHeader?: (ctx: DefineHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.queryHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryHeader?: (ctx: QueryHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.componentPropertyId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentPropertyId?: (ctx: ComponentPropertyIdContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.defineDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefineDeclarations?: (ctx: DefineDeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `ecssParser.defineDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefineDeclaration?: (ctx: DefineDeclarationContext) => Result;
}

