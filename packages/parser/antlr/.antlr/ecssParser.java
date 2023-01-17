// Generated from /home/arch/DOMino3/packages/parser/antlr/ecss.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ecssParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		NUMBER=18, TRUE=19, FALSE=20, UNSET=21, LPAREN=22, RPAREN=23, LBRACKET=24, 
		RBRACKET=25, LCURLY=26, RCURLY=27, COLON=28, SEMI=29, DOT=30, COMMA=31, 
		PLUS=32, MINUS=33, MULT=34, DIV=35, ASSIGN=36, LESSTHAN=37, GREATERTHAN=38, 
		LESSTHANOREQUAL=39, GREATERTHANOREQUAL=40, EXCLAMATION=41, QUESTION=42, 
		DOLLAR=43, AT=44, QUOTE=45, STRING_LITERAL=46, ESC=47, UNICODE=48, HEX=49, 
		EventIdentifier=50, AtRuleIdentifier=51, Identifier=52, COMMENT=53, WS=54;
	public static final int
		RULE_program = 0, RULE_system = 1, RULE_systemHeader = 2, RULE_componentSelector = 3, 
		RULE_componentId = 4, RULE_queryExpression = 5, RULE_queryOperationParameters = 6, 
		RULE_intersectionQuery = 7, RULE_setoperator = 8, RULE_setOperatorNot = 9, 
		RULE_setOperatorAny = 10, RULE_componentAs = 11, RULE_componentAttributes = 12, 
		RULE_componentAttribute = 13, RULE_componentAttributeComparator = 14, 
		RULE_componentAttributeValue = 15, RULE_var = 16, RULE_queryvar = 17, 
		RULE_systemBody = 18, RULE_componentStatements = 19, RULE_componentStatement = 20, 
		RULE_function = 21, RULE_functionName = 22, RULE_functionParameters = 23, 
		RULE_mathoperatoradditions = 24, RULE_mathoperatorfactors = 25, RULE_expression = 26, 
		RULE_term = 27, RULE_factor = 28, RULE_literal = 29, RULE_stringLiteral = 30, 
		RULE_rgb = 31, RULE_rgba = 32, RULE_boolval = 33, RULE_eventHandler = 34, 
		RULE_eventHandlerHeader = 35, RULE_eventHandlerBody = 36, RULE_arguments = 37, 
		RULE_argument = 38, RULE_atRuleHeader = 39, RULE_atRule = 40, RULE_variableAssignment = 41, 
		RULE_variableAssignmentValue = 42, RULE_define = 43, RULE_defineHeader = 44, 
		RULE_query = 45, RULE_queryHeader = 46, RULE_componentPropertyId = 47, 
		RULE_type = 48, RULE_defineDeclarations = 49, RULE_defineDeclaration = 50;
	private static String[] makeRuleNames() {
		return new String[] {
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
			"componentPropertyId", "type", "defineDeclarations", "defineDeclaration"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':not'", "':any'", "'as'", "'max'", "'min'", "'sin'", "'cos'", 
			"'map'", "'abs'", "'sign'", "'%'", "'rgb('", "'rgba('", "'@define'", 
			"'@query'", "'boolean'", "'number'", null, "'true'", "'false'", "'unset'", 
			"'('", "')'", "'['", "']'", "'{'", "'}'", "':'", "';'", "'.'", "','", 
			"'+'", "'-'", "'*'", "'/'", "'='", "'<'", "'>'", "'<='", "'>='", "'!'", 
			"'?'", "'$'", "'@'", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "NUMBER", "TRUE", "FALSE", "UNSET", 
			"LPAREN", "RPAREN", "LBRACKET", "RBRACKET", "LCURLY", "RCURLY", "COLON", 
			"SEMI", "DOT", "COMMA", "PLUS", "MINUS", "MULT", "DIV", "ASSIGN", "LESSTHAN", 
			"GREATERTHAN", "LESSTHANOREQUAL", "GREATERTHANOREQUAL", "EXCLAMATION", 
			"QUESTION", "DOLLAR", "AT", "QUOTE", "STRING_LITERAL", "ESC", "UNICODE", 
			"HEX", "EventIdentifier", "AtRuleIdentifier", "Identifier", "COMMENT", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ecss.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ecssParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public List<SystemContext> system() {
			return getRuleContexts(SystemContext.class);
		}
		public SystemContext system(int i) {
			return getRuleContext(SystemContext.class,i);
		}
		public List<DefineContext> define() {
			return getRuleContexts(DefineContext.class);
		}
		public DefineContext define(int i) {
			return getRuleContext(DefineContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__13) {
				{
				setState(103); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(102);
					define();
					}
					}
					setState(105); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__13 );
				}
			}

			setState(110); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(109);
				system();
				}
				}
				setState(112); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << LBRACKET) | (1L << LCURLY))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SystemContext extends ParserRuleContext {
		public SystemHeaderContext systemHeader() {
			return getRuleContext(SystemHeaderContext.class,0);
		}
		public SystemBodyContext systemBody() {
			return getRuleContext(SystemBodyContext.class,0);
		}
		public SystemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_system; }
	}

	public final SystemContext system() throws RecognitionException {
		SystemContext _localctx = new SystemContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_system);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			systemHeader();
			setState(115);
			systemBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SystemHeaderContext extends ParserRuleContext {
		public QueryExpressionContext queryExpression() {
			return getRuleContext(QueryExpressionContext.class,0);
		}
		public SystemHeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_systemHeader; }
	}

	public final SystemHeaderContext systemHeader() throws RecognitionException {
		SystemHeaderContext _localctx = new SystemHeaderContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_systemHeader);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			queryExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentSelectorContext extends ParserRuleContext {
		public TerminalNode LBRACKET() { return getToken(ecssParser.LBRACKET, 0); }
		public TerminalNode RBRACKET() { return getToken(ecssParser.RBRACKET, 0); }
		public ComponentIdContext componentId() {
			return getRuleContext(ComponentIdContext.class,0);
		}
		public ComponentAsContext componentAs() {
			return getRuleContext(ComponentAsContext.class,0);
		}
		public ComponentAttributeContext componentAttribute() {
			return getRuleContext(ComponentAttributeContext.class,0);
		}
		public ComponentSelectorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentSelector; }
	}

	public final ComponentSelectorContext componentSelector() throws RecognitionException {
		ComponentSelectorContext _localctx = new ComponentSelectorContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_componentSelector);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			match(LBRACKET);
			setState(123);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(120);
				componentId();
				}
				break;
			case 2:
				{
				setState(121);
				componentAs();
				}
				break;
			case 3:
				{
				setState(122);
				componentAttribute();
				}
				break;
			}
			setState(125);
			match(RBRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentIdContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(ecssParser.Identifier, 0); }
		public ComponentIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentId; }
	}

	public final ComponentIdContext componentId() throws RecognitionException {
		ComponentIdContext _localctx = new ComponentIdContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_componentId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryExpressionContext extends ParserRuleContext {
		public IntersectionQueryContext intersectionQuery() {
			return getRuleContext(IntersectionQueryContext.class,0);
		}
		public List<SetoperatorContext> setoperator() {
			return getRuleContexts(SetoperatorContext.class);
		}
		public SetoperatorContext setoperator(int i) {
			return getRuleContext(SetoperatorContext.class,i);
		}
		public List<TerminalNode> LPAREN() { return getTokens(ecssParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(ecssParser.LPAREN, i);
		}
		public List<QueryOperationParametersContext> queryOperationParameters() {
			return getRuleContexts(QueryOperationParametersContext.class);
		}
		public QueryOperationParametersContext queryOperationParameters(int i) {
			return getRuleContext(QueryOperationParametersContext.class,i);
		}
		public List<TerminalNode> RPAREN() { return getTokens(ecssParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(ecssParser.RPAREN, i);
		}
		public QueryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryExpression; }
	}

	public final QueryExpressionContext queryExpression() throws RecognitionException {
		QueryExpressionContext _localctx = new QueryExpressionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_queryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACKET) {
				{
				setState(129);
				intersectionQuery();
				}
			}

			setState(139);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0 || _la==T__1) {
				{
				{
				setState(132);
				setoperator();
				setState(133);
				match(LPAREN);
				setState(134);
				queryOperationParameters();
				setState(135);
				match(RPAREN);
				}
				}
				setState(141);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryOperationParametersContext extends ParserRuleContext {
		public List<IntersectionQueryContext> intersectionQuery() {
			return getRuleContexts(IntersectionQueryContext.class);
		}
		public IntersectionQueryContext intersectionQuery(int i) {
			return getRuleContext(IntersectionQueryContext.class,i);
		}
		public List<QueryExpressionContext> queryExpression() {
			return getRuleContexts(QueryExpressionContext.class);
		}
		public QueryExpressionContext queryExpression(int i) {
			return getRuleContext(QueryExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ecssParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ecssParser.COMMA, i);
		}
		public QueryOperationParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryOperationParameters; }
	}

	public final QueryOperationParametersContext queryOperationParameters() throws RecognitionException {
		QueryOperationParametersContext _localctx = new QueryOperationParametersContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_queryOperationParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(142);
				intersectionQuery();
				}
				break;
			case 2:
				{
				setState(143);
				queryExpression();
				}
				break;
			}
			setState(153);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(146);
				match(COMMA);
				setState(149);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
				case 1:
					{
					setState(147);
					intersectionQuery();
					}
					break;
				case 2:
					{
					setState(148);
					queryExpression();
					}
					break;
				}
				}
				}
				setState(155);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntersectionQueryContext extends ParserRuleContext {
		public List<ComponentSelectorContext> componentSelector() {
			return getRuleContexts(ComponentSelectorContext.class);
		}
		public ComponentSelectorContext componentSelector(int i) {
			return getRuleContext(ComponentSelectorContext.class,i);
		}
		public IntersectionQueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intersectionQuery; }
	}

	public final IntersectionQueryContext intersectionQuery() throws RecognitionException {
		IntersectionQueryContext _localctx = new IntersectionQueryContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_intersectionQuery);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(156);
				componentSelector();
				}
				}
				setState(159); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==LBRACKET );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetoperatorContext extends ParserRuleContext {
		public SetOperatorNotContext setOperatorNot() {
			return getRuleContext(SetOperatorNotContext.class,0);
		}
		public SetOperatorAnyContext setOperatorAny() {
			return getRuleContext(SetOperatorAnyContext.class,0);
		}
		public SetoperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setoperator; }
	}

	public final SetoperatorContext setoperator() throws RecognitionException {
		SetoperatorContext _localctx = new SetoperatorContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_setoperator);
		try {
			setState(163);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(161);
				setOperatorNot();
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 2);
				{
				setState(162);
				setOperatorAny();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetOperatorNotContext extends ParserRuleContext {
		public SetOperatorNotContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setOperatorNot; }
	}

	public final SetOperatorNotContext setOperatorNot() throws RecognitionException {
		SetOperatorNotContext _localctx = new SetOperatorNotContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_setOperatorNot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetOperatorAnyContext extends ParserRuleContext {
		public SetOperatorAnyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setOperatorAny; }
	}

	public final SetOperatorAnyContext setOperatorAny() throws RecognitionException {
		SetOperatorAnyContext _localctx = new SetOperatorAnyContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_setOperatorAny);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentAsContext extends ParserRuleContext {
		public List<ComponentIdContext> componentId() {
			return getRuleContexts(ComponentIdContext.class);
		}
		public ComponentIdContext componentId(int i) {
			return getRuleContext(ComponentIdContext.class,i);
		}
		public ComponentAsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentAs; }
	}

	public final ComponentAsContext componentAs() throws RecognitionException {
		ComponentAsContext _localctx = new ComponentAsContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_componentAs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(169);
			componentId();
			setState(170);
			match(T__2);
			setState(171);
			componentId();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentAttributesContext extends ParserRuleContext {
		public List<ComponentAttributeContext> componentAttribute() {
			return getRuleContexts(ComponentAttributeContext.class);
		}
		public ComponentAttributeContext componentAttribute(int i) {
			return getRuleContext(ComponentAttributeContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ecssParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ecssParser.COMMA, i);
		}
		public ComponentAttributesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentAttributes; }
	}

	public final ComponentAttributesContext componentAttributes() throws RecognitionException {
		ComponentAttributesContext _localctx = new ComponentAttributesContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_componentAttributes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			componentAttribute();
			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(174);
				match(COMMA);
				setState(175);
				componentAttribute();
				}
				}
				setState(180);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentAttributeContext extends ParserRuleContext {
		public ComponentIdContext componentId() {
			return getRuleContext(ComponentIdContext.class,0);
		}
		public ComponentAttributeComparatorContext componentAttributeComparator() {
			return getRuleContext(ComponentAttributeComparatorContext.class,0);
		}
		public ComponentAttributeValueContext componentAttributeValue() {
			return getRuleContext(ComponentAttributeValueContext.class,0);
		}
		public ComponentAttributeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentAttribute; }
	}

	public final ComponentAttributeContext componentAttribute() throws RecognitionException {
		ComponentAttributeContext _localctx = new ComponentAttributeContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_componentAttribute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			componentId();
			setState(182);
			componentAttributeComparator();
			setState(183);
			componentAttributeValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentAttributeComparatorContext extends ParserRuleContext {
		public TerminalNode ASSIGN() { return getToken(ecssParser.ASSIGN, 0); }
		public TerminalNode LESSTHAN() { return getToken(ecssParser.LESSTHAN, 0); }
		public TerminalNode GREATERTHAN() { return getToken(ecssParser.GREATERTHAN, 0); }
		public TerminalNode LESSTHANOREQUAL() { return getToken(ecssParser.LESSTHANOREQUAL, 0); }
		public TerminalNode GREATERTHANOREQUAL() { return getToken(ecssParser.GREATERTHANOREQUAL, 0); }
		public ComponentAttributeComparatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentAttributeComparator; }
	}

	public final ComponentAttributeComparatorContext componentAttributeComparator() throws RecognitionException {
		ComponentAttributeComparatorContext _localctx = new ComponentAttributeComparatorContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_componentAttributeComparator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ASSIGN) | (1L << LESSTHAN) | (1L << GREATERTHAN) | (1L << LESSTHANOREQUAL) | (1L << GREATERTHANOREQUAL))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentAttributeValueContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(ecssParser.NUMBER, 0); }
		public TerminalNode Identifier() { return getToken(ecssParser.Identifier, 0); }
		public QueryvarContext queryvar() {
			return getRuleContext(QueryvarContext.class,0);
		}
		public ComponentAttributeValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentAttributeValue; }
	}

	public final ComponentAttributeValueContext componentAttributeValue() throws RecognitionException {
		ComponentAttributeValueContext _localctx = new ComponentAttributeValueContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_componentAttributeValue);
		try {
			setState(190);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(187);
				match(NUMBER);
				}
				break;
			case Identifier:
				enterOuterAlt(_localctx, 2);
				{
				setState(188);
				match(Identifier);
				}
				break;
			case QUESTION:
				enterOuterAlt(_localctx, 3);
				{
				setState(189);
				queryvar();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarContext extends ParserRuleContext {
		public TerminalNode DOLLAR() { return getToken(ecssParser.DOLLAR, 0); }
		public TerminalNode Identifier() { return getToken(ecssParser.Identifier, 0); }
		public VarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var; }
	}

	public final VarContext var() throws RecognitionException {
		VarContext _localctx = new VarContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_var);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			match(DOLLAR);
			setState(193);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryvarContext extends ParserRuleContext {
		public TerminalNode QUESTION() { return getToken(ecssParser.QUESTION, 0); }
		public TerminalNode Identifier() { return getToken(ecssParser.Identifier, 0); }
		public QueryvarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryvar; }
	}

	public final QueryvarContext queryvar() throws RecognitionException {
		QueryvarContext _localctx = new QueryvarContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_queryvar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			match(QUESTION);
			setState(196);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SystemBodyContext extends ParserRuleContext {
		public TerminalNode LCURLY() { return getToken(ecssParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(ecssParser.RCURLY, 0); }
		public List<ComponentStatementsContext> componentStatements() {
			return getRuleContexts(ComponentStatementsContext.class);
		}
		public ComponentStatementsContext componentStatements(int i) {
			return getRuleContext(ComponentStatementsContext.class,i);
		}
		public List<AtRuleContext> atRule() {
			return getRuleContexts(AtRuleContext.class);
		}
		public AtRuleContext atRule(int i) {
			return getRuleContext(AtRuleContext.class,i);
		}
		public List<EventHandlerContext> eventHandler() {
			return getRuleContexts(EventHandlerContext.class);
		}
		public EventHandlerContext eventHandler(int i) {
			return getRuleContext(EventHandlerContext.class,i);
		}
		public SystemBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_systemBody; }
	}

	public final SystemBodyContext systemBody() throws RecognitionException {
		SystemBodyContext _localctx = new SystemBodyContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_systemBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			match(LCURLY);
			setState(204);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__14) | (1L << EventIdentifier) | (1L << AtRuleIdentifier) | (1L << Identifier))) != 0)) {
				{
				setState(202);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(199);
					componentStatements();
					}
					break;
				case T__14:
				case AtRuleIdentifier:
					{
					setState(200);
					atRule();
					}
					break;
				case EventIdentifier:
					{
					setState(201);
					eventHandler();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(206);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(207);
			match(RCURLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentStatementsContext extends ParserRuleContext {
		public List<ComponentStatementContext> componentStatement() {
			return getRuleContexts(ComponentStatementContext.class);
		}
		public ComponentStatementContext componentStatement(int i) {
			return getRuleContext(ComponentStatementContext.class,i);
		}
		public ComponentStatementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentStatements; }
	}

	public final ComponentStatementsContext componentStatements() throws RecognitionException {
		ComponentStatementsContext _localctx = new ComponentStatementsContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_componentStatements);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(210); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(209);
					componentStatement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(212); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentStatementContext extends ParserRuleContext {
		public ComponentIdContext componentId() {
			return getRuleContext(ComponentIdContext.class,0);
		}
		public TerminalNode COLON() { return getToken(ecssParser.COLON, 0); }
		public TerminalNode SEMI() { return getToken(ecssParser.SEMI, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FunctionContext function() {
			return getRuleContext(FunctionContext.class,0);
		}
		public ComponentStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentStatement; }
	}

	public final ComponentStatementContext componentStatement() throws RecognitionException {
		ComponentStatementContext _localctx = new ComponentStatementContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_componentStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214);
			componentId();
			setState(215);
			match(COLON);
			setState(218);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(216);
				expression();
				}
				break;
			case 2:
				{
				setState(217);
				function();
				}
				break;
			}
			setState(220);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionContext extends ParserRuleContext {
		public FunctionNameContext functionName() {
			return getRuleContext(FunctionNameContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(ecssParser.LPAREN, 0); }
		public FunctionParametersContext functionParameters() {
			return getRuleContext(FunctionParametersContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ecssParser.RPAREN, 0); }
		public FunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function; }
	}

	public final FunctionContext function() throws RecognitionException {
		FunctionContext _localctx = new FunctionContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(222);
			functionName();
			setState(223);
			match(LPAREN);
			setState(224);
			functionParameters();
			setState(225);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionNameContext extends ParserRuleContext {
		public FunctionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionName; }
	}

	public final FunctionNameContext functionName() throws RecognitionException {
		FunctionNameContext _localctx = new FunctionNameContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_functionName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionParametersContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<FunctionContext> function() {
			return getRuleContexts(FunctionContext.class);
		}
		public FunctionContext function(int i) {
			return getRuleContext(FunctionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ecssParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ecssParser.COMMA, i);
		}
		public List<QueryvarContext> queryvar() {
			return getRuleContexts(QueryvarContext.class);
		}
		public QueryvarContext queryvar(int i) {
			return getRuleContext(QueryvarContext.class,i);
		}
		public List<LiteralContext> literal() {
			return getRuleContexts(LiteralContext.class);
		}
		public LiteralContext literal(int i) {
			return getRuleContext(LiteralContext.class,i);
		}
		public List<StringLiteralContext> stringLiteral() {
			return getRuleContexts(StringLiteralContext.class);
		}
		public StringLiteralContext stringLiteral(int i) {
			return getRuleContext(StringLiteralContext.class,i);
		}
		public FunctionParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionParameters; }
	}

	public final FunctionParametersContext functionParameters() throws RecognitionException {
		FunctionParametersContext _localctx = new FunctionParametersContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_functionParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(236);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				{
				setState(229);
				expression();
				}
				break;
			case 2:
				{
				setState(230);
				function();
				}
				break;
			case 3:
				{
				setState(234);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
				case 1:
					{
					setState(231);
					queryvar();
					}
					break;
				case 2:
					{
					setState(232);
					literal();
					}
					break;
				case 3:
					{
					setState(233);
					stringLiteral();
					}
					break;
				}
				}
				break;
			}
			setState(250);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(238);
				match(COMMA);
				setState(246);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
				case 1:
					{
					setState(239);
					expression();
					}
					break;
				case 2:
					{
					setState(240);
					function();
					}
					break;
				case 3:
					{
					setState(244);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
					case 1:
						{
						setState(241);
						queryvar();
						}
						break;
					case 2:
						{
						setState(242);
						literal();
						}
						break;
					case 3:
						{
						setState(243);
						stringLiteral();
						}
						break;
					}
					}
					break;
				}
				}
				}
				setState(252);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MathoperatoradditionsContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(ecssParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(ecssParser.MINUS, 0); }
		public MathoperatoradditionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mathoperatoradditions; }
	}

	public final MathoperatoradditionsContext mathoperatoradditions() throws RecognitionException {
		MathoperatoradditionsContext _localctx = new MathoperatoradditionsContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_mathoperatoradditions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(253);
			_la = _input.LA(1);
			if ( !(_la==PLUS || _la==MINUS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MathoperatorfactorsContext extends ParserRuleContext {
		public TerminalNode MULT() { return getToken(ecssParser.MULT, 0); }
		public TerminalNode DIV() { return getToken(ecssParser.DIV, 0); }
		public MathoperatorfactorsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mathoperatorfactors; }
	}

	public final MathoperatorfactorsContext mathoperatorfactors() throws RecognitionException {
		MathoperatorfactorsContext _localctx = new MathoperatorfactorsContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_mathoperatorfactors);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__10) | (1L << MULT) | (1L << DIV))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public List<MathoperatoradditionsContext> mathoperatoradditions() {
			return getRuleContexts(MathoperatoradditionsContext.class);
		}
		public MathoperatoradditionsContext mathoperatoradditions(int i) {
			return getRuleContext(MathoperatoradditionsContext.class,i);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(257);
			term();
			setState(263);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PLUS || _la==MINUS) {
				{
				{
				setState(258);
				mathoperatoradditions();
				setState(259);
				term();
				}
				}
				setState(265);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TermContext extends ParserRuleContext {
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public List<MathoperatorfactorsContext> mathoperatorfactors() {
			return getRuleContexts(MathoperatorfactorsContext.class);
		}
		public MathoperatorfactorsContext mathoperatorfactors(int i) {
			return getRuleContext(MathoperatorfactorsContext.class,i);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			factor();
			setState(272);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__10) | (1L << MULT) | (1L << DIV))) != 0)) {
				{
				{
				setState(267);
				mathoperatorfactors();
				setState(268);
				factor();
				}
				}
				setState(274);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FactorContext extends ParserRuleContext {
		public FunctionContext function() {
			return getRuleContext(FunctionContext.class,0);
		}
		public VarContext var() {
			return getRuleContext(VarContext.class,0);
		}
		public QueryvarContext queryvar() {
			return getRuleContext(QueryvarContext.class,0);
		}
		public TerminalNode UNSET() { return getToken(ecssParser.UNSET, 0); }
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public RgbContext rgb() {
			return getRuleContext(RgbContext.class,0);
		}
		public RgbaContext rgba() {
			return getRuleContext(RgbaContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(ecssParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ecssParser.RPAREN, 0); }
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_factor);
		try {
			setState(286);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
				enterOuterAlt(_localctx, 1);
				{
				setState(275);
				function();
				}
				break;
			case DOLLAR:
				enterOuterAlt(_localctx, 2);
				{
				setState(276);
				var();
				}
				break;
			case QUESTION:
				enterOuterAlt(_localctx, 3);
				{
				setState(277);
				queryvar();
				}
				break;
			case UNSET:
				enterOuterAlt(_localctx, 4);
				{
				setState(278);
				match(UNSET);
				}
				break;
			case NUMBER:
			case TRUE:
			case FALSE:
			case EXCLAMATION:
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 5);
				{
				setState(279);
				literal();
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 6);
				{
				setState(280);
				rgb();
				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 7);
				{
				setState(281);
				rgba();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 8);
				{
				setState(282);
				match(LPAREN);
				setState(283);
				expression();
				setState(284);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(ecssParser.NUMBER, 0); }
		public BoolvalContext boolval() {
			return getRuleContext(BoolvalContext.class,0);
		}
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_literal);
		try {
			setState(291);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(288);
				match(NUMBER);
				}
				break;
			case TRUE:
			case FALSE:
			case EXCLAMATION:
				enterOuterAlt(_localctx, 2);
				{
				setState(289);
				boolval();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(290);
				stringLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringLiteralContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(ecssParser.STRING_LITERAL, 0); }
		public StringLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringLiteral; }
	}

	public final StringLiteralContext stringLiteral() throws RecognitionException {
		StringLiteralContext _localctx = new StringLiteralContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(293);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RgbContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ecssParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ecssParser.COMMA, i);
		}
		public TerminalNode RPAREN() { return getToken(ecssParser.RPAREN, 0); }
		public RgbContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rgb; }
	}

	public final RgbContext rgb() throws RecognitionException {
		RgbContext _localctx = new RgbContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_rgb);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
			match(T__11);
			setState(296);
			expression();
			setState(297);
			match(COMMA);
			setState(298);
			expression();
			setState(299);
			match(COMMA);
			setState(300);
			expression();
			setState(301);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RgbaContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ecssParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ecssParser.COMMA, i);
		}
		public TerminalNode RPAREN() { return getToken(ecssParser.RPAREN, 0); }
		public RgbaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rgba; }
	}

	public final RgbaContext rgba() throws RecognitionException {
		RgbaContext _localctx = new RgbaContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_rgba);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
			match(T__12);
			setState(304);
			expression();
			setState(305);
			match(COMMA);
			setState(306);
			expression();
			setState(307);
			match(COMMA);
			setState(308);
			expression();
			setState(309);
			match(COMMA);
			setState(310);
			expression();
			setState(311);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BoolvalContext extends ParserRuleContext {
		public TerminalNode TRUE() { return getToken(ecssParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(ecssParser.FALSE, 0); }
		public TerminalNode EXCLAMATION() { return getToken(ecssParser.EXCLAMATION, 0); }
		public BoolvalContext boolval() {
			return getRuleContext(BoolvalContext.class,0);
		}
		public BoolvalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolval; }
	}

	public final BoolvalContext boolval() throws RecognitionException {
		BoolvalContext _localctx = new BoolvalContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_boolval);
		try {
			setState(317);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TRUE:
				enterOuterAlt(_localctx, 1);
				{
				setState(313);
				match(TRUE);
				}
				break;
			case FALSE:
				enterOuterAlt(_localctx, 2);
				{
				setState(314);
				match(FALSE);
				}
				break;
			case EXCLAMATION:
				enterOuterAlt(_localctx, 3);
				{
				setState(315);
				match(EXCLAMATION);
				setState(316);
				boolval();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EventHandlerContext extends ParserRuleContext {
		public EventHandlerHeaderContext eventHandlerHeader() {
			return getRuleContext(EventHandlerHeaderContext.class,0);
		}
		public TerminalNode LCURLY() { return getToken(ecssParser.LCURLY, 0); }
		public EventHandlerBodyContext eventHandlerBody() {
			return getRuleContext(EventHandlerBodyContext.class,0);
		}
		public TerminalNode RCURLY() { return getToken(ecssParser.RCURLY, 0); }
		public EventHandlerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventHandler; }
	}

	public final EventHandlerContext eventHandler() throws RecognitionException {
		EventHandlerContext _localctx = new EventHandlerContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_eventHandler);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(319);
			eventHandlerHeader();
			setState(320);
			match(LCURLY);
			setState(321);
			eventHandlerBody();
			setState(322);
			match(RCURLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EventHandlerHeaderContext extends ParserRuleContext {
		public TerminalNode EventIdentifier() { return getToken(ecssParser.EventIdentifier, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public EventHandlerHeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventHandlerHeader; }
	}

	public final EventHandlerHeaderContext eventHandlerHeader() throws RecognitionException {
		EventHandlerHeaderContext _localctx = new EventHandlerHeaderContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_eventHandlerHeader);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(324);
			match(EventIdentifier);
			setState(326);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(325);
				arguments();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EventHandlerBodyContext extends ParserRuleContext {
		public List<ComponentStatementsContext> componentStatements() {
			return getRuleContexts(ComponentStatementsContext.class);
		}
		public ComponentStatementsContext componentStatements(int i) {
			return getRuleContext(ComponentStatementsContext.class,i);
		}
		public List<AtRuleContext> atRule() {
			return getRuleContexts(AtRuleContext.class);
		}
		public AtRuleContext atRule(int i) {
			return getRuleContext(AtRuleContext.class,i);
		}
		public EventHandlerBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eventHandlerBody; }
	}

	public final EventHandlerBodyContext eventHandlerBody() throws RecognitionException {
		EventHandlerBodyContext _localctx = new EventHandlerBodyContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_eventHandlerBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(332);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__14) | (1L << AtRuleIdentifier) | (1L << Identifier))) != 0)) {
				{
				setState(330);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(328);
					componentStatements();
					}
					break;
				case T__14:
				case AtRuleIdentifier:
					{
					setState(329);
					atRule();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(334);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(ecssParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(ecssParser.RPAREN, 0); }
		public List<ArgumentContext> argument() {
			return getRuleContexts(ArgumentContext.class);
		}
		public ArgumentContext argument(int i) {
			return getRuleContext(ArgumentContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ecssParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ecssParser.COMMA, i);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			match(LPAREN);
			{
			setState(336);
			argument();
			setState(341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(337);
				match(COMMA);
				setState(338);
				argument();
				}
				}
				setState(343);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(344);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argument; }
	}

	public final ArgumentContext argument() throws RecognitionException {
		ArgumentContext _localctx = new ArgumentContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_argument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(346);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AtRuleHeaderContext extends ParserRuleContext {
		public TerminalNode AtRuleIdentifier() { return getToken(ecssParser.AtRuleIdentifier, 0); }
		public AtRuleHeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atRuleHeader; }
	}

	public final AtRuleHeaderContext atRuleHeader() throws RecognitionException {
		AtRuleHeaderContext _localctx = new AtRuleHeaderContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_atRuleHeader);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(348);
			match(AtRuleIdentifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AtRuleContext extends ParserRuleContext {
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public AtRuleHeaderContext atRuleHeader() {
			return getRuleContext(AtRuleHeaderContext.class,0);
		}
		public TerminalNode LCURLY() { return getToken(ecssParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(ecssParser.RCURLY, 0); }
		public AtRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atRule; }
	}

	public final AtRuleContext atRule() throws RecognitionException {
		AtRuleContext _localctx = new AtRuleContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_atRule);
		try {
			setState(355);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__14:
				enterOuterAlt(_localctx, 1);
				{
				setState(350);
				query();
				}
				break;
			case AtRuleIdentifier:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(351);
				atRuleHeader();
				setState(352);
				match(LCURLY);
				setState(353);
				match(RCURLY);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableAssignmentContext extends ParserRuleContext {
		public List<TerminalNode> Identifier() { return getTokens(ecssParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(ecssParser.Identifier, i);
		}
		public TerminalNode ASSIGN() { return getToken(ecssParser.ASSIGN, 0); }
		public VariableAssignmentValueContext variableAssignmentValue() {
			return getRuleContext(VariableAssignmentValueContext.class,0);
		}
		public TerminalNode DOT() { return getToken(ecssParser.DOT, 0); }
		public VariableAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableAssignment; }
	}

	public final VariableAssignmentContext variableAssignment() throws RecognitionException {
		VariableAssignmentContext _localctx = new VariableAssignmentContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_variableAssignment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(357);
			match(Identifier);
			setState(360);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOT) {
				{
				setState(358);
				match(DOT);
				setState(359);
				match(Identifier);
				}
			}

			setState(362);
			match(ASSIGN);
			setState(363);
			variableAssignmentValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableAssignmentValueContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(ecssParser.NUMBER, 0); }
		public TerminalNode Identifier() { return getToken(ecssParser.Identifier, 0); }
		public VariableAssignmentContext variableAssignment() {
			return getRuleContext(VariableAssignmentContext.class,0);
		}
		public VariableAssignmentValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableAssignmentValue; }
	}

	public final VariableAssignmentValueContext variableAssignmentValue() throws RecognitionException {
		VariableAssignmentValueContext _localctx = new VariableAssignmentValueContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_variableAssignmentValue);
		try {
			setState(368);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(365);
				match(NUMBER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(366);
				match(Identifier);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(367);
				variableAssignment();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefineContext extends ParserRuleContext {
		public DefineHeaderContext defineHeader() {
			return getRuleContext(DefineHeaderContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ecssParser.SEMI, 0); }
		public TerminalNode LCURLY() { return getToken(ecssParser.LCURLY, 0); }
		public DefineDeclarationsContext defineDeclarations() {
			return getRuleContext(DefineDeclarationsContext.class,0);
		}
		public TerminalNode RCURLY() { return getToken(ecssParser.RCURLY, 0); }
		public DefineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_define; }
	}

	public final DefineContext define() throws RecognitionException {
		DefineContext _localctx = new DefineContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_define);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(370);
			defineHeader();
			setState(376);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LCURLY:
				{
				{
				setState(371);
				match(LCURLY);
				setState(372);
				defineDeclarations();
				setState(373);
				match(RCURLY);
				}
				}
				break;
			case SEMI:
				{
				setState(375);
				match(SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefineHeaderContext extends ParserRuleContext {
		public TerminalNode LBRACKET() { return getToken(ecssParser.LBRACKET, 0); }
		public ComponentIdContext componentId() {
			return getRuleContext(ComponentIdContext.class,0);
		}
		public TerminalNode RBRACKET() { return getToken(ecssParser.RBRACKET, 0); }
		public DefineHeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defineHeader; }
	}

	public final DefineHeaderContext defineHeader() throws RecognitionException {
		DefineHeaderContext _localctx = new DefineHeaderContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_defineHeader);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(378);
			match(T__13);
			setState(379);
			match(LBRACKET);
			setState(380);
			componentId();
			setState(381);
			match(RBRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryContext extends ParserRuleContext {
		public QueryHeaderContext queryHeader() {
			return getRuleContext(QueryHeaderContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ecssParser.SEMI, 0); }
		public TerminalNode LCURLY() { return getToken(ecssParser.LCURLY, 0); }
		public TerminalNode RCURLY() { return getToken(ecssParser.RCURLY, 0); }
		public List<ComponentStatementsContext> componentStatements() {
			return getRuleContexts(ComponentStatementsContext.class);
		}
		public ComponentStatementsContext componentStatements(int i) {
			return getRuleContext(ComponentStatementsContext.class,i);
		}
		public List<AtRuleContext> atRule() {
			return getRuleContexts(AtRuleContext.class);
		}
		public AtRuleContext atRule(int i) {
			return getRuleContext(AtRuleContext.class,i);
		}
		public List<EventHandlerContext> eventHandler() {
			return getRuleContexts(EventHandlerContext.class);
		}
		public EventHandlerContext eventHandler(int i) {
			return getRuleContext(EventHandlerContext.class,i);
		}
		public QueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_query; }
	}

	public final QueryContext query() throws RecognitionException {
		QueryContext _localctx = new QueryContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_query);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(383);
			queryHeader();
			setState(395);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LCURLY:
				{
				{
				setState(384);
				match(LCURLY);
				setState(390);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__14) | (1L << EventIdentifier) | (1L << AtRuleIdentifier) | (1L << Identifier))) != 0)) {
					{
					setState(388);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case Identifier:
						{
						setState(385);
						componentStatements();
						}
						break;
					case T__14:
					case AtRuleIdentifier:
						{
						setState(386);
						atRule();
						}
						break;
					case EventIdentifier:
						{
						setState(387);
						eventHandler();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(392);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(393);
				match(RCURLY);
				}
				}
				break;
			case SEMI:
				{
				setState(394);
				match(SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryHeaderContext extends ParserRuleContext {
		public QueryExpressionContext queryExpression() {
			return getRuleContext(QueryExpressionContext.class,0);
		}
		public QueryHeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryHeader; }
	}

	public final QueryHeaderContext queryHeader() throws RecognitionException {
		QueryHeaderContext _localctx = new QueryHeaderContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_queryHeader);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(397);
			match(T__14);
			setState(398);
			queryExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentPropertyIdContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(ecssParser.Identifier, 0); }
		public ComponentPropertyIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentPropertyId; }
	}

	public final ComponentPropertyIdContext componentPropertyId() throws RecognitionException {
		ComponentPropertyIdContext _localctx = new ComponentPropertyIdContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_componentPropertyId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(400);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(402);
			_la = _input.LA(1);
			if ( !(_la==T__15 || _la==T__16) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefineDeclarationsContext extends ParserRuleContext {
		public List<DefineDeclarationContext> defineDeclaration() {
			return getRuleContexts(DefineDeclarationContext.class);
		}
		public DefineDeclarationContext defineDeclaration(int i) {
			return getRuleContext(DefineDeclarationContext.class,i);
		}
		public DefineDeclarationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defineDeclarations; }
	}

	public final DefineDeclarationsContext defineDeclarations() throws RecognitionException {
		DefineDeclarationsContext _localctx = new DefineDeclarationsContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_defineDeclarations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(405); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(404);
				defineDeclaration();
				}
				}
				setState(407); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Identifier );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefineDeclarationContext extends ParserRuleContext {
		public ComponentPropertyIdContext componentPropertyId() {
			return getRuleContext(ComponentPropertyIdContext.class,0);
		}
		public TerminalNode COLON() { return getToken(ecssParser.COLON, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ecssParser.SEMI, 0); }
		public DefineDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defineDeclaration; }
	}

	public final DefineDeclarationContext defineDeclaration() throws RecognitionException {
		DefineDeclarationContext _localctx = new DefineDeclarationContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_defineDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(409);
			componentPropertyId();
			setState(410);
			match(COLON);
			setState(411);
			type();
			setState(412);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\38\u01a1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\3\2\6\2j\n\2\r\2\16\2k\5\2n\n\2\3\2\6\2q\n\2\r\2\16\2r\3\3\3\3\3\3"+
		"\3\4\3\4\3\5\3\5\3\5\3\5\5\5~\n\5\3\5\3\5\3\6\3\6\3\7\5\7\u0085\n\7\3"+
		"\7\3\7\3\7\3\7\3\7\7\7\u008c\n\7\f\7\16\7\u008f\13\7\3\b\3\b\5\b\u0093"+
		"\n\b\3\b\3\b\3\b\5\b\u0098\n\b\7\b\u009a\n\b\f\b\16\b\u009d\13\b\3\t\6"+
		"\t\u00a0\n\t\r\t\16\t\u00a1\3\n\3\n\5\n\u00a6\n\n\3\13\3\13\3\f\3\f\3"+
		"\r\3\r\3\r\3\r\3\16\3\16\3\16\7\16\u00b3\n\16\f\16\16\16\u00b6\13\16\3"+
		"\17\3\17\3\17\3\17\3\20\3\20\3\21\3\21\3\21\5\21\u00c1\n\21\3\22\3\22"+
		"\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3\24\7\24\u00cd\n\24\f\24\16\24\u00d0"+
		"\13\24\3\24\3\24\3\25\6\25\u00d5\n\25\r\25\16\25\u00d6\3\26\3\26\3\26"+
		"\3\26\5\26\u00dd\n\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\30\3\30\3\31"+
		"\3\31\3\31\3\31\3\31\5\31\u00ed\n\31\5\31\u00ef\n\31\3\31\3\31\3\31\3"+
		"\31\3\31\3\31\5\31\u00f7\n\31\5\31\u00f9\n\31\7\31\u00fb\n\31\f\31\16"+
		"\31\u00fe\13\31\3\32\3\32\3\33\3\33\3\34\3\34\3\34\3\34\7\34\u0108\n\34"+
		"\f\34\16\34\u010b\13\34\3\35\3\35\3\35\3\35\7\35\u0111\n\35\f\35\16\35"+
		"\u0114\13\35\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\5"+
		"\36\u0121\n\36\3\37\3\37\3\37\5\37\u0126\n\37\3 \3 \3!\3!\3!\3!\3!\3!"+
		"\3!\3!\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3#\3#\3#\3#\5#\u0140\n"+
		"#\3$\3$\3$\3$\3$\3%\3%\5%\u0149\n%\3&\3&\7&\u014d\n&\f&\16&\u0150\13&"+
		"\3\'\3\'\3\'\3\'\7\'\u0156\n\'\f\'\16\'\u0159\13\'\3\'\3\'\3(\3(\3)\3"+
		")\3*\3*\3*\3*\3*\5*\u0166\n*\3+\3+\3+\5+\u016b\n+\3+\3+\3+\3,\3,\3,\5"+
		",\u0173\n,\3-\3-\3-\3-\3-\3-\5-\u017b\n-\3.\3.\3.\3.\3.\3/\3/\3/\3/\3"+
		"/\7/\u0187\n/\f/\16/\u018a\13/\3/\3/\5/\u018e\n/\3\60\3\60\3\60\3\61\3"+
		"\61\3\62\3\62\3\63\6\63\u0198\n\63\r\63\16\63\u0199\3\64\3\64\3\64\3\64"+
		"\3\64\3\64\2\2\65\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62"+
		"\64\668:<>@BDFHJLNPRTVXZ\\^`bdf\2\7\3\2&*\3\2\6\f\3\2\"#\4\2\r\r$%\3\2"+
		"\22\23\2\u01a5\2m\3\2\2\2\4t\3\2\2\2\6w\3\2\2\2\by\3\2\2\2\n\u0081\3\2"+
		"\2\2\f\u0084\3\2\2\2\16\u0092\3\2\2\2\20\u009f\3\2\2\2\22\u00a5\3\2\2"+
		"\2\24\u00a7\3\2\2\2\26\u00a9\3\2\2\2\30\u00ab\3\2\2\2\32\u00af\3\2\2\2"+
		"\34\u00b7\3\2\2\2\36\u00bb\3\2\2\2 \u00c0\3\2\2\2\"\u00c2\3\2\2\2$\u00c5"+
		"\3\2\2\2&\u00c8\3\2\2\2(\u00d4\3\2\2\2*\u00d8\3\2\2\2,\u00e0\3\2\2\2."+
		"\u00e5\3\2\2\2\60\u00ee\3\2\2\2\62\u00ff\3\2\2\2\64\u0101\3\2\2\2\66\u0103"+
		"\3\2\2\28\u010c\3\2\2\2:\u0120\3\2\2\2<\u0125\3\2\2\2>\u0127\3\2\2\2@"+
		"\u0129\3\2\2\2B\u0131\3\2\2\2D\u013f\3\2\2\2F\u0141\3\2\2\2H\u0146\3\2"+
		"\2\2J\u014e\3\2\2\2L\u0151\3\2\2\2N\u015c\3\2\2\2P\u015e\3\2\2\2R\u0165"+
		"\3\2\2\2T\u0167\3\2\2\2V\u0172\3\2\2\2X\u0174\3\2\2\2Z\u017c\3\2\2\2\\"+
		"\u0181\3\2\2\2^\u018f\3\2\2\2`\u0192\3\2\2\2b\u0194\3\2\2\2d\u0197\3\2"+
		"\2\2f\u019b\3\2\2\2hj\5X-\2ih\3\2\2\2jk\3\2\2\2ki\3\2\2\2kl\3\2\2\2ln"+
		"\3\2\2\2mi\3\2\2\2mn\3\2\2\2np\3\2\2\2oq\5\4\3\2po\3\2\2\2qr\3\2\2\2r"+
		"p\3\2\2\2rs\3\2\2\2s\3\3\2\2\2tu\5\6\4\2uv\5&\24\2v\5\3\2\2\2wx\5\f\7"+
		"\2x\7\3\2\2\2y}\7\32\2\2z~\5\n\6\2{~\5\30\r\2|~\5\34\17\2}z\3\2\2\2}{"+
		"\3\2\2\2}|\3\2\2\2~\177\3\2\2\2\177\u0080\7\33\2\2\u0080\t\3\2\2\2\u0081"+
		"\u0082\7\66\2\2\u0082\13\3\2\2\2\u0083\u0085\5\20\t\2\u0084\u0083\3\2"+
		"\2\2\u0084\u0085\3\2\2\2\u0085\u008d\3\2\2\2\u0086\u0087\5\22\n\2\u0087"+
		"\u0088\7\30\2\2\u0088\u0089\5\16\b\2\u0089\u008a\7\31\2\2\u008a\u008c"+
		"\3\2\2\2\u008b\u0086\3\2\2\2\u008c\u008f\3\2\2\2\u008d\u008b\3\2\2\2\u008d"+
		"\u008e\3\2\2\2\u008e\r\3\2\2\2\u008f\u008d\3\2\2\2\u0090\u0093\5\20\t"+
		"\2\u0091\u0093\5\f\7\2\u0092\u0090\3\2\2\2\u0092\u0091\3\2\2\2\u0093\u009b"+
		"\3\2\2\2\u0094\u0097\7!\2\2\u0095\u0098\5\20\t\2\u0096\u0098\5\f\7\2\u0097"+
		"\u0095\3\2\2\2\u0097\u0096\3\2\2\2\u0098\u009a\3\2\2\2\u0099\u0094\3\2"+
		"\2\2\u009a\u009d\3\2\2\2\u009b\u0099\3\2\2\2\u009b\u009c\3\2\2\2\u009c"+
		"\17\3\2\2\2\u009d\u009b\3\2\2\2\u009e\u00a0\5\b\5\2\u009f\u009e\3\2\2"+
		"\2\u00a0\u00a1\3\2\2\2\u00a1\u009f\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2\21"+
		"\3\2\2\2\u00a3\u00a6\5\24\13\2\u00a4\u00a6\5\26\f\2\u00a5\u00a3\3\2\2"+
		"\2\u00a5\u00a4\3\2\2\2\u00a6\23\3\2\2\2\u00a7\u00a8\7\3\2\2\u00a8\25\3"+
		"\2\2\2\u00a9\u00aa\7\4\2\2\u00aa\27\3\2\2\2\u00ab\u00ac\5\n\6\2\u00ac"+
		"\u00ad\7\5\2\2\u00ad\u00ae\5\n\6\2\u00ae\31\3\2\2\2\u00af\u00b4\5\34\17"+
		"\2\u00b0\u00b1\7!\2\2\u00b1\u00b3\5\34\17\2\u00b2\u00b0\3\2\2\2\u00b3"+
		"\u00b6\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\33\3\2\2"+
		"\2\u00b6\u00b4\3\2\2\2\u00b7\u00b8\5\n\6\2\u00b8\u00b9\5\36\20\2\u00b9"+
		"\u00ba\5 \21\2\u00ba\35\3\2\2\2\u00bb\u00bc\t\2\2\2\u00bc\37\3\2\2\2\u00bd"+
		"\u00c1\7\24\2\2\u00be\u00c1\7\66\2\2\u00bf\u00c1\5$\23\2\u00c0\u00bd\3"+
		"\2\2\2\u00c0\u00be\3\2\2\2\u00c0\u00bf\3\2\2\2\u00c1!\3\2\2\2\u00c2\u00c3"+
		"\7-\2\2\u00c3\u00c4\7\66\2\2\u00c4#\3\2\2\2\u00c5\u00c6\7,\2\2\u00c6\u00c7"+
		"\7\66\2\2\u00c7%\3\2\2\2\u00c8\u00ce\7\34\2\2\u00c9\u00cd\5(\25\2\u00ca"+
		"\u00cd\5R*\2\u00cb\u00cd\5F$\2\u00cc\u00c9\3\2\2\2\u00cc\u00ca\3\2\2\2"+
		"\u00cc\u00cb\3\2\2\2\u00cd\u00d0\3\2\2\2\u00ce\u00cc\3\2\2\2\u00ce\u00cf"+
		"\3\2\2\2\u00cf\u00d1\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d1\u00d2\7\35\2\2"+
		"\u00d2\'\3\2\2\2\u00d3\u00d5\5*\26\2\u00d4\u00d3\3\2\2\2\u00d5\u00d6\3"+
		"\2\2\2\u00d6\u00d4\3\2\2\2\u00d6\u00d7\3\2\2\2\u00d7)\3\2\2\2\u00d8\u00d9"+
		"\5\n\6\2\u00d9\u00dc\7\36\2\2\u00da\u00dd\5\66\34\2\u00db\u00dd\5,\27"+
		"\2\u00dc\u00da\3\2\2\2\u00dc\u00db\3\2\2\2\u00dd\u00de\3\2\2\2\u00de\u00df"+
		"\7\37\2\2\u00df+\3\2\2\2\u00e0\u00e1\5.\30\2\u00e1\u00e2\7\30\2\2\u00e2"+
		"\u00e3\5\60\31\2\u00e3\u00e4\7\31\2\2\u00e4-\3\2\2\2\u00e5\u00e6\t\3\2"+
		"\2\u00e6/\3\2\2\2\u00e7\u00ef\5\66\34\2\u00e8\u00ef\5,\27\2\u00e9\u00ed"+
		"\5$\23\2\u00ea\u00ed\5<\37\2\u00eb\u00ed\5> \2\u00ec\u00e9\3\2\2\2\u00ec"+
		"\u00ea\3\2\2\2\u00ec\u00eb\3\2\2\2\u00ed\u00ef\3\2\2\2\u00ee\u00e7\3\2"+
		"\2\2\u00ee\u00e8\3\2\2\2\u00ee\u00ec\3\2\2\2\u00ef\u00fc\3\2\2\2\u00f0"+
		"\u00f8\7!\2\2\u00f1\u00f9\5\66\34\2\u00f2\u00f9\5,\27\2\u00f3\u00f7\5"+
		"$\23\2\u00f4\u00f7\5<\37\2\u00f5\u00f7\5> \2\u00f6\u00f3\3\2\2\2\u00f6"+
		"\u00f4\3\2\2\2\u00f6\u00f5\3\2\2\2\u00f7\u00f9\3\2\2\2\u00f8\u00f1\3\2"+
		"\2\2\u00f8\u00f2\3\2\2\2\u00f8\u00f6\3\2\2\2\u00f9\u00fb\3\2\2\2\u00fa"+
		"\u00f0\3\2\2\2\u00fb\u00fe\3\2\2\2\u00fc\u00fa\3\2\2\2\u00fc\u00fd\3\2"+
		"\2\2\u00fd\61\3\2\2\2\u00fe\u00fc\3\2\2\2\u00ff\u0100\t\4\2\2\u0100\63"+
		"\3\2\2\2\u0101\u0102\t\5\2\2\u0102\65\3\2\2\2\u0103\u0109\58\35\2\u0104"+
		"\u0105\5\62\32\2\u0105\u0106\58\35\2\u0106\u0108\3\2\2\2\u0107\u0104\3"+
		"\2\2\2\u0108\u010b\3\2\2\2\u0109\u0107\3\2\2\2\u0109\u010a\3\2\2\2\u010a"+
		"\67\3\2\2\2\u010b\u0109\3\2\2\2\u010c\u0112\5:\36\2\u010d\u010e\5\64\33"+
		"\2\u010e\u010f\5:\36\2\u010f\u0111\3\2\2\2\u0110\u010d\3\2\2\2\u0111\u0114"+
		"\3\2\2\2\u0112\u0110\3\2\2\2\u0112\u0113\3\2\2\2\u01139\3\2\2\2\u0114"+
		"\u0112\3\2\2\2\u0115\u0121\5,\27\2\u0116\u0121\5\"\22\2\u0117\u0121\5"+
		"$\23\2\u0118\u0121\7\27\2\2\u0119\u0121\5<\37\2\u011a\u0121\5@!\2\u011b"+
		"\u0121\5B\"\2\u011c\u011d\7\30\2\2\u011d\u011e\5\66\34\2\u011e\u011f\7"+
		"\31\2\2\u011f\u0121\3\2\2\2\u0120\u0115\3\2\2\2\u0120\u0116\3\2\2\2\u0120"+
		"\u0117\3\2\2\2\u0120\u0118\3\2\2\2\u0120\u0119\3\2\2\2\u0120\u011a\3\2"+
		"\2\2\u0120\u011b\3\2\2\2\u0120\u011c\3\2\2\2\u0121;\3\2\2\2\u0122\u0126"+
		"\7\24\2\2\u0123\u0126\5D#\2\u0124\u0126\5> \2\u0125\u0122\3\2\2\2\u0125"+
		"\u0123\3\2\2\2\u0125\u0124\3\2\2\2\u0126=\3\2\2\2\u0127\u0128\7\60\2\2"+
		"\u0128?\3\2\2\2\u0129\u012a\7\16\2\2\u012a\u012b\5\66\34\2\u012b\u012c"+
		"\7!\2\2\u012c\u012d\5\66\34\2\u012d\u012e\7!\2\2\u012e\u012f\5\66\34\2"+
		"\u012f\u0130\7\31\2\2\u0130A\3\2\2\2\u0131\u0132\7\17\2\2\u0132\u0133"+
		"\5\66\34\2\u0133\u0134\7!\2\2\u0134\u0135\5\66\34\2\u0135\u0136\7!\2\2"+
		"\u0136\u0137\5\66\34\2\u0137\u0138\7!\2\2\u0138\u0139\5\66\34\2\u0139"+
		"\u013a\7\31\2\2\u013aC\3\2\2\2\u013b\u0140\7\25\2\2\u013c\u0140\7\26\2"+
		"\2\u013d\u013e\7+\2\2\u013e\u0140\5D#\2\u013f\u013b\3\2\2\2\u013f\u013c"+
		"\3\2\2\2\u013f\u013d\3\2\2\2\u0140E\3\2\2\2\u0141\u0142\5H%\2\u0142\u0143"+
		"\7\34\2\2\u0143\u0144\5J&\2\u0144\u0145\7\35\2\2\u0145G\3\2\2\2\u0146"+
		"\u0148\7\64\2\2\u0147\u0149\5L\'\2\u0148\u0147\3\2\2\2\u0148\u0149\3\2"+
		"\2\2\u0149I\3\2\2\2\u014a\u014d\5(\25\2\u014b\u014d\5R*\2\u014c\u014a"+
		"\3\2\2\2\u014c\u014b\3\2\2\2\u014d\u0150\3\2\2\2\u014e\u014c\3\2\2\2\u014e"+
		"\u014f\3\2\2\2\u014fK\3\2\2\2\u0150\u014e\3\2\2\2\u0151\u0152\7\30\2\2"+
		"\u0152\u0157\5N(\2\u0153\u0154\7!\2\2\u0154\u0156\5N(\2\u0155\u0153\3"+
		"\2\2\2\u0156\u0159\3\2\2\2\u0157\u0155\3\2\2\2\u0157\u0158\3\2\2\2\u0158"+
		"\u015a\3\2\2\2\u0159\u0157\3\2\2\2\u015a\u015b\7\31\2\2\u015bM\3\2\2\2"+
		"\u015c\u015d\5\66\34\2\u015dO\3\2\2\2\u015e\u015f\7\65\2\2\u015fQ\3\2"+
		"\2\2\u0160\u0166\5\\/\2\u0161\u0162\5P)\2\u0162\u0163\7\34\2\2\u0163\u0164"+
		"\7\35\2\2\u0164\u0166\3\2\2\2\u0165\u0160\3\2\2\2\u0165\u0161\3\2\2\2"+
		"\u0166S\3\2\2\2\u0167\u016a\7\66\2\2\u0168\u0169\7 \2\2\u0169\u016b\7"+
		"\66\2\2\u016a\u0168\3\2\2\2\u016a\u016b\3\2\2\2\u016b\u016c\3\2\2\2\u016c"+
		"\u016d\7&\2\2\u016d\u016e\5V,\2\u016eU\3\2\2\2\u016f\u0173\7\24\2\2\u0170"+
		"\u0173\7\66\2\2\u0171\u0173\5T+\2\u0172\u016f\3\2\2\2\u0172\u0170\3\2"+
		"\2\2\u0172\u0171\3\2\2\2\u0173W\3\2\2\2\u0174\u017a\5Z.\2\u0175\u0176"+
		"\7\34\2\2\u0176\u0177\5d\63\2\u0177\u0178\7\35\2\2\u0178\u017b\3\2\2\2"+
		"\u0179\u017b\7\37\2\2\u017a\u0175\3\2\2\2\u017a\u0179\3\2\2\2\u017bY\3"+
		"\2\2\2\u017c\u017d\7\20\2\2\u017d\u017e\7\32\2\2\u017e\u017f\5\n\6\2\u017f"+
		"\u0180\7\33\2\2\u0180[\3\2\2\2\u0181\u018d\5^\60\2\u0182\u0188\7\34\2"+
		"\2\u0183\u0187\5(\25\2\u0184\u0187\5R*\2\u0185\u0187\5F$\2\u0186\u0183"+
		"\3\2\2\2\u0186\u0184\3\2\2\2\u0186\u0185\3\2\2\2\u0187\u018a\3\2\2\2\u0188"+
		"\u0186\3\2\2\2\u0188\u0189\3\2\2\2\u0189\u018b\3\2\2\2\u018a\u0188\3\2"+
		"\2\2\u018b\u018e\7\35\2\2\u018c\u018e\7\37\2\2\u018d\u0182\3\2\2\2\u018d"+
		"\u018c\3\2\2\2\u018e]\3\2\2\2\u018f\u0190\7\21\2\2\u0190\u0191\5\f\7\2"+
		"\u0191_\3\2\2\2\u0192\u0193\7\66\2\2\u0193a\3\2\2\2\u0194\u0195\t\6\2"+
		"\2\u0195c\3\2\2\2\u0196\u0198\5f\64\2\u0197\u0196\3\2\2\2\u0198\u0199"+
		"\3\2\2\2\u0199\u0197\3\2\2\2\u0199\u019a\3\2\2\2\u019ae\3\2\2\2\u019b"+
		"\u019c\5`\61\2\u019c\u019d\7\36\2\2\u019d\u019e\5b\62\2\u019e\u019f\7"+
		"\37\2\2\u019fg\3\2\2\2)kmr}\u0084\u008d\u0092\u0097\u009b\u00a1\u00a5"+
		"\u00b4\u00c0\u00cc\u00ce\u00d6\u00dc\u00ec\u00ee\u00f6\u00f8\u00fc\u0109"+
		"\u0112\u0120\u0125\u013f\u0148\u014c\u014e\u0157\u0165\u016a\u0172\u017a"+
		"\u0186\u0188\u018d\u0199";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}