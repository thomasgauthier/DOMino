// Generated from antlr/ecss.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ecssListener } from "./ecssListener";
import { ecssVisitor } from "./ecssVisitor";


export class ecssParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly NUMBER = 18;
	public static readonly TRUE = 19;
	public static readonly FALSE = 20;
	public static readonly UNSET = 21;
	public static readonly LPAREN = 22;
	public static readonly RPAREN = 23;
	public static readonly LBRACKET = 24;
	public static readonly RBRACKET = 25;
	public static readonly LCURLY = 26;
	public static readonly RCURLY = 27;
	public static readonly COLON = 28;
	public static readonly SEMI = 29;
	public static readonly DOT = 30;
	public static readonly COMMA = 31;
	public static readonly PLUS = 32;
	public static readonly MINUS = 33;
	public static readonly MULT = 34;
	public static readonly DIV = 35;
	public static readonly ASSIGN = 36;
	public static readonly LESSTHAN = 37;
	public static readonly GREATERTHAN = 38;
	public static readonly LESSTHANOREQUAL = 39;
	public static readonly GREATERTHANOREQUAL = 40;
	public static readonly EXCLAMATION = 41;
	public static readonly QUESTION = 42;
	public static readonly DOLLAR = 43;
	public static readonly AT = 44;
	public static readonly QUOTE = 45;
	public static readonly STRING_LITERAL = 46;
	public static readonly ESC = 47;
	public static readonly UNICODE = 48;
	public static readonly HEX = 49;
	public static readonly EventIdentifier = 50;
	public static readonly AtRuleIdentifier = 51;
	public static readonly Identifier = 52;
	public static readonly COMMENT = 53;
	public static readonly WS = 54;
	public static readonly RULE_program = 0;
	public static readonly RULE_system = 1;
	public static readonly RULE_systemHeader = 2;
	public static readonly RULE_componentSelector = 3;
	public static readonly RULE_componentId = 4;
	public static readonly RULE_queryExpression = 5;
	public static readonly RULE_queryOperationParameters = 6;
	public static readonly RULE_intersectionQuery = 7;
	public static readonly RULE_setoperator = 8;
	public static readonly RULE_setOperatorNot = 9;
	public static readonly RULE_setOperatorAny = 10;
	public static readonly RULE_componentAs = 11;
	public static readonly RULE_componentAttributes = 12;
	public static readonly RULE_componentAttribute = 13;
	public static readonly RULE_componentAttributeComparator = 14;
	public static readonly RULE_componentAttributeValue = 15;
	public static readonly RULE_var = 16;
	public static readonly RULE_queryvar = 17;
	public static readonly RULE_systemBody = 18;
	public static readonly RULE_componentStatements = 19;
	public static readonly RULE_componentStatement = 20;
	public static readonly RULE_function = 21;
	public static readonly RULE_functionName = 22;
	public static readonly RULE_functionParameters = 23;
	public static readonly RULE_mathoperatoradditions = 24;
	public static readonly RULE_mathoperatorfactors = 25;
	public static readonly RULE_expression = 26;
	public static readonly RULE_term = 27;
	public static readonly RULE_factor = 28;
	public static readonly RULE_literal = 29;
	public static readonly RULE_stringLiteral = 30;
	public static readonly RULE_rgb = 31;
	public static readonly RULE_rgba = 32;
	public static readonly RULE_boolval = 33;
	public static readonly RULE_eventHandler = 34;
	public static readonly RULE_eventHandlerHeader = 35;
	public static readonly RULE_eventHandlerBody = 36;
	public static readonly RULE_arguments = 37;
	public static readonly RULE_argument = 38;
	public static readonly RULE_atRuleHeader = 39;
	public static readonly RULE_atRule = 40;
	public static readonly RULE_variableAssignment = 41;
	public static readonly RULE_variableAssignmentValue = 42;
	public static readonly RULE_define = 43;
	public static readonly RULE_defineHeader = 44;
	public static readonly RULE_query = 45;
	public static readonly RULE_queryHeader = 46;
	public static readonly RULE_componentPropertyId = 47;
	public static readonly RULE_type = 48;
	public static readonly RULE_defineDeclarations = 49;
	public static readonly RULE_defineDeclaration = 50;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "system", "systemHeader", "componentSelector", "componentId", 
		"queryExpression", "queryOperationParameters", "intersectionQuery", "setoperator", 
		"setOperatorNot", "setOperatorAny", "componentAs", "componentAttributes", 
		"componentAttribute", "componentAttributeComparator", "componentAttributeValue", 
		"var", "queryvar", "systemBody", "componentStatements", "componentStatement", 
		"function", "functionName", "functionParameters", "mathoperatoradditions", 
		"mathoperatorfactors", "expression", "term", "factor", "literal", "stringLiteral", 
		"rgb", "rgba", "boolval", "eventHandler", "eventHandlerHeader", "eventHandlerBody", 
		"arguments", "argument", "atRuleHeader", "atRule", "variableAssignment", 
		"variableAssignmentValue", "define", "defineHeader", "query", "queryHeader", 
		"componentPropertyId", "type", "defineDeclarations", "defineDeclaration",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':not'", "':any'", "'as'", "'max'", "'min'", "'sin'", "'cos'", 
		"'map'", "'abs'", "'sign'", "'%'", "'rgb('", "'rgba('", "'@define'", "'@query'", 
		"'boolean'", "'number'", undefined, "'true'", "'false'", "'unset'", "'('", 
		"')'", "'['", "']'", "'{'", "'}'", "':'", "';'", "'.'", "','", "'+'", 
		"'-'", "'*'", "'/'", "'='", "'<'", "'>'", "'<='", "'>='", "'!'", "'?'", 
		"'$'", "'@'", "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "NUMBER", "TRUE", "FALSE", 
		"UNSET", "LPAREN", "RPAREN", "LBRACKET", "RBRACKET", "LCURLY", "RCURLY", 
		"COLON", "SEMI", "DOT", "COMMA", "PLUS", "MINUS", "MULT", "DIV", "ASSIGN", 
		"LESSTHAN", "GREATERTHAN", "LESSTHANOREQUAL", "GREATERTHANOREQUAL", "EXCLAMATION", 
		"QUESTION", "DOLLAR", "AT", "QUOTE", "STRING_LITERAL", "ESC", "UNICODE", 
		"HEX", "EventIdentifier", "AtRuleIdentifier", "Identifier", "COMMENT", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ecssParser._LITERAL_NAMES, ecssParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ecssParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ecss.g4"; }

	// @Override
	public get ruleNames(): string[] { return ecssParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ecssParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ecssParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ecssParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ecssParser.T__13) {
				{
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 102;
					this.define();
					}
					}
					this.state = 105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ecssParser.T__13);
				}
			}

			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 109;
				this.system();
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ecssParser.T__0) | (1 << ecssParser.T__1) | (1 << ecssParser.RPAREN) | (1 << ecssParser.LBRACKET) | (1 << ecssParser.LCURLY) | (1 << ecssParser.SEMI) | (1 << ecssParser.COMMA))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public system(): SystemContext {
		let _localctx: SystemContext = new SystemContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ecssParser.RULE_system);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.systemHeader();
			this.state = 115;
			this.systemBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public systemHeader(): SystemHeaderContext {
		let _localctx: SystemHeaderContext = new SystemHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ecssParser.RULE_systemHeader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.queryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentSelector(): ComponentSelectorContext {
		let _localctx: ComponentSelectorContext = new ComponentSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ecssParser.RULE_componentSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.match(ecssParser.LBRACKET);
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 120;
				this.componentId();
				}
				break;

			case 2:
				{
				this.state = 121;
				this.componentAs();
				}
				break;

			case 3:
				{
				this.state = 122;
				this.componentAttribute();
				}
				break;
			}
			this.state = 125;
			this.match(ecssParser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentId(): ComponentIdContext {
		let _localctx: ComponentIdContext = new ComponentIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ecssParser.RULE_componentId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(ecssParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryExpression(): QueryExpressionContext {
		let _localctx: QueryExpressionContext = new QueryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ecssParser.RULE_queryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ecssParser.LBRACKET) {
				{
				this.state = 129;
				this.intersectionQuery();
				}
			}

			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ecssParser.T__0 || _la === ecssParser.T__1) {
				{
				{
				this.state = 132;
				this.setoperator();
				this.state = 133;
				this.match(ecssParser.LPAREN);
				this.state = 134;
				this.queryOperationParameters();
				this.state = 135;
				this.match(ecssParser.RPAREN);
				}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryOperationParameters(): QueryOperationParametersContext {
		let _localctx: QueryOperationParametersContext = new QueryOperationParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ecssParser.RULE_queryOperationParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 142;
				this.intersectionQuery();
				}
				break;

			case 2:
				{
				this.state = 143;
				this.queryExpression();
				}
				break;
			}
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ecssParser.COMMA) {
				{
				{
				this.state = 146;
				this.match(ecssParser.COMMA);
				this.state = 149;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 147;
					this.intersectionQuery();
					}
					break;

				case 2:
					{
					this.state = 148;
					this.queryExpression();
					}
					break;
				}
				}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intersectionQuery(): IntersectionQueryContext {
		let _localctx: IntersectionQueryContext = new IntersectionQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ecssParser.RULE_intersectionQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 156;
				this.componentSelector();
				}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ecssParser.LBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setoperator(): SetoperatorContext {
		let _localctx: SetoperatorContext = new SetoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ecssParser.RULE_setoperator);
		try {
			this.state = 163;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ecssParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 161;
				this.setOperatorNot();
				}
				break;
			case ecssParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 162;
				this.setOperatorAny();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setOperatorNot(): SetOperatorNotContext {
		let _localctx: SetOperatorNotContext = new SetOperatorNotContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ecssParser.RULE_setOperatorNot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(ecssParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setOperatorAny(): SetOperatorAnyContext {
		let _localctx: SetOperatorAnyContext = new SetOperatorAnyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ecssParser.RULE_setOperatorAny);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(ecssParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentAs(): ComponentAsContext {
		let _localctx: ComponentAsContext = new ComponentAsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ecssParser.RULE_componentAs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 169;
			this.componentId();
			this.state = 170;
			this.match(ecssParser.T__2);
			this.state = 171;
			this.componentId();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentAttributes(): ComponentAttributesContext {
		let _localctx: ComponentAttributesContext = new ComponentAttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ecssParser.RULE_componentAttributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.componentAttribute();
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ecssParser.COMMA) {
				{
				{
				this.state = 174;
				this.match(ecssParser.COMMA);
				this.state = 175;
				this.componentAttribute();
				}
				}
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentAttribute(): ComponentAttributeContext {
		let _localctx: ComponentAttributeContext = new ComponentAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ecssParser.RULE_componentAttribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.componentId();
			this.state = 182;
			this.componentAttributeComparator();
			this.state = 183;
			this.componentAttributeValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentAttributeComparator(): ComponentAttributeComparatorContext {
		let _localctx: ComponentAttributeComparatorContext = new ComponentAttributeComparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ecssParser.RULE_componentAttributeComparator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ecssParser.ASSIGN - 36)) | (1 << (ecssParser.LESSTHAN - 36)) | (1 << (ecssParser.GREATERTHAN - 36)) | (1 << (ecssParser.LESSTHANOREQUAL - 36)) | (1 << (ecssParser.GREATERTHANOREQUAL - 36)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentAttributeValue(): ComponentAttributeValueContext {
		let _localctx: ComponentAttributeValueContext = new ComponentAttributeValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ecssParser.RULE_componentAttributeValue);
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ecssParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 187;
				this.match(ecssParser.NUMBER);
				}
				break;
			case ecssParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 188;
				this.match(ecssParser.Identifier);
				}
				break;
			case ecssParser.QUESTION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 189;
				this.queryvar();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var(): VarContext {
		let _localctx: VarContext = new VarContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ecssParser.RULE_var);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(ecssParser.DOLLAR);
			this.state = 193;
			this.match(ecssParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryvar(): QueryvarContext {
		let _localctx: QueryvarContext = new QueryvarContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ecssParser.RULE_queryvar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.match(ecssParser.QUESTION);
			this.state = 196;
			this.match(ecssParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public systemBody(): SystemBodyContext {
		let _localctx: SystemBodyContext = new SystemBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ecssParser.RULE_systemBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(ecssParser.LCURLY);
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ecssParser.T__14 || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (ecssParser.EventIdentifier - 50)) | (1 << (ecssParser.AtRuleIdentifier - 50)) | (1 << (ecssParser.Identifier - 50)))) !== 0)) {
				{
				this.state = 202;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ecssParser.Identifier:
					{
					this.state = 199;
					this.componentStatements();
					}
					break;
				case ecssParser.T__14:
				case ecssParser.AtRuleIdentifier:
					{
					this.state = 200;
					this.atRule();
					}
					break;
				case ecssParser.EventIdentifier:
					{
					this.state = 201;
					this.eventHandler();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 207;
			this.match(ecssParser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentStatements(): ComponentStatementsContext {
		let _localctx: ComponentStatementsContext = new ComponentStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ecssParser.RULE_componentStatements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 209;
					this.componentStatement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 212;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentStatement(): ComponentStatementContext {
		let _localctx: ComponentStatementContext = new ComponentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ecssParser.RULE_componentStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.componentId();
			this.state = 215;
			this.match(ecssParser.COLON);
			this.state = 218;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 216;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 217;
				this.function();
				}
				break;
			}
			this.state = 220;
			this.match(ecssParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ecssParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.functionName();
			this.state = 223;
			this.match(ecssParser.LPAREN);
			this.state = 224;
			this.functionParameters();
			this.state = 225;
			this.match(ecssParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ecssParser.RULE_functionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ecssParser.T__3) | (1 << ecssParser.T__4) | (1 << ecssParser.T__5) | (1 << ecssParser.T__6) | (1 << ecssParser.T__7) | (1 << ecssParser.T__8) | (1 << ecssParser.T__9))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionParameters(): FunctionParametersContext {
		let _localctx: FunctionParametersContext = new FunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ecssParser.RULE_functionParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 229;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 230;
				this.function();
				}
				break;

			case 3:
				{
				this.state = 234;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 231;
					this.queryvar();
					}
					break;

				case 2:
					{
					this.state = 232;
					this.literal();
					}
					break;

				case 3:
					{
					this.state = 233;
					this.stringLiteral();
					}
					break;
				}
				}
				break;
			}
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ecssParser.COMMA) {
				{
				{
				this.state = 238;
				this.match(ecssParser.COMMA);
				this.state = 246;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 239;
					this.expression();
					}
					break;

				case 2:
					{
					this.state = 240;
					this.function();
					}
					break;

				case 3:
					{
					this.state = 244;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
					case 1:
						{
						this.state = 241;
						this.queryvar();
						}
						break;

					case 2:
						{
						this.state = 242;
						this.literal();
						}
						break;

					case 3:
						{
						this.state = 243;
						this.stringLiteral();
						}
						break;
					}
					}
					break;
				}
				}
				}
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathoperatoradditions(): MathoperatoradditionsContext {
		let _localctx: MathoperatoradditionsContext = new MathoperatoradditionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ecssParser.RULE_mathoperatoradditions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			_la = this._input.LA(1);
			if (!(_la === ecssParser.PLUS || _la === ecssParser.MINUS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathoperatorfactors(): MathoperatorfactorsContext {
		let _localctx: MathoperatorfactorsContext = new MathoperatorfactorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ecssParser.RULE_mathoperatorfactors);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			_la = this._input.LA(1);
			if (!(((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (ecssParser.T__10 - 11)) | (1 << (ecssParser.MULT - 11)) | (1 << (ecssParser.DIV - 11)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ecssParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.term();
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ecssParser.PLUS || _la === ecssParser.MINUS) {
				{
				{
				this.state = 258;
				this.mathoperatoradditions();
				this.state = 259;
				this.term();
				}
				}
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ecssParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.factor();
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (ecssParser.T__10 - 11)) | (1 << (ecssParser.MULT - 11)) | (1 << (ecssParser.DIV - 11)))) !== 0)) {
				{
				{
				this.state = 267;
				this.mathoperatorfactors();
				this.state = 268;
				this.factor();
				}
				}
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ecssParser.RULE_factor);
		try {
			this.state = 286;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ecssParser.T__3:
			case ecssParser.T__4:
			case ecssParser.T__5:
			case ecssParser.T__6:
			case ecssParser.T__7:
			case ecssParser.T__8:
			case ecssParser.T__9:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 275;
				this.function();
				}
				break;
			case ecssParser.DOLLAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 276;
				this.var();
				}
				break;
			case ecssParser.QUESTION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 277;
				this.queryvar();
				}
				break;
			case ecssParser.UNSET:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 278;
				this.match(ecssParser.UNSET);
				}
				break;
			case ecssParser.NUMBER:
			case ecssParser.TRUE:
			case ecssParser.FALSE:
			case ecssParser.EXCLAMATION:
			case ecssParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 279;
				this.literal();
				}
				break;
			case ecssParser.T__11:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 280;
				this.rgb();
				}
				break;
			case ecssParser.T__12:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 281;
				this.rgba();
				}
				break;
			case ecssParser.LPAREN:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 282;
				this.match(ecssParser.LPAREN);
				this.state = 283;
				this.expression();
				this.state = 284;
				this.match(ecssParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ecssParser.RULE_literal);
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ecssParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 288;
				this.match(ecssParser.NUMBER);
				}
				break;
			case ecssParser.TRUE:
			case ecssParser.FALSE:
			case ecssParser.EXCLAMATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 289;
				this.boolval();
				}
				break;
			case ecssParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 290;
				this.stringLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ecssParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(ecssParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rgb(): RgbContext {
		let _localctx: RgbContext = new RgbContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ecssParser.RULE_rgb);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(ecssParser.T__11);
			this.state = 296;
			this.expression();
			this.state = 297;
			this.match(ecssParser.COMMA);
			this.state = 298;
			this.expression();
			this.state = 299;
			this.match(ecssParser.COMMA);
			this.state = 300;
			this.expression();
			this.state = 301;
			this.match(ecssParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rgba(): RgbaContext {
		let _localctx: RgbaContext = new RgbaContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ecssParser.RULE_rgba);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.match(ecssParser.T__12);
			this.state = 304;
			this.expression();
			this.state = 305;
			this.match(ecssParser.COMMA);
			this.state = 306;
			this.expression();
			this.state = 307;
			this.match(ecssParser.COMMA);
			this.state = 308;
			this.expression();
			this.state = 309;
			this.match(ecssParser.COMMA);
			this.state = 310;
			this.expression();
			this.state = 311;
			this.match(ecssParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolval(): BoolvalContext {
		let _localctx: BoolvalContext = new BoolvalContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ecssParser.RULE_boolval);
		try {
			this.state = 317;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ecssParser.TRUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 313;
				this.match(ecssParser.TRUE);
				}
				break;
			case ecssParser.FALSE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 314;
				this.match(ecssParser.FALSE);
				}
				break;
			case ecssParser.EXCLAMATION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 315;
				this.match(ecssParser.EXCLAMATION);
				this.state = 316;
				this.boolval();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventHandler(): EventHandlerContext {
		let _localctx: EventHandlerContext = new EventHandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ecssParser.RULE_eventHandler);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.eventHandlerHeader();
			this.state = 320;
			this.match(ecssParser.LCURLY);
			this.state = 321;
			this.eventHandlerBody();
			this.state = 322;
			this.match(ecssParser.RCURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventHandlerHeader(): EventHandlerHeaderContext {
		let _localctx: EventHandlerHeaderContext = new EventHandlerHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ecssParser.RULE_eventHandlerHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.match(ecssParser.EventIdentifier);
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ecssParser.LPAREN) {
				{
				this.state = 325;
				this.arguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventHandlerBody(): EventHandlerBodyContext {
		let _localctx: EventHandlerBodyContext = new EventHandlerBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ecssParser.RULE_eventHandlerBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ecssParser.T__14 || _la === ecssParser.AtRuleIdentifier || _la === ecssParser.Identifier) {
				{
				this.state = 330;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ecssParser.Identifier:
					{
					this.state = 328;
					this.componentStatements();
					}
					break;
				case ecssParser.T__14:
				case ecssParser.AtRuleIdentifier:
					{
					this.state = 329;
					this.atRule();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ecssParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(ecssParser.LPAREN);
			{
			this.state = 336;
			this.argument();
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ecssParser.COMMA) {
				{
				{
				this.state = 337;
				this.match(ecssParser.COMMA);
				this.state = 338;
				this.argument();
				}
				}
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 344;
			this.match(ecssParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ecssParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atRuleHeader(): AtRuleHeaderContext {
		let _localctx: AtRuleHeaderContext = new AtRuleHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ecssParser.RULE_atRuleHeader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(ecssParser.AtRuleIdentifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atRule(): AtRuleContext {
		let _localctx: AtRuleContext = new AtRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ecssParser.RULE_atRule);
		try {
			this.state = 355;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ecssParser.T__14:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 350;
				this.query();
				}
				break;
			case ecssParser.AtRuleIdentifier:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 351;
				this.atRuleHeader();
				this.state = 352;
				this.match(ecssParser.LCURLY);
				this.state = 353;
				this.match(ecssParser.RCURLY);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableAssignment(): VariableAssignmentContext {
		let _localctx: VariableAssignmentContext = new VariableAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ecssParser.RULE_variableAssignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.match(ecssParser.Identifier);
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ecssParser.DOT) {
				{
				this.state = 358;
				this.match(ecssParser.DOT);
				this.state = 359;
				this.match(ecssParser.Identifier);
				}
			}

			this.state = 362;
			this.match(ecssParser.ASSIGN);
			this.state = 363;
			this.variableAssignmentValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableAssignmentValue(): VariableAssignmentValueContext {
		let _localctx: VariableAssignmentValueContext = new VariableAssignmentValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ecssParser.RULE_variableAssignmentValue);
		try {
			this.state = 368;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 365;
				this.match(ecssParser.NUMBER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 366;
				this.match(ecssParser.Identifier);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 367;
				this.variableAssignment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public define(): DefineContext {
		let _localctx: DefineContext = new DefineContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ecssParser.RULE_define);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.defineHeader();
			this.state = 376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ecssParser.LCURLY:
				{
				{
				this.state = 371;
				this.match(ecssParser.LCURLY);
				this.state = 372;
				this.defineDeclarations();
				this.state = 373;
				this.match(ecssParser.RCURLY);
				}
				}
				break;
			case ecssParser.SEMI:
				{
				this.state = 375;
				this.match(ecssParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defineHeader(): DefineHeaderContext {
		let _localctx: DefineHeaderContext = new DefineHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ecssParser.RULE_defineHeader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.match(ecssParser.T__13);
			this.state = 379;
			this.match(ecssParser.LBRACKET);
			this.state = 380;
			this.componentId();
			this.state = 381;
			this.match(ecssParser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ecssParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.queryHeader();
			this.state = 395;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ecssParser.LCURLY:
				{
				{
				this.state = 384;
				this.match(ecssParser.LCURLY);
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ecssParser.T__14 || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (ecssParser.EventIdentifier - 50)) | (1 << (ecssParser.AtRuleIdentifier - 50)) | (1 << (ecssParser.Identifier - 50)))) !== 0)) {
					{
					this.state = 388;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ecssParser.Identifier:
						{
						this.state = 385;
						this.componentStatements();
						}
						break;
					case ecssParser.T__14:
					case ecssParser.AtRuleIdentifier:
						{
						this.state = 386;
						this.atRule();
						}
						break;
					case ecssParser.EventIdentifier:
						{
						this.state = 387;
						this.eventHandler();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 392;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 393;
				this.match(ecssParser.RCURLY);
				}
				}
				break;
			case ecssParser.SEMI:
				{
				this.state = 394;
				this.match(ecssParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryHeader(): QueryHeaderContext {
		let _localctx: QueryHeaderContext = new QueryHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ecssParser.RULE_queryHeader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(ecssParser.T__14);
			this.state = 398;
			this.queryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentPropertyId(): ComponentPropertyIdContext {
		let _localctx: ComponentPropertyIdContext = new ComponentPropertyIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ecssParser.RULE_componentPropertyId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 400;
			this.match(ecssParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ecssParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			_la = this._input.LA(1);
			if (!(_la === ecssParser.T__15 || _la === ecssParser.T__16)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defineDeclarations(): DefineDeclarationsContext {
		let _localctx: DefineDeclarationsContext = new DefineDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ecssParser.RULE_defineDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 404;
				this.defineDeclaration();
				}
				}
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ecssParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defineDeclaration(): DefineDeclarationContext {
		let _localctx: DefineDeclarationContext = new DefineDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ecssParser.RULE_defineDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.componentPropertyId();
			this.state = 410;
			this.match(ecssParser.COLON);
			this.state = 411;
			this.type();
			this.state = 412;
			this.match(ecssParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x038\u01A1\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x03\x02\x06\x02j\n\x02\r\x02\x0E\x02k\x05\x02n\n\x02\x03\x02\x06\x02" +
		"q\n\x02\r\x02\x0E\x02r\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05~\n\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x07\x05\x07\x85\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07" +
		"\x07\x8C\n\x07\f\x07\x0E\x07\x8F\v\x07\x03\b\x03\b\x05\b\x93\n\b\x03\b" +
		"\x03\b\x03\b\x05\b\x98\n\b\x07\b\x9A\n\b\f\b\x0E\b\x9D\v\b\x03\t\x06\t" +
		"\xA0\n\t\r\t\x0E\t\xA1\x03\n\x03\n\x05\n\xA6\n\n\x03\v\x03\v\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xB3\n\x0E\f" +
		"\x0E\x0E\x0E\xB6\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x05\x11\xC1\n\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\xCD\n\x14" +
		"\f\x14\x0E\x14\xD0\v\x14\x03\x14\x03\x14\x03\x15\x06\x15\xD5\n\x15\r\x15" +
		"\x0E\x15\xD6\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\xDD\n\x16\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\xED\n\x19\x05\x19\xEF\n\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\xF7\n\x19\x05\x19" +
		"\xF9\n\x19\x07\x19\xFB\n\x19\f\x19\x0E\x19\xFE\v\x19\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0108\n\x1C\f\x1C" +
		"\x0E\x1C\u010B\v\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0111\n\x1D" +
		"\f\x1D\x0E\x1D\u0114\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0121\n\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x05\x1F\u0126\n\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"" +
		"\x03\"\x03#\x03#\x03#\x03#\x05#\u0140\n#\x03$\x03$\x03$\x03$\x03$\x03" +
		"%\x03%\x05%\u0149\n%\x03&\x03&\x07&\u014D\n&\f&\x0E&\u0150\v&\x03\'\x03" +
		"\'\x03\'\x03\'\x07\'\u0156\n\'\f\'\x0E\'\u0159\v\'\x03\'\x03\'\x03(\x03" +
		"(\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x05*\u0166\n*\x03+\x03+\x03+\x05" +
		"+\u016B\n+\x03+\x03+\x03+\x03,\x03,\x03,\x05,\u0173\n,\x03-\x03-\x03-" +
		"\x03-\x03-\x03-\x05-\u017B\n-\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/" +
		"\x03/\x03/\x07/\u0187\n/\f/\x0E/\u018A\v/\x03/\x03/\x05/\u018E\n/\x03" +
		"0\x030\x030\x031\x031\x032\x032\x033\x063\u0198\n3\r3\x0E3\u0199\x034" +
		"\x034\x034\x034\x034\x034\x02\x02\x025\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02\x02\x07\x03\x02" +
		"&*\x03\x02\x06\f\x03\x02\"#\x04\x02\r\r$%\x03\x02\x12\x13\x02\u01A5\x02" +
		"m\x03\x02\x02\x02\x04t\x03\x02\x02\x02\x06w\x03\x02\x02\x02\by\x03\x02" +
		"\x02\x02\n\x81\x03\x02\x02\x02\f\x84\x03\x02\x02\x02\x0E\x92\x03\x02\x02" +
		"\x02\x10\x9F\x03\x02\x02\x02\x12\xA5\x03\x02\x02\x02\x14\xA7\x03\x02\x02" +
		"\x02\x16\xA9\x03\x02\x02\x02\x18\xAB\x03\x02\x02\x02\x1A\xAF\x03\x02\x02" +
		"\x02\x1C\xB7\x03\x02\x02\x02\x1E\xBB\x03\x02\x02\x02 \xC0\x03\x02\x02" +
		"\x02\"\xC2\x03\x02\x02\x02$\xC5\x03\x02\x02\x02&\xC8\x03\x02\x02\x02(" +
		"\xD4\x03\x02\x02\x02*\xD8\x03\x02\x02\x02,\xE0\x03\x02\x02\x02.\xE5\x03" +
		"\x02\x02\x020\xEE\x03\x02\x02\x022\xFF\x03\x02\x02\x024\u0101\x03\x02" +
		"\x02\x026\u0103\x03\x02\x02\x028\u010C\x03\x02\x02\x02:\u0120\x03\x02" +
		"\x02\x02<\u0125\x03\x02\x02\x02>\u0127\x03\x02\x02\x02@\u0129\x03\x02" +
		"\x02\x02B\u0131\x03\x02\x02\x02D\u013F\x03\x02\x02\x02F\u0141\x03\x02" +
		"\x02\x02H\u0146\x03\x02\x02\x02J\u014E\x03\x02\x02\x02L\u0151\x03\x02" +
		"\x02\x02N\u015C\x03\x02\x02\x02P\u015E\x03\x02\x02\x02R\u0165\x03\x02" +
		"\x02\x02T\u0167\x03\x02\x02\x02V\u0172\x03\x02\x02\x02X\u0174\x03\x02" +
		"\x02\x02Z\u017C\x03\x02\x02\x02\\\u0181\x03\x02\x02\x02^\u018F\x03\x02" +
		"\x02\x02`\u0192\x03\x02\x02\x02b\u0194\x03\x02\x02\x02d\u0197\x03\x02" +
		"\x02\x02f\u019B\x03\x02\x02\x02hj\x05X-\x02ih\x03\x02\x02\x02jk\x03\x02" +
		"\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02ln\x03\x02\x02\x02mi\x03\x02" +
		"\x02\x02mn\x03\x02\x02\x02np\x03\x02\x02\x02oq\x05\x04\x03\x02po\x03\x02" +
		"\x02\x02qr\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02s\x03\x03" +
		"\x02\x02\x02tu\x05\x06\x04\x02uv\x05&\x14\x02v\x05\x03\x02\x02\x02wx\x05" +
		"\f\x07\x02x\x07\x03\x02\x02\x02y}\x07\x1A\x02\x02z~\x05\n\x06\x02{~\x05" +
		"\x18\r\x02|~\x05\x1C\x0F\x02}z\x03\x02\x02\x02}{\x03\x02\x02\x02}|\x03" +
		"\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x07\x1B\x02\x02\x80\t\x03\x02" +
		"\x02\x02\x81\x82\x076\x02\x02\x82\v\x03\x02\x02\x02\x83\x85\x05\x10\t" +
		"\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x8D\x03\x02\x02" +
		"\x02\x86\x87\x05\x12\n\x02\x87\x88\x07\x18\x02\x02\x88\x89\x05\x0E\b\x02" +
		"\x89\x8A\x07\x19\x02\x02\x8A\x8C\x03\x02\x02\x02\x8B\x86\x03\x02\x02\x02" +
		"\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02" +
		"\x8E\r\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x90\x93\x05\x10\t\x02\x91" +
		"\x93\x05\f\x07\x02\x92\x90\x03\x02\x02\x02\x92\x91\x03\x02\x02\x02\x93" +
		"\x9B\x03\x02\x02\x02\x94\x97\x07!\x02\x02\x95\x98\x05\x10\t\x02\x96\x98" +
		"\x05\f\x07\x02\x97\x95\x03\x02\x02\x02\x97\x96\x03\x02\x02\x02\x98\x9A" +
		"\x03\x02\x02\x02\x99\x94\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99" +
		"\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x0F\x03\x02\x02\x02\x9D\x9B" +
		"\x03\x02\x02\x02\x9E\xA0\x05\b\x05\x02\x9F\x9E\x03\x02\x02\x02\xA0\xA1" +
		"\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\x11" +
		"\x03\x02\x02\x02\xA3\xA6\x05\x14\v\x02\xA4\xA6\x05\x16\f\x02\xA5\xA3\x03" +
		"\x02\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\x13\x03\x02\x02\x02\xA7\xA8\x07" +
		"\x03\x02\x02\xA8\x15\x03\x02\x02\x02\xA9\xAA\x07\x04\x02\x02\xAA\x17\x03" +
		"\x02\x02\x02\xAB\xAC\x05\n\x06\x02\xAC\xAD\x07\x05\x02\x02\xAD\xAE\x05" +
		"\n\x06\x02\xAE\x19\x03\x02\x02\x02\xAF\xB4\x05\x1C\x0F\x02\xB0\xB1\x07" +
		"!\x02\x02\xB1\xB3\x05\x1C\x0F\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB6\x03" +
		"\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\x1B\x03" +
		"\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB8\x05\n\x06\x02\xB8\xB9\x05" +
		"\x1E\x10\x02\xB9\xBA\x05 \x11\x02\xBA\x1D\x03\x02\x02\x02\xBB\xBC\t\x02" +
		"\x02\x02\xBC\x1F\x03\x02\x02\x02\xBD\xC1\x07\x14\x02\x02\xBE\xC1\x076" +
		"\x02\x02\xBF\xC1\x05$\x13\x02\xC0\xBD\x03\x02\x02\x02\xC0\xBE\x03\x02" +
		"\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1!\x03\x02\x02\x02\xC2\xC3\x07-\x02" +
		"\x02\xC3\xC4\x076\x02\x02\xC4#\x03\x02\x02\x02\xC5\xC6\x07,\x02\x02\xC6" +
		"\xC7\x076\x02\x02\xC7%\x03\x02\x02\x02\xC8\xCE\x07\x1C\x02\x02\xC9\xCD" +
		"\x05(\x15\x02\xCA\xCD\x05R*\x02\xCB\xCD\x05F$\x02\xCC\xC9\x03\x02\x02" +
		"\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD\xD0\x03\x02\x02" +
		"\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x03\x02\x02" +
		"\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD2\x07\x1D\x02\x02\xD2\'\x03\x02\x02" +
		"\x02\xD3\xD5\x05*\x16\x02\xD4\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02" +
		"\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7)\x03\x02\x02" +
		"\x02\xD8\xD9\x05\n\x06\x02\xD9\xDC\x07\x1E\x02\x02\xDA\xDD\x056\x1C\x02" +
		"\xDB\xDD\x05,\x17\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDB\x03\x02\x02\x02" +
		"\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x07\x1F\x02\x02\xDF+\x03\x02\x02\x02" +
		"\xE0\xE1\x05.\x18\x02\xE1\xE2\x07\x18\x02\x02\xE2\xE3\x050\x19\x02\xE3" +
		"\xE4\x07\x19\x02\x02\xE4-\x03\x02\x02\x02\xE5\xE6\t\x03\x02\x02\xE6/\x03" +
		"\x02\x02\x02\xE7\xEF\x056\x1C\x02\xE8\xEF\x05,\x17\x02\xE9\xED\x05$\x13" +
		"\x02\xEA\xED\x05<\x1F\x02\xEB\xED\x05> \x02\xEC\xE9\x03\x02\x02\x02\xEC" +
		"\xEA\x03\x02\x02\x02\xEC\xEB\x03\x02\x02\x02\xED\xEF\x03\x02\x02\x02\xEE" +
		"\xE7\x03\x02\x02\x02\xEE\xE8\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF" +
		"\xFC\x03\x02\x02\x02\xF0\xF8\x07!\x02\x02\xF1\xF9\x056\x1C\x02\xF2\xF9" +
		"\x05,\x17\x02\xF3\xF7\x05$\x13\x02\xF4\xF7\x05<\x1F\x02\xF5\xF7\x05> " +
		"\x02\xF6\xF3\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF5\x03\x02\x02" +
		"\x02\xF7\xF9\x03\x02\x02\x02\xF8\xF1\x03\x02\x02\x02\xF8\xF2\x03\x02\x02" +
		"\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFB\x03\x02\x02\x02\xFA\xF0\x03\x02\x02" +
		"\x02\xFB\xFE\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02" +
		"\x02\xFD1\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFF\u0100\t\x04\x02" +
		"\x02\u01003\x03\x02\x02\x02\u0101\u0102\t\x05\x02\x02\u01025\x03\x02\x02" +
		"\x02\u0103\u0109\x058\x1D\x02\u0104\u0105\x052\x1A\x02\u0105\u0106\x05" +
		"8\x1D\x02\u0106\u0108\x03\x02\x02\x02\u0107\u0104\x03\x02\x02\x02\u0108" +
		"\u010B\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02" +
		"\x02\x02\u010A7\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010C\u0112" +
		"\x05:\x1E\x02\u010D\u010E\x054\x1B\x02\u010E\u010F\x05:\x1E\x02\u010F" +
		"\u0111\x03\x02\x02\x02\u0110\u010D\x03\x02\x02\x02\u0111\u0114\x03\x02" +
		"\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113" +
		"9\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0115\u0121\x05,\x17\x02" +
		"\u0116\u0121\x05\"\x12\x02\u0117\u0121\x05$\x13\x02\u0118\u0121\x07\x17" +
		"\x02\x02\u0119\u0121\x05<\x1F\x02\u011A\u0121\x05@!\x02\u011B\u0121\x05" +
		"B\"\x02\u011C\u011D\x07\x18\x02\x02\u011D\u011E\x056\x1C\x02\u011E\u011F" +
		"\x07\x19\x02\x02\u011F\u0121\x03\x02\x02\x02\u0120\u0115\x03\x02\x02\x02" +
		"\u0120\u0116\x03\x02\x02\x02\u0120\u0117\x03\x02\x02\x02\u0120\u0118\x03" +
		"\x02\x02\x02\u0120\u0119\x03\x02\x02\x02\u0120\u011A\x03\x02\x02\x02\u0120" +
		"\u011B\x03\x02\x02\x02\u0120\u011C\x03\x02\x02\x02\u0121;\x03\x02\x02" +
		"\x02\u0122\u0126\x07\x14\x02\x02\u0123\u0126\x05D#\x02\u0124\u0126\x05" +
		"> \x02\u0125\u0122\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0124" +
		"\x03\x02\x02\x02\u0126=\x03\x02\x02\x02\u0127\u0128\x070\x02\x02\u0128" +
		"?\x03\x02\x02\x02\u0129\u012A\x07\x0E\x02\x02\u012A\u012B\x056\x1C\x02" +
		"\u012B\u012C\x07!\x02\x02\u012C\u012D\x056\x1C\x02\u012D\u012E\x07!\x02" +
		"\x02\u012E\u012F\x056\x1C\x02\u012F\u0130\x07\x19\x02\x02\u0130A\x03\x02" +
		"\x02\x02\u0131\u0132\x07\x0F\x02\x02\u0132\u0133\x056\x1C\x02\u0133\u0134" +
		"\x07!\x02\x02\u0134\u0135\x056\x1C\x02\u0135\u0136\x07!\x02\x02\u0136" +
		"\u0137\x056\x1C\x02\u0137\u0138\x07!\x02\x02\u0138\u0139\x056\x1C\x02" +
		"\u0139\u013A\x07\x19\x02\x02\u013AC\x03\x02\x02\x02\u013B\u0140\x07\x15" +
		"\x02\x02\u013C\u0140\x07\x16\x02\x02\u013D\u013E\x07+\x02\x02\u013E\u0140" +
		"\x05D#\x02\u013F\u013B\x03\x02\x02\x02\u013F\u013C\x03\x02\x02\x02\u013F" +
		"\u013D\x03\x02\x02\x02\u0140E\x03\x02\x02\x02\u0141\u0142\x05H%\x02\u0142" +
		"\u0143\x07\x1C\x02\x02\u0143\u0144\x05J&\x02\u0144\u0145\x07\x1D\x02\x02" +
		"\u0145G\x03\x02\x02\x02\u0146\u0148\x074\x02\x02\u0147\u0149\x05L\'\x02" +
		"\u0148\u0147\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149I\x03\x02" +
		"\x02\x02\u014A\u014D\x05(\x15\x02\u014B\u014D\x05R*\x02\u014C\u014A\x03" +
		"\x02\x02\x02\u014C\u014B\x03\x02\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E" +
		"\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014FK\x03\x02\x02" +
		"\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0152\x07\x18\x02\x02\u0152\u0157" +
		"\x05N(\x02\u0153\u0154\x07!\x02\x02\u0154\u0156\x05N(\x02\u0155\u0153" +
		"\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02" +
		"\u0157\u0158\x03\x02\x02\x02\u0158\u015A\x03\x02\x02\x02\u0159\u0157\x03" +
		"\x02\x02\x02\u015A\u015B\x07\x19\x02\x02\u015BM\x03\x02\x02\x02\u015C" +
		"\u015D\x056\x1C\x02\u015DO\x03\x02\x02\x02\u015E\u015F\x075\x02\x02\u015F" +
		"Q\x03\x02\x02\x02\u0160\u0166\x05\\/\x02\u0161\u0162\x05P)\x02\u0162\u0163" +
		"\x07\x1C\x02\x02\u0163\u0164\x07\x1D\x02\x02\u0164\u0166\x03\x02\x02\x02" +
		"\u0165\u0160\x03\x02\x02\x02\u0165\u0161\x03\x02\x02\x02\u0166S\x03\x02" +
		"\x02\x02\u0167\u016A\x076\x02\x02\u0168\u0169\x07 \x02\x02\u0169\u016B" +
		"\x076\x02\x02\u016A\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02" +
		"\u016B\u016C\x03\x02\x02\x02\u016C\u016D\x07&\x02\x02\u016D\u016E\x05" +
		"V,\x02\u016EU\x03\x02\x02\x02\u016F\u0173\x07\x14\x02\x02\u0170\u0173" +
		"\x076\x02\x02\u0171\u0173\x05T+\x02\u0172\u016F\x03\x02\x02\x02\u0172" +
		"\u0170\x03\x02\x02\x02\u0172\u0171\x03\x02\x02\x02\u0173W\x03\x02\x02" +
		"\x02\u0174\u017A\x05Z.\x02\u0175\u0176\x07\x1C\x02\x02\u0176\u0177\x05" +
		"d3\x02\u0177\u0178\x07\x1D\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179\u017B" +
		"\x07\x1F\x02\x02\u017A\u0175\x03\x02\x02\x02\u017A\u0179\x03\x02\x02\x02" +
		"\u017BY\x03\x02\x02\x02\u017C\u017D\x07\x10\x02\x02\u017D\u017E\x07\x1A" +
		"\x02\x02\u017E\u017F\x05\n\x06\x02\u017F\u0180\x07\x1B\x02\x02\u0180[" +
		"\x03\x02\x02\x02\u0181\u018D\x05^0\x02\u0182\u0188\x07\x1C\x02\x02\u0183" +
		"\u0187\x05(\x15\x02\u0184\u0187\x05R*\x02\u0185\u0187\x05F$\x02\u0186" +
		"\u0183\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0185\x03\x02" +
		"\x02\x02\u0187\u018A\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188" +
		"\u0189\x03\x02\x02\x02\u0189\u018B\x03\x02\x02\x02\u018A\u0188\x03\x02" +
		"\x02\x02\u018B\u018E\x07\x1D\x02\x02\u018C\u018E\x07\x1F\x02\x02\u018D" +
		"\u0182\x03\x02\x02\x02\u018D\u018C\x03\x02\x02\x02\u018E]\x03\x02\x02" +
		"\x02\u018F\u0190\x07\x11\x02\x02\u0190\u0191\x05\f\x07\x02\u0191_\x03" +
		"\x02\x02\x02\u0192\u0193\x076\x02\x02\u0193a\x03\x02\x02\x02\u0194\u0195" +
		"\t\x06\x02\x02\u0195c\x03\x02\x02\x02\u0196\u0198\x05f4\x02\u0197\u0196" +
		"\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02" +
		"\u0199\u019A\x03\x02\x02\x02\u019Ae\x03\x02\x02\x02\u019B\u019C\x05`1" +
		"\x02\u019C\u019D\x07\x1E\x02\x02\u019D\u019E\x05b2\x02\u019E\u019F\x07" +
		"\x1F\x02\x02\u019Fg\x03\x02\x02\x02)kmr}\x84\x8D\x92\x97\x9B\xA1\xA5\xB4" +
		"\xC0\xCC\xCE\xD6\xDC\xEC\xEE\xF6\xF8\xFC\u0109\u0112\u0120\u0125\u013F" +
		"\u0148\u014C\u014E\u0157\u0165\u016A\u0172\u017A\u0186\u0188\u018D\u0199";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ecssParser.__ATN) {
			ecssParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ecssParser._serializedATN));
		}

		return ecssParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public system(): SystemContext[];
	public system(i: number): SystemContext;
	public system(i?: number): SystemContext | SystemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SystemContext);
		} else {
			return this.getRuleContext(i, SystemContext);
		}
	}
	public define(): DefineContext[];
	public define(i: number): DefineContext;
	public define(i?: number): DefineContext | DefineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefineContext);
		} else {
			return this.getRuleContext(i, DefineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_program; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SystemContext extends ParserRuleContext {
	public systemHeader(): SystemHeaderContext {
		return this.getRuleContext(0, SystemHeaderContext);
	}
	public systemBody(): SystemBodyContext {
		return this.getRuleContext(0, SystemBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_system; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterSystem) {
			listener.enterSystem(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitSystem) {
			listener.exitSystem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitSystem) {
			return visitor.visitSystem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SystemHeaderContext extends ParserRuleContext {
	public queryExpression(): QueryExpressionContext {
		return this.getRuleContext(0, QueryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_systemHeader; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterSystemHeader) {
			listener.enterSystemHeader(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitSystemHeader) {
			listener.exitSystemHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitSystemHeader) {
			return visitor.visitSystemHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentSelectorContext extends ParserRuleContext {
	public LBRACKET(): TerminalNode { return this.getToken(ecssParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode { return this.getToken(ecssParser.RBRACKET, 0); }
	public componentId(): ComponentIdContext | undefined {
		return this.tryGetRuleContext(0, ComponentIdContext);
	}
	public componentAs(): ComponentAsContext | undefined {
		return this.tryGetRuleContext(0, ComponentAsContext);
	}
	public componentAttribute(): ComponentAttributeContext | undefined {
		return this.tryGetRuleContext(0, ComponentAttributeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_componentSelector; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterComponentSelector) {
			listener.enterComponentSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitComponentSelector) {
			listener.exitComponentSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitComponentSelector) {
			return visitor.visitComponentSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ecssParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_componentId; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterComponentId) {
			listener.enterComponentId(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitComponentId) {
			listener.exitComponentId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitComponentId) {
			return visitor.visitComponentId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryExpressionContext extends ParserRuleContext {
	public intersectionQuery(): IntersectionQueryContext | undefined {
		return this.tryGetRuleContext(0, IntersectionQueryContext);
	}
	public setoperator(): SetoperatorContext[];
	public setoperator(i: number): SetoperatorContext;
	public setoperator(i?: number): SetoperatorContext | SetoperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SetoperatorContext);
		} else {
			return this.getRuleContext(i, SetoperatorContext);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ecssParser.LPAREN);
		} else {
			return this.getToken(ecssParser.LPAREN, i);
		}
	}
	public queryOperationParameters(): QueryOperationParametersContext[];
	public queryOperationParameters(i: number): QueryOperationParametersContext;
	public queryOperationParameters(i?: number): QueryOperationParametersContext | QueryOperationParametersContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryOperationParametersContext);
		} else {
			return this.getRuleContext(i, QueryOperationParametersContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ecssParser.RPAREN);
		} else {
			return this.getToken(ecssParser.RPAREN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_queryExpression; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterQueryExpression) {
			listener.enterQueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitQueryExpression) {
			listener.exitQueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitQueryExpression) {
			return visitor.visitQueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryOperationParametersContext extends ParserRuleContext {
	public intersectionQuery(): IntersectionQueryContext[];
	public intersectionQuery(i: number): IntersectionQueryContext;
	public intersectionQuery(i?: number): IntersectionQueryContext | IntersectionQueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntersectionQueryContext);
		} else {
			return this.getRuleContext(i, IntersectionQueryContext);
		}
	}
	public queryExpression(): QueryExpressionContext[];
	public queryExpression(i: number): QueryExpressionContext;
	public queryExpression(i?: number): QueryExpressionContext | QueryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryExpressionContext);
		} else {
			return this.getRuleContext(i, QueryExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ecssParser.COMMA);
		} else {
			return this.getToken(ecssParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_queryOperationParameters; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterQueryOperationParameters) {
			listener.enterQueryOperationParameters(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitQueryOperationParameters) {
			listener.exitQueryOperationParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitQueryOperationParameters) {
			return visitor.visitQueryOperationParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntersectionQueryContext extends ParserRuleContext {
	public componentSelector(): ComponentSelectorContext[];
	public componentSelector(i: number): ComponentSelectorContext;
	public componentSelector(i?: number): ComponentSelectorContext | ComponentSelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentSelectorContext);
		} else {
			return this.getRuleContext(i, ComponentSelectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_intersectionQuery; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterIntersectionQuery) {
			listener.enterIntersectionQuery(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitIntersectionQuery) {
			listener.exitIntersectionQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitIntersectionQuery) {
			return visitor.visitIntersectionQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetoperatorContext extends ParserRuleContext {
	public setOperatorNot(): SetOperatorNotContext | undefined {
		return this.tryGetRuleContext(0, SetOperatorNotContext);
	}
	public setOperatorAny(): SetOperatorAnyContext | undefined {
		return this.tryGetRuleContext(0, SetOperatorAnyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_setoperator; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterSetoperator) {
			listener.enterSetoperator(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitSetoperator) {
			listener.exitSetoperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitSetoperator) {
			return visitor.visitSetoperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetOperatorNotContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_setOperatorNot; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterSetOperatorNot) {
			listener.enterSetOperatorNot(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitSetOperatorNot) {
			listener.exitSetOperatorNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitSetOperatorNot) {
			return visitor.visitSetOperatorNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetOperatorAnyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_setOperatorAny; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterSetOperatorAny) {
			listener.enterSetOperatorAny(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitSetOperatorAny) {
			listener.exitSetOperatorAny(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitSetOperatorAny) {
			return visitor.visitSetOperatorAny(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentAsContext extends ParserRuleContext {
	public componentId(): ComponentIdContext[];
	public componentId(i: number): ComponentIdContext;
	public componentId(i?: number): ComponentIdContext | ComponentIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIdContext);
		} else {
			return this.getRuleContext(i, ComponentIdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_componentAs; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterComponentAs) {
			listener.enterComponentAs(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitComponentAs) {
			listener.exitComponentAs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitComponentAs) {
			return visitor.visitComponentAs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentAttributesContext extends ParserRuleContext {
	public componentAttribute(): ComponentAttributeContext[];
	public componentAttribute(i: number): ComponentAttributeContext;
	public componentAttribute(i?: number): ComponentAttributeContext | ComponentAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentAttributeContext);
		} else {
			return this.getRuleContext(i, ComponentAttributeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ecssParser.COMMA);
		} else {
			return this.getToken(ecssParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_componentAttributes; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterComponentAttributes) {
			listener.enterComponentAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitComponentAttributes) {
			listener.exitComponentAttributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitComponentAttributes) {
			return visitor.visitComponentAttributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentAttributeContext extends ParserRuleContext {
	public componentId(): ComponentIdContext {
		return this.getRuleContext(0, ComponentIdContext);
	}
	public componentAttributeComparator(): ComponentAttributeComparatorContext {
		return this.getRuleContext(0, ComponentAttributeComparatorContext);
	}
	public componentAttributeValue(): ComponentAttributeValueContext {
		return this.getRuleContext(0, ComponentAttributeValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_componentAttribute; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterComponentAttribute) {
			listener.enterComponentAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitComponentAttribute) {
			listener.exitComponentAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitComponentAttribute) {
			return visitor.visitComponentAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentAttributeComparatorContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ecssParser.ASSIGN, 0); }
	public LESSTHAN(): TerminalNode | undefined { return this.tryGetToken(ecssParser.LESSTHAN, 0); }
	public GREATERTHAN(): TerminalNode | undefined { return this.tryGetToken(ecssParser.GREATERTHAN, 0); }
	public LESSTHANOREQUAL(): TerminalNode | undefined { return this.tryGetToken(ecssParser.LESSTHANOREQUAL, 0); }
	public GREATERTHANOREQUAL(): TerminalNode | undefined { return this.tryGetToken(ecssParser.GREATERTHANOREQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_componentAttributeComparator; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterComponentAttributeComparator) {
			listener.enterComponentAttributeComparator(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitComponentAttributeComparator) {
			listener.exitComponentAttributeComparator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitComponentAttributeComparator) {
			return visitor.visitComponentAttributeComparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentAttributeValueContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ecssParser.NUMBER, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(ecssParser.Identifier, 0); }
	public queryvar(): QueryvarContext | undefined {
		return this.tryGetRuleContext(0, QueryvarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_componentAttributeValue; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterComponentAttributeValue) {
			listener.enterComponentAttributeValue(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitComponentAttributeValue) {
			listener.exitComponentAttributeValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitComponentAttributeValue) {
			return visitor.visitComponentAttributeValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	public DOLLAR(): TerminalNode { return this.getToken(ecssParser.DOLLAR, 0); }
	public Identifier(): TerminalNode { return this.getToken(ecssParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_var; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryvarContext extends ParserRuleContext {
	public QUESTION(): TerminalNode { return this.getToken(ecssParser.QUESTION, 0); }
	public Identifier(): TerminalNode { return this.getToken(ecssParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_queryvar; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterQueryvar) {
			listener.enterQueryvar(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitQueryvar) {
			listener.exitQueryvar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitQueryvar) {
			return visitor.visitQueryvar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SystemBodyContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(ecssParser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(ecssParser.RCURLY, 0); }
	public componentStatements(): ComponentStatementsContext[];
	public componentStatements(i: number): ComponentStatementsContext;
	public componentStatements(i?: number): ComponentStatementsContext | ComponentStatementsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentStatementsContext);
		} else {
			return this.getRuleContext(i, ComponentStatementsContext);
		}
	}
	public atRule(): AtRuleContext[];
	public atRule(i: number): AtRuleContext;
	public atRule(i?: number): AtRuleContext | AtRuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtRuleContext);
		} else {
			return this.getRuleContext(i, AtRuleContext);
		}
	}
	public eventHandler(): EventHandlerContext[];
	public eventHandler(i: number): EventHandlerContext;
	public eventHandler(i?: number): EventHandlerContext | EventHandlerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventHandlerContext);
		} else {
			return this.getRuleContext(i, EventHandlerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_systemBody; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterSystemBody) {
			listener.enterSystemBody(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitSystemBody) {
			listener.exitSystemBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitSystemBody) {
			return visitor.visitSystemBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentStatementsContext extends ParserRuleContext {
	public componentStatement(): ComponentStatementContext[];
	public componentStatement(i: number): ComponentStatementContext;
	public componentStatement(i?: number): ComponentStatementContext | ComponentStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentStatementContext);
		} else {
			return this.getRuleContext(i, ComponentStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_componentStatements; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterComponentStatements) {
			listener.enterComponentStatements(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitComponentStatements) {
			listener.exitComponentStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitComponentStatements) {
			return visitor.visitComponentStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentStatementContext extends ParserRuleContext {
	public componentId(): ComponentIdContext {
		return this.getRuleContext(0, ComponentIdContext);
	}
	public COLON(): TerminalNode { return this.getToken(ecssParser.COLON, 0); }
	public SEMI(): TerminalNode { return this.getToken(ecssParser.SEMI, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_componentStatement; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterComponentStatement) {
			listener.enterComponentStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitComponentStatement) {
			listener.exitComponentStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitComponentStatement) {
			return visitor.visitComponentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(ecssParser.LPAREN, 0); }
	public functionParameters(): FunctionParametersContext {
		return this.getRuleContext(0, FunctionParametersContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ecssParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_function; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_functionName; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterFunctionName) {
			listener.enterFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitFunctionName) {
			listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionParametersContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public function(): FunctionContext[];
	public function(i: number): FunctionContext;
	public function(i?: number): FunctionContext | FunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionContext);
		} else {
			return this.getRuleContext(i, FunctionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ecssParser.COMMA);
		} else {
			return this.getToken(ecssParser.COMMA, i);
		}
	}
	public queryvar(): QueryvarContext[];
	public queryvar(i: number): QueryvarContext;
	public queryvar(i?: number): QueryvarContext | QueryvarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryvarContext);
		} else {
			return this.getRuleContext(i, QueryvarContext);
		}
	}
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_functionParameters; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterFunctionParameters) {
			listener.enterFunctionParameters(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitFunctionParameters) {
			listener.exitFunctionParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitFunctionParameters) {
			return visitor.visitFunctionParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MathoperatoradditionsContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(ecssParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ecssParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_mathoperatoradditions; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterMathoperatoradditions) {
			listener.enterMathoperatoradditions(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitMathoperatoradditions) {
			listener.exitMathoperatoradditions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitMathoperatoradditions) {
			return visitor.visitMathoperatoradditions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MathoperatorfactorsContext extends ParserRuleContext {
	public MULT(): TerminalNode | undefined { return this.tryGetToken(ecssParser.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(ecssParser.DIV, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_mathoperatorfactors; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterMathoperatorfactors) {
			listener.enterMathoperatorfactors(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitMathoperatorfactors) {
			listener.exitMathoperatorfactors(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitMathoperatorfactors) {
			return visitor.visitMathoperatorfactors(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public mathoperatoradditions(): MathoperatoradditionsContext[];
	public mathoperatoradditions(i: number): MathoperatoradditionsContext;
	public mathoperatoradditions(i?: number): MathoperatoradditionsContext | MathoperatoradditionsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MathoperatoradditionsContext);
		} else {
			return this.getRuleContext(i, MathoperatoradditionsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_expression; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	public mathoperatorfactors(): MathoperatorfactorsContext[];
	public mathoperatorfactors(i: number): MathoperatorfactorsContext;
	public mathoperatorfactors(i?: number): MathoperatorfactorsContext | MathoperatorfactorsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MathoperatorfactorsContext);
		} else {
			return this.getRuleContext(i, MathoperatorfactorsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_term; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public var(): VarContext | undefined {
		return this.tryGetRuleContext(0, VarContext);
	}
	public queryvar(): QueryvarContext | undefined {
		return this.tryGetRuleContext(0, QueryvarContext);
	}
	public UNSET(): TerminalNode | undefined { return this.tryGetToken(ecssParser.UNSET, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public rgb(): RgbContext | undefined {
		return this.tryGetRuleContext(0, RgbContext);
	}
	public rgba(): RgbaContext | undefined {
		return this.tryGetRuleContext(0, RgbaContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ecssParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ecssParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_factor; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ecssParser.NUMBER, 0); }
	public boolval(): BoolvalContext | undefined {
		return this.tryGetRuleContext(0, BoolvalContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_literal; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(ecssParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RgbContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ecssParser.COMMA);
		} else {
			return this.getToken(ecssParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ecssParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_rgb; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterRgb) {
			listener.enterRgb(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitRgb) {
			listener.exitRgb(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitRgb) {
			return visitor.visitRgb(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RgbaContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ecssParser.COMMA);
		} else {
			return this.getToken(ecssParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ecssParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_rgba; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterRgba) {
			listener.enterRgba(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitRgba) {
			listener.exitRgba(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitRgba) {
			return visitor.visitRgba(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolvalContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(ecssParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(ecssParser.FALSE, 0); }
	public EXCLAMATION(): TerminalNode | undefined { return this.tryGetToken(ecssParser.EXCLAMATION, 0); }
	public boolval(): BoolvalContext | undefined {
		return this.tryGetRuleContext(0, BoolvalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_boolval; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterBoolval) {
			listener.enterBoolval(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitBoolval) {
			listener.exitBoolval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitBoolval) {
			return visitor.visitBoolval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventHandlerContext extends ParserRuleContext {
	public eventHandlerHeader(): EventHandlerHeaderContext {
		return this.getRuleContext(0, EventHandlerHeaderContext);
	}
	public LCURLY(): TerminalNode { return this.getToken(ecssParser.LCURLY, 0); }
	public eventHandlerBody(): EventHandlerBodyContext {
		return this.getRuleContext(0, EventHandlerBodyContext);
	}
	public RCURLY(): TerminalNode { return this.getToken(ecssParser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_eventHandler; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterEventHandler) {
			listener.enterEventHandler(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitEventHandler) {
			listener.exitEventHandler(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitEventHandler) {
			return visitor.visitEventHandler(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventHandlerHeaderContext extends ParserRuleContext {
	public EventIdentifier(): TerminalNode { return this.getToken(ecssParser.EventIdentifier, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_eventHandlerHeader; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterEventHandlerHeader) {
			listener.enterEventHandlerHeader(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitEventHandlerHeader) {
			listener.exitEventHandlerHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitEventHandlerHeader) {
			return visitor.visitEventHandlerHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventHandlerBodyContext extends ParserRuleContext {
	public componentStatements(): ComponentStatementsContext[];
	public componentStatements(i: number): ComponentStatementsContext;
	public componentStatements(i?: number): ComponentStatementsContext | ComponentStatementsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentStatementsContext);
		} else {
			return this.getRuleContext(i, ComponentStatementsContext);
		}
	}
	public atRule(): AtRuleContext[];
	public atRule(i: number): AtRuleContext;
	public atRule(i?: number): AtRuleContext | AtRuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtRuleContext);
		} else {
			return this.getRuleContext(i, AtRuleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_eventHandlerBody; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterEventHandlerBody) {
			listener.enterEventHandlerBody(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitEventHandlerBody) {
			listener.exitEventHandlerBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitEventHandlerBody) {
			return visitor.visitEventHandlerBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ecssParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ecssParser.RPAREN, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ecssParser.COMMA);
		} else {
			return this.getToken(ecssParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_arguments; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_argument; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtRuleHeaderContext extends ParserRuleContext {
	public AtRuleIdentifier(): TerminalNode { return this.getToken(ecssParser.AtRuleIdentifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_atRuleHeader; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterAtRuleHeader) {
			listener.enterAtRuleHeader(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitAtRuleHeader) {
			listener.exitAtRuleHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitAtRuleHeader) {
			return visitor.visitAtRuleHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtRuleContext extends ParserRuleContext {
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public atRuleHeader(): AtRuleHeaderContext | undefined {
		return this.tryGetRuleContext(0, AtRuleHeaderContext);
	}
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(ecssParser.LCURLY, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(ecssParser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_atRule; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterAtRule) {
			listener.enterAtRule(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitAtRule) {
			listener.exitAtRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitAtRule) {
			return visitor.visitAtRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableAssignmentContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ecssParser.Identifier);
		} else {
			return this.getToken(ecssParser.Identifier, i);
		}
	}
	public ASSIGN(): TerminalNode { return this.getToken(ecssParser.ASSIGN, 0); }
	public variableAssignmentValue(): VariableAssignmentValueContext {
		return this.getRuleContext(0, VariableAssignmentValueContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ecssParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_variableAssignment; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterVariableAssignment) {
			listener.enterVariableAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitVariableAssignment) {
			listener.exitVariableAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitVariableAssignment) {
			return visitor.visitVariableAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableAssignmentValueContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ecssParser.NUMBER, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(ecssParser.Identifier, 0); }
	public variableAssignment(): VariableAssignmentContext | undefined {
		return this.tryGetRuleContext(0, VariableAssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_variableAssignmentValue; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterVariableAssignmentValue) {
			listener.enterVariableAssignmentValue(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitVariableAssignmentValue) {
			listener.exitVariableAssignmentValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitVariableAssignmentValue) {
			return visitor.visitVariableAssignmentValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefineContext extends ParserRuleContext {
	public defineHeader(): DefineHeaderContext {
		return this.getRuleContext(0, DefineHeaderContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(ecssParser.SEMI, 0); }
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(ecssParser.LCURLY, 0); }
	public defineDeclarations(): DefineDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, DefineDeclarationsContext);
	}
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(ecssParser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_define; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterDefine) {
			listener.enterDefine(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitDefine) {
			listener.exitDefine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitDefine) {
			return visitor.visitDefine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefineHeaderContext extends ParserRuleContext {
	public LBRACKET(): TerminalNode { return this.getToken(ecssParser.LBRACKET, 0); }
	public componentId(): ComponentIdContext {
		return this.getRuleContext(0, ComponentIdContext);
	}
	public RBRACKET(): TerminalNode { return this.getToken(ecssParser.RBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_defineHeader; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterDefineHeader) {
			listener.enterDefineHeader(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitDefineHeader) {
			listener.exitDefineHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitDefineHeader) {
			return visitor.visitDefineHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public queryHeader(): QueryHeaderContext {
		return this.getRuleContext(0, QueryHeaderContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(ecssParser.SEMI, 0); }
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(ecssParser.LCURLY, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(ecssParser.RCURLY, 0); }
	public componentStatements(): ComponentStatementsContext[];
	public componentStatements(i: number): ComponentStatementsContext;
	public componentStatements(i?: number): ComponentStatementsContext | ComponentStatementsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentStatementsContext);
		} else {
			return this.getRuleContext(i, ComponentStatementsContext);
		}
	}
	public atRule(): AtRuleContext[];
	public atRule(i: number): AtRuleContext;
	public atRule(i?: number): AtRuleContext | AtRuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtRuleContext);
		} else {
			return this.getRuleContext(i, AtRuleContext);
		}
	}
	public eventHandler(): EventHandlerContext[];
	public eventHandler(i: number): EventHandlerContext;
	public eventHandler(i?: number): EventHandlerContext | EventHandlerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventHandlerContext);
		} else {
			return this.getRuleContext(i, EventHandlerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_query; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryHeaderContext extends ParserRuleContext {
	public queryExpression(): QueryExpressionContext {
		return this.getRuleContext(0, QueryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_queryHeader; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterQueryHeader) {
			listener.enterQueryHeader(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitQueryHeader) {
			listener.exitQueryHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitQueryHeader) {
			return visitor.visitQueryHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentPropertyIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(ecssParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_componentPropertyId; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterComponentPropertyId) {
			listener.enterComponentPropertyId(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitComponentPropertyId) {
			listener.exitComponentPropertyId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitComponentPropertyId) {
			return visitor.visitComponentPropertyId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_type; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefineDeclarationsContext extends ParserRuleContext {
	public defineDeclaration(): DefineDeclarationContext[];
	public defineDeclaration(i: number): DefineDeclarationContext;
	public defineDeclaration(i?: number): DefineDeclarationContext | DefineDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefineDeclarationContext);
		} else {
			return this.getRuleContext(i, DefineDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_defineDeclarations; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterDefineDeclarations) {
			listener.enterDefineDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitDefineDeclarations) {
			listener.exitDefineDeclarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitDefineDeclarations) {
			return visitor.visitDefineDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefineDeclarationContext extends ParserRuleContext {
	public componentPropertyId(): ComponentPropertyIdContext {
		return this.getRuleContext(0, ComponentPropertyIdContext);
	}
	public COLON(): TerminalNode { return this.getToken(ecssParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ecssParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ecssParser.RULE_defineDeclaration; }
	// @Override
	public enterRule(listener: ecssListener): void {
		if (listener.enterDefineDeclaration) {
			listener.enterDefineDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ecssListener): void {
		if (listener.exitDefineDeclaration) {
			listener.exitDefineDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ecssVisitor<Result>): Result {
		if (visitor.visitDefineDeclaration) {
			return visitor.visitDefineDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


