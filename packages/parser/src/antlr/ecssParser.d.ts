import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { ecssListener } from "./ecssListener";
import { ecssVisitor } from "./ecssVisitor";
export declare class ecssParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly T__4 = 5;
    static readonly T__5 = 6;
    static readonly T__6 = 7;
    static readonly T__7 = 8;
    static readonly T__8 = 9;
    static readonly T__9 = 10;
    static readonly T__10 = 11;
    static readonly T__11 = 12;
    static readonly T__12 = 13;
    static readonly NUMBER = 14;
    static readonly TRUE = 15;
    static readonly FALSE = 16;
    static readonly UNSET = 17;
    static readonly Identifier = 18;
    static readonly LPAREN = 19;
    static readonly RPAREN = 20;
    static readonly LBRACKET = 21;
    static readonly RBRACKET = 22;
    static readonly LCURLY = 23;
    static readonly RCURLY = 24;
    static readonly COLON = 25;
    static readonly SEMI = 26;
    static readonly DOT = 27;
    static readonly COMMA = 28;
    static readonly PLUS = 29;
    static readonly MINUS = 30;
    static readonly MULT = 31;
    static readonly DIV = 32;
    static readonly ASSIGN = 33;
    static readonly LESSTHAN = 34;
    static readonly GREATERTHAN = 35;
    static readonly LESSTHANOREQUAL = 36;
    static readonly GREATERTHANOREQUAL = 37;
    static readonly EXCLAMATION = 38;
    static readonly QUESTION = 39;
    static readonly DOLLAR = 40;
    static readonly AT = 41;
    static readonly QUOTE = 42;
    static readonly STRING_LITERAL = 43;
    static readonly ESC = 44;
    static readonly UNICODE = 45;
    static readonly HEX = 46;
    static readonly EventIdentifier = 47;
    static readonly AtRuleIdentifier = 48;
    static readonly COMMENT = 49;
    static readonly WS = 50;
    static readonly RULE_program = 0;
    static readonly RULE_keyframe = 1;
    static readonly RULE_system = 2;
    static readonly RULE_systemHeader = 3;
    static readonly RULE_componentSelector = 4;
    static readonly RULE_componentId = 5;
    static readonly RULE_queryExpression = 6;
    static readonly RULE_queryOperationParameters = 7;
    static readonly RULE_intersectionQuery = 8;
    static readonly RULE_setoperator = 9;
    static readonly RULE_setOperatorNot = 10;
    static readonly RULE_setOperatorAny = 11;
    static readonly RULE_componentAs = 12;
    static readonly RULE_componentAttributes = 13;
    static readonly RULE_componentAttribute = 14;
    static readonly RULE_componentAttributeComparator = 15;
    static readonly RULE_componentAttributeValue = 16;
    static readonly RULE_var = 17;
    static readonly RULE_queryvar = 18;
    static readonly RULE_systemBody = 19;
    static readonly RULE_statementPlaceHolder = 20;
    static readonly RULE_componentStatements = 21;
    static readonly RULE_componentStatement = 22;
    static readonly RULE_function = 23;
    static readonly RULE_functionName = 24;
    static readonly RULE_functionParameters = 25;
    static readonly RULE_mathoperatoradditions = 26;
    static readonly RULE_mathoperatorfactors = 27;
    static readonly RULE_expression = 28;
    static readonly RULE_term = 29;
    static readonly RULE_factor = 30;
    static readonly RULE_literal = 31;
    static readonly RULE_stringLiteral = 32;
    static readonly RULE_rgb = 33;
    static readonly RULE_rgba = 34;
    static readonly RULE_boolval = 35;
    static readonly RULE_eventHandler = 36;
    static readonly RULE_eventHandlerHeader = 37;
    static readonly RULE_eventHandlerBody = 38;
    static readonly RULE_arguments = 39;
    static readonly RULE_argument = 40;
    static readonly RULE_atRuleHeader = 41;
    static readonly RULE_atRule = 42;
    static readonly RULE_variableAssignment = 43;
    static readonly RULE_variableAssignmentValue = 44;
    static readonly RULE_define = 45;
    static readonly RULE_defineHeader = 46;
    static readonly RULE_query = 47;
    static readonly RULE_queryHeader = 48;
    static readonly RULE_componentPropertyId = 49;
    static readonly RULE_type = 50;
    static readonly RULE_defineDeclarations = 51;
    static readonly RULE_defineDeclaration = 52;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    program(): ProgramContext;
    keyframe(): KeyframeContext;
    system(): SystemContext;
    systemHeader(): SystemHeaderContext;
    componentSelector(): ComponentSelectorContext;
    componentId(): ComponentIdContext;
    queryExpression(): QueryExpressionContext;
    queryOperationParameters(): QueryOperationParametersContext;
    intersectionQuery(): IntersectionQueryContext;
    setoperator(): SetoperatorContext;
    setOperatorNot(): SetOperatorNotContext;
    setOperatorAny(): SetOperatorAnyContext;
    componentAs(): ComponentAsContext;
    componentAttributes(): ComponentAttributesContext;
    componentAttribute(): ComponentAttributeContext;
    componentAttributeComparator(): ComponentAttributeComparatorContext;
    componentAttributeValue(): ComponentAttributeValueContext;
    var(): VarContext;
    queryvar(): QueryvarContext;
    systemBody(): SystemBodyContext;
    statementPlaceHolder(): StatementPlaceHolderContext;
    componentStatements(): ComponentStatementsContext;
    componentStatement(): ComponentStatementContext;
    function(): FunctionContext;
    functionName(): FunctionNameContext;
    functionParameters(): FunctionParametersContext;
    mathoperatoradditions(): MathoperatoradditionsContext;
    mathoperatorfactors(): MathoperatorfactorsContext;
    expression(): ExpressionContext;
    term(): TermContext;
    factor(): FactorContext;
    literal(): LiteralContext;
    stringLiteral(): StringLiteralContext;
    rgb(): RgbContext;
    rgba(): RgbaContext;
    boolval(): BoolvalContext;
    eventHandler(): EventHandlerContext;
    eventHandlerHeader(): EventHandlerHeaderContext;
    eventHandlerBody(): EventHandlerBodyContext;
    arguments(): ArgumentsContext;
    argument(): ArgumentContext;
    atRuleHeader(): AtRuleHeaderContext;
    atRule(): AtRuleContext;
    variableAssignment(): VariableAssignmentContext;
    variableAssignmentValue(): VariableAssignmentValueContext;
    define(): DefineContext;
    defineHeader(): DefineHeaderContext;
    query(): QueryContext;
    queryHeader(): QueryHeaderContext;
    componentPropertyId(): ComponentPropertyIdContext;
    type(): TypeContext;
    defineDeclarations(): DefineDeclarationsContext;
    defineDeclaration(): DefineDeclarationContext;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class ProgramContext extends ParserRuleContext {
    keyframe(): KeyframeContext[];
    keyframe(i: number): KeyframeContext;
    system(): SystemContext[];
    system(i: number): SystemContext;
    define(): DefineContext[];
    define(i: number): DefineContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class KeyframeContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    LCURLY(): TerminalNode[];
    LCURLY(i: number): TerminalNode;
    componentStatements(): ComponentStatementsContext[];
    componentStatements(i: number): ComponentStatementsContext;
    RCURLY(): TerminalNode[];
    RCURLY(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class SystemContext extends ParserRuleContext {
    systemHeader(): SystemHeaderContext;
    systemBody(): SystemBodyContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class SystemHeaderContext extends ParserRuleContext {
    queryExpression(): QueryExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class ComponentSelectorContext extends ParserRuleContext {
    LBRACKET(): TerminalNode;
    RBRACKET(): TerminalNode;
    componentId(): ComponentIdContext | undefined;
    componentAs(): ComponentAsContext | undefined;
    componentAttribute(): ComponentAttributeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class ComponentIdContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class QueryExpressionContext extends ParserRuleContext {
    intersectionQuery(): IntersectionQueryContext | undefined;
    setoperator(): SetoperatorContext[];
    setoperator(i: number): SetoperatorContext;
    LPAREN(): TerminalNode[];
    LPAREN(i: number): TerminalNode;
    queryOperationParameters(): QueryOperationParametersContext[];
    queryOperationParameters(i: number): QueryOperationParametersContext;
    RPAREN(): TerminalNode[];
    RPAREN(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class QueryOperationParametersContext extends ParserRuleContext {
    intersectionQuery(): IntersectionQueryContext[];
    intersectionQuery(i: number): IntersectionQueryContext;
    queryExpression(): QueryExpressionContext[];
    queryExpression(i: number): QueryExpressionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class IntersectionQueryContext extends ParserRuleContext {
    componentSelector(): ComponentSelectorContext[];
    componentSelector(i: number): ComponentSelectorContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class SetoperatorContext extends ParserRuleContext {
    setOperatorNot(): SetOperatorNotContext | undefined;
    setOperatorAny(): SetOperatorAnyContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class SetOperatorNotContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class SetOperatorAnyContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class ComponentAsContext extends ParserRuleContext {
    componentId(): ComponentIdContext[];
    componentId(i: number): ComponentIdContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class ComponentAttributesContext extends ParserRuleContext {
    componentAttribute(): ComponentAttributeContext[];
    componentAttribute(i: number): ComponentAttributeContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class ComponentAttributeContext extends ParserRuleContext {
    componentId(): ComponentIdContext;
    componentAttributeComparator(): ComponentAttributeComparatorContext;
    componentAttributeValue(): ComponentAttributeValueContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class ComponentAttributeComparatorContext extends ParserRuleContext {
    ASSIGN(): TerminalNode | undefined;
    LESSTHAN(): TerminalNode | undefined;
    GREATERTHAN(): TerminalNode | undefined;
    LESSTHANOREQUAL(): TerminalNode | undefined;
    GREATERTHANOREQUAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class ComponentAttributeValueContext extends ParserRuleContext {
    NUMBER(): TerminalNode | undefined;
    Identifier(): TerminalNode | undefined;
    queryvar(): QueryvarContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class VarContext extends ParserRuleContext {
    DOLLAR(): TerminalNode;
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class QueryvarContext extends ParserRuleContext {
    QUESTION(): TerminalNode;
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class SystemBodyContext extends ParserRuleContext {
    LCURLY(): TerminalNode;
    RCURLY(): TerminalNode;
    componentStatements(): ComponentStatementsContext[];
    componentStatements(i: number): ComponentStatementsContext;
    atRule(): AtRuleContext[];
    atRule(i: number): AtRuleContext;
    eventHandler(): EventHandlerContext[];
    eventHandler(i: number): EventHandlerContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class StatementPlaceHolderContext extends ParserRuleContext {
    COLON(): TerminalNode;
    Identifier(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class ComponentStatementsContext extends ParserRuleContext {
    componentStatement(): ComponentStatementContext[];
    componentStatement(i: number): ComponentStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class ComponentStatementContext extends ParserRuleContext {
    componentId(): ComponentIdContext;
    SEMI(): TerminalNode;
    statementPlaceHolder(): StatementPlaceHolderContext | undefined;
    COLON(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    function(): FunctionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class FunctionContext extends ParserRuleContext {
    functionName(): FunctionNameContext;
    LPAREN(): TerminalNode;
    functionParameters(): FunctionParametersContext;
    RPAREN(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class FunctionNameContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class FunctionParametersContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    function(): FunctionContext[];
    function(i: number): FunctionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    queryvar(): QueryvarContext[];
    queryvar(i: number): QueryvarContext;
    literal(): LiteralContext[];
    literal(i: number): LiteralContext;
    stringLiteral(): StringLiteralContext[];
    stringLiteral(i: number): StringLiteralContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class MathoperatoradditionsContext extends ParserRuleContext {
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class MathoperatorfactorsContext extends ParserRuleContext {
    MULT(): TerminalNode | undefined;
    DIV(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class ExpressionContext extends ParserRuleContext {
    term(): TermContext[];
    term(i: number): TermContext;
    mathoperatoradditions(): MathoperatoradditionsContext[];
    mathoperatoradditions(i: number): MathoperatoradditionsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class TermContext extends ParserRuleContext {
    factor(): FactorContext[];
    factor(i: number): FactorContext;
    mathoperatorfactors(): MathoperatorfactorsContext[];
    mathoperatorfactors(i: number): MathoperatorfactorsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class FactorContext extends ParserRuleContext {
    function(): FunctionContext | undefined;
    var(): VarContext | undefined;
    queryvar(): QueryvarContext | undefined;
    UNSET(): TerminalNode | undefined;
    literal(): LiteralContext | undefined;
    rgb(): RgbContext | undefined;
    rgba(): RgbaContext | undefined;
    LPAREN(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    RPAREN(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class LiteralContext extends ParserRuleContext {
    NUMBER(): TerminalNode | undefined;
    boolval(): BoolvalContext | undefined;
    stringLiteral(): StringLiteralContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class StringLiteralContext extends ParserRuleContext {
    STRING_LITERAL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class RgbContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    RPAREN(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class RgbaContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    RPAREN(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class BoolvalContext extends ParserRuleContext {
    TRUE(): TerminalNode | undefined;
    FALSE(): TerminalNode | undefined;
    EXCLAMATION(): TerminalNode | undefined;
    boolval(): BoolvalContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class EventHandlerContext extends ParserRuleContext {
    eventHandlerHeader(): EventHandlerHeaderContext;
    LCURLY(): TerminalNode;
    eventHandlerBody(): EventHandlerBodyContext;
    RCURLY(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class EventHandlerHeaderContext extends ParserRuleContext {
    EventIdentifier(): TerminalNode;
    arguments(): ArgumentsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class EventHandlerBodyContext extends ParserRuleContext {
    componentStatements(): ComponentStatementsContext[];
    componentStatements(i: number): ComponentStatementsContext;
    atRule(): AtRuleContext[];
    atRule(i: number): AtRuleContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class ArgumentsContext extends ParserRuleContext {
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    argument(): ArgumentContext[];
    argument(i: number): ArgumentContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class ArgumentContext extends ParserRuleContext {
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class AtRuleHeaderContext extends ParserRuleContext {
    AtRuleIdentifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class AtRuleContext extends ParserRuleContext {
    query(): QueryContext | undefined;
    atRuleHeader(): AtRuleHeaderContext | undefined;
    LCURLY(): TerminalNode | undefined;
    RCURLY(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class VariableAssignmentContext extends ParserRuleContext {
    Identifier(): TerminalNode[];
    Identifier(i: number): TerminalNode;
    ASSIGN(): TerminalNode;
    variableAssignmentValue(): VariableAssignmentValueContext;
    DOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class VariableAssignmentValueContext extends ParserRuleContext {
    NUMBER(): TerminalNode | undefined;
    Identifier(): TerminalNode | undefined;
    variableAssignment(): VariableAssignmentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class DefineContext extends ParserRuleContext {
    defineHeader(): DefineHeaderContext;
    SEMI(): TerminalNode | undefined;
    LCURLY(): TerminalNode | undefined;
    defineDeclarations(): DefineDeclarationsContext | undefined;
    RCURLY(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class DefineHeaderContext extends ParserRuleContext {
    LBRACKET(): TerminalNode;
    componentId(): ComponentIdContext;
    RBRACKET(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class QueryContext extends ParserRuleContext {
    queryHeader(): QueryHeaderContext;
    SEMI(): TerminalNode | undefined;
    LCURLY(): TerminalNode | undefined;
    RCURLY(): TerminalNode | undefined;
    componentStatements(): ComponentStatementsContext[];
    componentStatements(i: number): ComponentStatementsContext;
    atRule(): AtRuleContext[];
    atRule(i: number): AtRuleContext;
    eventHandler(): EventHandlerContext[];
    eventHandler(i: number): EventHandlerContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class QueryHeaderContext extends ParserRuleContext {
    queryExpression(): QueryExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class ComponentPropertyIdContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class TypeContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class DefineDeclarationsContext extends ParserRuleContext {
    defineDeclaration(): DefineDeclarationContext[];
    defineDeclaration(i: number): DefineDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
export declare class DefineDeclarationContext extends ParserRuleContext {
    componentPropertyId(): ComponentPropertyIdContext;
    COLON(): TerminalNode;
    type(): TypeContext;
    SEMI(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: ecssListener): void;
    exitRule(listener: ecssListener): void;
    accept<Result>(visitor: ecssVisitor<Result>): Result;
}
