// Generated from ecss.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ecssParser}.
 */
public interface ecssListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ecssParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(ecssParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(ecssParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#system}.
	 * @param ctx the parse tree
	 */
	void enterSystem(ecssParser.SystemContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#system}.
	 * @param ctx the parse tree
	 */
	void exitSystem(ecssParser.SystemContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#systemHeader}.
	 * @param ctx the parse tree
	 */
	void enterSystemHeader(ecssParser.SystemHeaderContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#systemHeader}.
	 * @param ctx the parse tree
	 */
	void exitSystemHeader(ecssParser.SystemHeaderContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#componentSelector}.
	 * @param ctx the parse tree
	 */
	void enterComponentSelector(ecssParser.ComponentSelectorContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#componentSelector}.
	 * @param ctx the parse tree
	 */
	void exitComponentSelector(ecssParser.ComponentSelectorContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#componentId}.
	 * @param ctx the parse tree
	 */
	void enterComponentId(ecssParser.ComponentIdContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#componentId}.
	 * @param ctx the parse tree
	 */
	void exitComponentId(ecssParser.ComponentIdContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#queryExpression}.
	 * @param ctx the parse tree
	 */
	void enterQueryExpression(ecssParser.QueryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#queryExpression}.
	 * @param ctx the parse tree
	 */
	void exitQueryExpression(ecssParser.QueryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#queryOperationParameters}.
	 * @param ctx the parse tree
	 */
	void enterQueryOperationParameters(ecssParser.QueryOperationParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#queryOperationParameters}.
	 * @param ctx the parse tree
	 */
	void exitQueryOperationParameters(ecssParser.QueryOperationParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#intersectionQuery}.
	 * @param ctx the parse tree
	 */
	void enterIntersectionQuery(ecssParser.IntersectionQueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#intersectionQuery}.
	 * @param ctx the parse tree
	 */
	void exitIntersectionQuery(ecssParser.IntersectionQueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#setoperator}.
	 * @param ctx the parse tree
	 */
	void enterSetoperator(ecssParser.SetoperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#setoperator}.
	 * @param ctx the parse tree
	 */
	void exitSetoperator(ecssParser.SetoperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#setOperatorNot}.
	 * @param ctx the parse tree
	 */
	void enterSetOperatorNot(ecssParser.SetOperatorNotContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#setOperatorNot}.
	 * @param ctx the parse tree
	 */
	void exitSetOperatorNot(ecssParser.SetOperatorNotContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#setOperatorAny}.
	 * @param ctx the parse tree
	 */
	void enterSetOperatorAny(ecssParser.SetOperatorAnyContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#setOperatorAny}.
	 * @param ctx the parse tree
	 */
	void exitSetOperatorAny(ecssParser.SetOperatorAnyContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#componentAs}.
	 * @param ctx the parse tree
	 */
	void enterComponentAs(ecssParser.ComponentAsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#componentAs}.
	 * @param ctx the parse tree
	 */
	void exitComponentAs(ecssParser.ComponentAsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#componentAttributes}.
	 * @param ctx the parse tree
	 */
	void enterComponentAttributes(ecssParser.ComponentAttributesContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#componentAttributes}.
	 * @param ctx the parse tree
	 */
	void exitComponentAttributes(ecssParser.ComponentAttributesContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#componentAttribute}.
	 * @param ctx the parse tree
	 */
	void enterComponentAttribute(ecssParser.ComponentAttributeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#componentAttribute}.
	 * @param ctx the parse tree
	 */
	void exitComponentAttribute(ecssParser.ComponentAttributeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#componentAttributeComparator}.
	 * @param ctx the parse tree
	 */
	void enterComponentAttributeComparator(ecssParser.ComponentAttributeComparatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#componentAttributeComparator}.
	 * @param ctx the parse tree
	 */
	void exitComponentAttributeComparator(ecssParser.ComponentAttributeComparatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#componentAttributeValue}.
	 * @param ctx the parse tree
	 */
	void enterComponentAttributeValue(ecssParser.ComponentAttributeValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#componentAttributeValue}.
	 * @param ctx the parse tree
	 */
	void exitComponentAttributeValue(ecssParser.ComponentAttributeValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#var}.
	 * @param ctx the parse tree
	 */
	void enterVar(ecssParser.VarContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#var}.
	 * @param ctx the parse tree
	 */
	void exitVar(ecssParser.VarContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#queryvar}.
	 * @param ctx the parse tree
	 */
	void enterQueryvar(ecssParser.QueryvarContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#queryvar}.
	 * @param ctx the parse tree
	 */
	void exitQueryvar(ecssParser.QueryvarContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#systemBody}.
	 * @param ctx the parse tree
	 */
	void enterSystemBody(ecssParser.SystemBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#systemBody}.
	 * @param ctx the parse tree
	 */
	void exitSystemBody(ecssParser.SystemBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#componentStatements}.
	 * @param ctx the parse tree
	 */
	void enterComponentStatements(ecssParser.ComponentStatementsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#componentStatements}.
	 * @param ctx the parse tree
	 */
	void exitComponentStatements(ecssParser.ComponentStatementsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#componentStatement}.
	 * @param ctx the parse tree
	 */
	void enterComponentStatement(ecssParser.ComponentStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#componentStatement}.
	 * @param ctx the parse tree
	 */
	void exitComponentStatement(ecssParser.ComponentStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#function}.
	 * @param ctx the parse tree
	 */
	void enterFunction(ecssParser.FunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#function}.
	 * @param ctx the parse tree
	 */
	void exitFunction(ecssParser.FunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#functionName}.
	 * @param ctx the parse tree
	 */
	void enterFunctionName(ecssParser.FunctionNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#functionName}.
	 * @param ctx the parse tree
	 */
	void exitFunctionName(ecssParser.FunctionNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#functionParameters}.
	 * @param ctx the parse tree
	 */
	void enterFunctionParameters(ecssParser.FunctionParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#functionParameters}.
	 * @param ctx the parse tree
	 */
	void exitFunctionParameters(ecssParser.FunctionParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#mathoperatoradditions}.
	 * @param ctx the parse tree
	 */
	void enterMathoperatoradditions(ecssParser.MathoperatoradditionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#mathoperatoradditions}.
	 * @param ctx the parse tree
	 */
	void exitMathoperatoradditions(ecssParser.MathoperatoradditionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#mathoperatorfactors}.
	 * @param ctx the parse tree
	 */
	void enterMathoperatorfactors(ecssParser.MathoperatorfactorsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#mathoperatorfactors}.
	 * @param ctx the parse tree
	 */
	void exitMathoperatorfactors(ecssParser.MathoperatorfactorsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(ecssParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(ecssParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(ecssParser.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(ecssParser.TermContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#factor}.
	 * @param ctx the parse tree
	 */
	void enterFactor(ecssParser.FactorContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#factor}.
	 * @param ctx the parse tree
	 */
	void exitFactor(ecssParser.FactorContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(ecssParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(ecssParser.LiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#stringLiteral}.
	 * @param ctx the parse tree
	 */
	void enterStringLiteral(ecssParser.StringLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#stringLiteral}.
	 * @param ctx the parse tree
	 */
	void exitStringLiteral(ecssParser.StringLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#rgb}.
	 * @param ctx the parse tree
	 */
	void enterRgb(ecssParser.RgbContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#rgb}.
	 * @param ctx the parse tree
	 */
	void exitRgb(ecssParser.RgbContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#rgba}.
	 * @param ctx the parse tree
	 */
	void enterRgba(ecssParser.RgbaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#rgba}.
	 * @param ctx the parse tree
	 */
	void exitRgba(ecssParser.RgbaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#boolval}.
	 * @param ctx the parse tree
	 */
	void enterBoolval(ecssParser.BoolvalContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#boolval}.
	 * @param ctx the parse tree
	 */
	void exitBoolval(ecssParser.BoolvalContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#eventHandler}.
	 * @param ctx the parse tree
	 */
	void enterEventHandler(ecssParser.EventHandlerContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#eventHandler}.
	 * @param ctx the parse tree
	 */
	void exitEventHandler(ecssParser.EventHandlerContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#eventHandlerHeader}.
	 * @param ctx the parse tree
	 */
	void enterEventHandlerHeader(ecssParser.EventHandlerHeaderContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#eventHandlerHeader}.
	 * @param ctx the parse tree
	 */
	void exitEventHandlerHeader(ecssParser.EventHandlerHeaderContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#eventHandlerBody}.
	 * @param ctx the parse tree
	 */
	void enterEventHandlerBody(ecssParser.EventHandlerBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#eventHandlerBody}.
	 * @param ctx the parse tree
	 */
	void exitEventHandlerBody(ecssParser.EventHandlerBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#arguments}.
	 * @param ctx the parse tree
	 */
	void enterArguments(ecssParser.ArgumentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#arguments}.
	 * @param ctx the parse tree
	 */
	void exitArguments(ecssParser.ArgumentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#argument}.
	 * @param ctx the parse tree
	 */
	void enterArgument(ecssParser.ArgumentContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#argument}.
	 * @param ctx the parse tree
	 */
	void exitArgument(ecssParser.ArgumentContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#atRuleHeader}.
	 * @param ctx the parse tree
	 */
	void enterAtRuleHeader(ecssParser.AtRuleHeaderContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#atRuleHeader}.
	 * @param ctx the parse tree
	 */
	void exitAtRuleHeader(ecssParser.AtRuleHeaderContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#atRule}.
	 * @param ctx the parse tree
	 */
	void enterAtRule(ecssParser.AtRuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#atRule}.
	 * @param ctx the parse tree
	 */
	void exitAtRule(ecssParser.AtRuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#variableAssignment}.
	 * @param ctx the parse tree
	 */
	void enterVariableAssignment(ecssParser.VariableAssignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#variableAssignment}.
	 * @param ctx the parse tree
	 */
	void exitVariableAssignment(ecssParser.VariableAssignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#variableAssignmentValue}.
	 * @param ctx the parse tree
	 */
	void enterVariableAssignmentValue(ecssParser.VariableAssignmentValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#variableAssignmentValue}.
	 * @param ctx the parse tree
	 */
	void exitVariableAssignmentValue(ecssParser.VariableAssignmentValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#define}.
	 * @param ctx the parse tree
	 */
	void enterDefine(ecssParser.DefineContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#define}.
	 * @param ctx the parse tree
	 */
	void exitDefine(ecssParser.DefineContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#defineHeader}.
	 * @param ctx the parse tree
	 */
	void enterDefineHeader(ecssParser.DefineHeaderContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#defineHeader}.
	 * @param ctx the parse tree
	 */
	void exitDefineHeader(ecssParser.DefineHeaderContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#query}.
	 * @param ctx the parse tree
	 */
	void enterQuery(ecssParser.QueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#query}.
	 * @param ctx the parse tree
	 */
	void exitQuery(ecssParser.QueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#queryHeader}.
	 * @param ctx the parse tree
	 */
	void enterQueryHeader(ecssParser.QueryHeaderContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#queryHeader}.
	 * @param ctx the parse tree
	 */
	void exitQueryHeader(ecssParser.QueryHeaderContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#componentPropertyId}.
	 * @param ctx the parse tree
	 */
	void enterComponentPropertyId(ecssParser.ComponentPropertyIdContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#componentPropertyId}.
	 * @param ctx the parse tree
	 */
	void exitComponentPropertyId(ecssParser.ComponentPropertyIdContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#type}.
	 * @param ctx the parse tree
	 */
	void enterType(ecssParser.TypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#type}.
	 * @param ctx the parse tree
	 */
	void exitType(ecssParser.TypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#defineDeclarations}.
	 * @param ctx the parse tree
	 */
	void enterDefineDeclarations(ecssParser.DefineDeclarationsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#defineDeclarations}.
	 * @param ctx the parse tree
	 */
	void exitDefineDeclarations(ecssParser.DefineDeclarationsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ecssParser#defineDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterDefineDeclaration(ecssParser.DefineDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ecssParser#defineDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitDefineDeclaration(ecssParser.DefineDeclarationContext ctx);
}