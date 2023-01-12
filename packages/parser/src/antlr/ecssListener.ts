// Generated from antlr/ecss.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./ecssParser";
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
import { ComponentAttributeValueContext } from "./ecssParser";
import { VarContext } from "./ecssParser";
import { QueryvarContext } from "./ecssParser";
import { SystemBodyContext } from "./ecssParser";
import { ComponentStatementsContext } from "./ecssParser";
import { ComponentStatementContext } from "./ecssParser";
import { FunctionContext } from "./ecssParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `ecssParser`.
 */
export interface ecssListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ecssParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.system`.
	 * @param ctx the parse tree
	 */
	enterSystem?: (ctx: SystemContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.system`.
	 * @param ctx the parse tree
	 */
	exitSystem?: (ctx: SystemContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.systemHeader`.
	 * @param ctx the parse tree
	 */
	enterSystemHeader?: (ctx: SystemHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.systemHeader`.
	 * @param ctx the parse tree
	 */
	exitSystemHeader?: (ctx: SystemHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.componentSelector`.
	 * @param ctx the parse tree
	 */
	enterComponentSelector?: (ctx: ComponentSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.componentSelector`.
	 * @param ctx the parse tree
	 */
	exitComponentSelector?: (ctx: ComponentSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.componentId`.
	 * @param ctx the parse tree
	 */
	enterComponentId?: (ctx: ComponentIdContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.componentId`.
	 * @param ctx the parse tree
	 */
	exitComponentId?: (ctx: ComponentIdContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.queryExpression`.
	 * @param ctx the parse tree
	 */
	enterQueryExpression?: (ctx: QueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.queryExpression`.
	 * @param ctx the parse tree
	 */
	exitQueryExpression?: (ctx: QueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.queryOperationParameters`.
	 * @param ctx the parse tree
	 */
	enterQueryOperationParameters?: (ctx: QueryOperationParametersContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.queryOperationParameters`.
	 * @param ctx the parse tree
	 */
	exitQueryOperationParameters?: (ctx: QueryOperationParametersContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.intersectionQuery`.
	 * @param ctx the parse tree
	 */
	enterIntersectionQuery?: (ctx: IntersectionQueryContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.intersectionQuery`.
	 * @param ctx the parse tree
	 */
	exitIntersectionQuery?: (ctx: IntersectionQueryContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.setoperator`.
	 * @param ctx the parse tree
	 */
	enterSetoperator?: (ctx: SetoperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.setoperator`.
	 * @param ctx the parse tree
	 */
	exitSetoperator?: (ctx: SetoperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.setOperatorNot`.
	 * @param ctx the parse tree
	 */
	enterSetOperatorNot?: (ctx: SetOperatorNotContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.setOperatorNot`.
	 * @param ctx the parse tree
	 */
	exitSetOperatorNot?: (ctx: SetOperatorNotContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.setOperatorAny`.
	 * @param ctx the parse tree
	 */
	enterSetOperatorAny?: (ctx: SetOperatorAnyContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.setOperatorAny`.
	 * @param ctx the parse tree
	 */
	exitSetOperatorAny?: (ctx: SetOperatorAnyContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.componentAs`.
	 * @param ctx the parse tree
	 */
	enterComponentAs?: (ctx: ComponentAsContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.componentAs`.
	 * @param ctx the parse tree
	 */
	exitComponentAs?: (ctx: ComponentAsContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.componentAttributes`.
	 * @param ctx the parse tree
	 */
	enterComponentAttributes?: (ctx: ComponentAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.componentAttributes`.
	 * @param ctx the parse tree
	 */
	exitComponentAttributes?: (ctx: ComponentAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.componentAttribute`.
	 * @param ctx the parse tree
	 */
	enterComponentAttribute?: (ctx: ComponentAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.componentAttribute`.
	 * @param ctx the parse tree
	 */
	exitComponentAttribute?: (ctx: ComponentAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.componentAttributeValue`.
	 * @param ctx the parse tree
	 */
	enterComponentAttributeValue?: (ctx: ComponentAttributeValueContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.componentAttributeValue`.
	 * @param ctx the parse tree
	 */
	exitComponentAttributeValue?: (ctx: ComponentAttributeValueContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.queryvar`.
	 * @param ctx the parse tree
	 */
	enterQueryvar?: (ctx: QueryvarContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.queryvar`.
	 * @param ctx the parse tree
	 */
	exitQueryvar?: (ctx: QueryvarContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.systemBody`.
	 * @param ctx the parse tree
	 */
	enterSystemBody?: (ctx: SystemBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.systemBody`.
	 * @param ctx the parse tree
	 */
	exitSystemBody?: (ctx: SystemBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.componentStatements`.
	 * @param ctx the parse tree
	 */
	enterComponentStatements?: (ctx: ComponentStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.componentStatements`.
	 * @param ctx the parse tree
	 */
	exitComponentStatements?: (ctx: ComponentStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.componentStatement`.
	 * @param ctx the parse tree
	 */
	enterComponentStatement?: (ctx: ComponentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.componentStatement`.
	 * @param ctx the parse tree
	 */
	exitComponentStatement?: (ctx: ComponentStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.functionParameters`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameters?: (ctx: FunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.functionParameters`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameters?: (ctx: FunctionParametersContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.mathoperatoradditions`.
	 * @param ctx the parse tree
	 */
	enterMathoperatoradditions?: (ctx: MathoperatoradditionsContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.mathoperatoradditions`.
	 * @param ctx the parse tree
	 */
	exitMathoperatoradditions?: (ctx: MathoperatoradditionsContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.mathoperatorfactors`.
	 * @param ctx the parse tree
	 */
	enterMathoperatorfactors?: (ctx: MathoperatorfactorsContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.mathoperatorfactors`.
	 * @param ctx the parse tree
	 */
	exitMathoperatorfactors?: (ctx: MathoperatorfactorsContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.rgb`.
	 * @param ctx the parse tree
	 */
	enterRgb?: (ctx: RgbContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.rgb`.
	 * @param ctx the parse tree
	 */
	exitRgb?: (ctx: RgbContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.rgba`.
	 * @param ctx the parse tree
	 */
	enterRgba?: (ctx: RgbaContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.rgba`.
	 * @param ctx the parse tree
	 */
	exitRgba?: (ctx: RgbaContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.boolval`.
	 * @param ctx the parse tree
	 */
	enterBoolval?: (ctx: BoolvalContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.boolval`.
	 * @param ctx the parse tree
	 */
	exitBoolval?: (ctx: BoolvalContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.eventHandler`.
	 * @param ctx the parse tree
	 */
	enterEventHandler?: (ctx: EventHandlerContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.eventHandler`.
	 * @param ctx the parse tree
	 */
	exitEventHandler?: (ctx: EventHandlerContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.eventHandlerHeader`.
	 * @param ctx the parse tree
	 */
	enterEventHandlerHeader?: (ctx: EventHandlerHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.eventHandlerHeader`.
	 * @param ctx the parse tree
	 */
	exitEventHandlerHeader?: (ctx: EventHandlerHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.eventHandlerBody`.
	 * @param ctx the parse tree
	 */
	enterEventHandlerBody?: (ctx: EventHandlerBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.eventHandlerBody`.
	 * @param ctx the parse tree
	 */
	exitEventHandlerBody?: (ctx: EventHandlerBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.atRuleHeader`.
	 * @param ctx the parse tree
	 */
	enterAtRuleHeader?: (ctx: AtRuleHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.atRuleHeader`.
	 * @param ctx the parse tree
	 */
	exitAtRuleHeader?: (ctx: AtRuleHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.atRule`.
	 * @param ctx the parse tree
	 */
	enterAtRule?: (ctx: AtRuleContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.atRule`.
	 * @param ctx the parse tree
	 */
	exitAtRule?: (ctx: AtRuleContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.variableAssignment`.
	 * @param ctx the parse tree
	 */
	enterVariableAssignment?: (ctx: VariableAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.variableAssignment`.
	 * @param ctx the parse tree
	 */
	exitVariableAssignment?: (ctx: VariableAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.variableAssignmentValue`.
	 * @param ctx the parse tree
	 */
	enterVariableAssignmentValue?: (ctx: VariableAssignmentValueContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.variableAssignmentValue`.
	 * @param ctx the parse tree
	 */
	exitVariableAssignmentValue?: (ctx: VariableAssignmentValueContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.define`.
	 * @param ctx the parse tree
	 */
	enterDefine?: (ctx: DefineContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.define`.
	 * @param ctx the parse tree
	 */
	exitDefine?: (ctx: DefineContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.defineHeader`.
	 * @param ctx the parse tree
	 */
	enterDefineHeader?: (ctx: DefineHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.defineHeader`.
	 * @param ctx the parse tree
	 */
	exitDefineHeader?: (ctx: DefineHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.queryHeader`.
	 * @param ctx the parse tree
	 */
	enterQueryHeader?: (ctx: QueryHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.queryHeader`.
	 * @param ctx the parse tree
	 */
	exitQueryHeader?: (ctx: QueryHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.componentPropertyId`.
	 * @param ctx the parse tree
	 */
	enterComponentPropertyId?: (ctx: ComponentPropertyIdContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.componentPropertyId`.
	 * @param ctx the parse tree
	 */
	exitComponentPropertyId?: (ctx: ComponentPropertyIdContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.defineDeclarations`.
	 * @param ctx the parse tree
	 */
	enterDefineDeclarations?: (ctx: DefineDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.defineDeclarations`.
	 * @param ctx the parse tree
	 */
	exitDefineDeclarations?: (ctx: DefineDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `ecssParser.defineDeclaration`.
	 * @param ctx the parse tree
	 */
	enterDefineDeclaration?: (ctx: DefineDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ecssParser.defineDeclaration`.
	 * @param ctx the parse tree
	 */
	exitDefineDeclaration?: (ctx: DefineDeclarationContext) => void;
}

