// Generated from ecss.g4 by ANTLR 4.7.2
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
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, NUMBER=11, TRUE=12, FALSE=13, UNSET=14, LPAREN=15, RPAREN=16, 
		LBRACKET=17, RBRACKET=18, LCURLY=19, RCURLY=20, COLON=21, SEMI=22, DOT=23, 
		COMMA=24, PLUS=25, MINUS=26, MULT=27, DIV=28, ASSIGN=29, EXCLAMATION=30, 
		QUESTION=31, DOLLAR=32, AT=33, QUOTE=34, STRING_LITERAL=35, ESC=36, UNICODE=37, 
		HEX=38, EventIdentifier=39, AtRuleIdentifier=40, Identifier=41, COMMENT=42, 
		WS=43;
	public static final int
		RULE_program = 0, RULE_system = 1, RULE_systemHeader = 2, RULE_componentSelector = 3, 
		RULE_componentId = 4, RULE_queryExpression = 5, RULE_queryOperationParameters = 6, 
		RULE_intersectionQuery = 7, RULE_setoperator = 8, RULE_setOperatorNot = 9, 
		RULE_setOperatorAny = 10, RULE_componentAs = 11, RULE_componentAttributes = 12, 
		RULE_componentAttribute = 13, RULE_componentAttributeValue = 14, RULE_var = 15, 
		RULE_queryvar = 16, RULE_systemBody = 17, RULE_componentStatements = 18, 
		RULE_componentStatement = 19, RULE_function = 20, RULE_functionParameters = 21, 
		RULE_mathoperatoradditions = 22, RULE_mathoperatorfactors = 23, RULE_expression = 24, 
		RULE_term = 25, RULE_factor = 26, RULE_literal = 27, RULE_stringLiteral = 28, 
		RULE_rgb = 29, RULE_rgba = 30, RULE_boolval = 31, RULE_eventHandler = 32, 
		RULE_eventHandlerHeader = 33, RULE_eventHandlerBody = 34, RULE_arguments = 35, 
		RULE_argument = 36, RULE_atRuleHeader = 37, RULE_atRule = 38, RULE_variableAssignment = 39, 
		RULE_variableAssignmentValue = 40, RULE_define = 41, RULE_defineHeader = 42, 
		RULE_query = 43, RULE_queryHeader = 44, RULE_componentPropertyId = 45, 
		RULE_type = 46, RULE_defineDeclarations = 47, RULE_defineDeclaration = 48;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "system", "systemHeader", "componentSelector", "componentId", 
			"queryExpression", "queryOperationParameters", "intersectionQuery", "setoperator", 
			"setOperatorNot", "setOperatorAny", "componentAs", "componentAttributes", 
			"componentAttribute", "componentAttributeValue", "var", "queryvar", "systemBody", 
			"componentStatements", "componentStatement", "function", "functionParameters", 
			"mathoperatoradditions", "mathoperatorfactors", "expression", "term", 
			"factor", "literal", "stringLiteral", "rgb", "rgba", "boolval", "eventHandler", 
			"eventHandlerHeader", "eventHandlerBody", "arguments", "argument", "atRuleHeader", 
			"atRule", "variableAssignment", "variableAssignmentValue", "define", 
			"defineHeader", "query", "queryHeader", "componentPropertyId", "type", 
			"defineDeclarations", "defineDeclaration"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':not'", "':any'", "'as'", "'max'", "'rgb('", "'rgba('", "'@define'", 
			"'@query'", "'boolean'", "'number'", null, "'true'", "'false'", "'unset'", 
			"'('", "')'", "'['", "']'", "'{'", "'}'", "':'", "';'", "'.'", "','", 
			"'+'", "'-'", "'*'", "'/'", "'='", "'!'", "'?'", "'$'", "'@'", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, "NUMBER", 
			"TRUE", "FALSE", "UNSET", "LPAREN", "RPAREN", "LBRACKET", "RBRACKET", 
			"LCURLY", "RCURLY", "COLON", "SEMI", "DOT", "COMMA", "PLUS", "MINUS", 
			"MULT", "DIV", "ASSIGN", "EXCLAMATION", "QUESTION", "DOLLAR", "AT", "QUOTE", 
			"STRING_LITERAL", "ESC", "UNICODE", "HEX", "EventIdentifier", "AtRuleIdentifier", 
			"Identifier", "COMMENT", "WS"
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitProgram(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__6) {
				{
				setState(99); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(98);
					define();
					}
					}
					setState(101); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__6 );
				}
			}

			setState(106); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(105);
				system();
				}
				}
				setState(108); 
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterSystem(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitSystem(this);
		}
	}

	public final SystemContext system() throws RecognitionException {
		SystemContext _localctx = new SystemContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_system);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			systemHeader();
			setState(111);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterSystemHeader(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitSystemHeader(this);
		}
	}

	public final SystemHeaderContext systemHeader() throws RecognitionException {
		SystemHeaderContext _localctx = new SystemHeaderContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_systemHeader);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(113);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterComponentSelector(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitComponentSelector(this);
		}
	}

	public final ComponentSelectorContext componentSelector() throws RecognitionException {
		ComponentSelectorContext _localctx = new ComponentSelectorContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_componentSelector);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			match(LBRACKET);
			setState(119);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(116);
				componentId();
				}
				break;
			case 2:
				{
				setState(117);
				componentAs();
				}
				break;
			case 3:
				{
				setState(118);
				componentAttribute();
				}
				break;
			}
			setState(121);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterComponentId(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitComponentId(this);
		}
	}

	public final ComponentIdContext componentId() throws RecognitionException {
		ComponentIdContext _localctx = new ComponentIdContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_componentId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterQueryExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitQueryExpression(this);
		}
	}

	public final QueryExpressionContext queryExpression() throws RecognitionException {
		QueryExpressionContext _localctx = new QueryExpressionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_queryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACKET) {
				{
				setState(125);
				intersectionQuery();
				}
			}

			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0 || _la==T__1) {
				{
				{
				setState(128);
				setoperator();
				setState(129);
				match(LPAREN);
				setState(130);
				queryOperationParameters();
				setState(131);
				match(RPAREN);
				}
				}
				setState(137);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterQueryOperationParameters(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitQueryOperationParameters(this);
		}
	}

	public final QueryOperationParametersContext queryOperationParameters() throws RecognitionException {
		QueryOperationParametersContext _localctx = new QueryOperationParametersContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_queryOperationParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(138);
				intersectionQuery();
				}
				break;
			case 2:
				{
				setState(139);
				queryExpression();
				}
				break;
			}
			setState(149);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(142);
				match(COMMA);
				setState(145);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
				case 1:
					{
					setState(143);
					intersectionQuery();
					}
					break;
				case 2:
					{
					setState(144);
					queryExpression();
					}
					break;
				}
				}
				}
				setState(151);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterIntersectionQuery(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitIntersectionQuery(this);
		}
	}

	public final IntersectionQueryContext intersectionQuery() throws RecognitionException {
		IntersectionQueryContext _localctx = new IntersectionQueryContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_intersectionQuery);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(152);
				componentSelector();
				}
				}
				setState(155); 
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterSetoperator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitSetoperator(this);
		}
	}

	public final SetoperatorContext setoperator() throws RecognitionException {
		SetoperatorContext _localctx = new SetoperatorContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_setoperator);
		try {
			setState(159);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(157);
				setOperatorNot();
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 2);
				{
				setState(158);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterSetOperatorNot(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitSetOperatorNot(this);
		}
	}

	public final SetOperatorNotContext setOperatorNot() throws RecognitionException {
		SetOperatorNotContext _localctx = new SetOperatorNotContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_setOperatorNot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterSetOperatorAny(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitSetOperatorAny(this);
		}
	}

	public final SetOperatorAnyContext setOperatorAny() throws RecognitionException {
		SetOperatorAnyContext _localctx = new SetOperatorAnyContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_setOperatorAny);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterComponentAs(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitComponentAs(this);
		}
	}

	public final ComponentAsContext componentAs() throws RecognitionException {
		ComponentAsContext _localctx = new ComponentAsContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_componentAs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(165);
			componentId();
			setState(166);
			match(T__2);
			setState(167);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterComponentAttributes(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitComponentAttributes(this);
		}
	}

	public final ComponentAttributesContext componentAttributes() throws RecognitionException {
		ComponentAttributesContext _localctx = new ComponentAttributesContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_componentAttributes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(169);
			componentAttribute();
			setState(174);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(170);
				match(COMMA);
				setState(171);
				componentAttribute();
				}
				}
				setState(176);
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
		public TerminalNode ASSIGN() { return getToken(ecssParser.ASSIGN, 0); }
		public ComponentAttributeValueContext componentAttributeValue() {
			return getRuleContext(ComponentAttributeValueContext.class,0);
		}
		public ComponentAttributeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentAttribute; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterComponentAttribute(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitComponentAttribute(this);
		}
	}

	public final ComponentAttributeContext componentAttribute() throws RecognitionException {
		ComponentAttributeContext _localctx = new ComponentAttributeContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_componentAttribute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
			componentId();
			setState(178);
			match(ASSIGN);
			setState(179);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterComponentAttributeValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitComponentAttributeValue(this);
		}
	}

	public final ComponentAttributeValueContext componentAttributeValue() throws RecognitionException {
		ComponentAttributeValueContext _localctx = new ComponentAttributeValueContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_componentAttributeValue);
		try {
			setState(184);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(181);
				match(NUMBER);
				}
				break;
			case Identifier:
				enterOuterAlt(_localctx, 2);
				{
				setState(182);
				match(Identifier);
				}
				break;
			case QUESTION:
				enterOuterAlt(_localctx, 3);
				{
				setState(183);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterVar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitVar(this);
		}
	}

	public final VarContext var() throws RecognitionException {
		VarContext _localctx = new VarContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_var);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(186);
			match(DOLLAR);
			setState(187);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterQueryvar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitQueryvar(this);
		}
	}

	public final QueryvarContext queryvar() throws RecognitionException {
		QueryvarContext _localctx = new QueryvarContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_queryvar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(189);
			match(QUESTION);
			setState(190);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterSystemBody(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitSystemBody(this);
		}
	}

	public final SystemBodyContext systemBody() throws RecognitionException {
		SystemBodyContext _localctx = new SystemBodyContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_systemBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			match(LCURLY);
			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__7) | (1L << EventIdentifier) | (1L << AtRuleIdentifier) | (1L << Identifier))) != 0)) {
				{
				setState(196);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(193);
					componentStatements();
					}
					break;
				case T__7:
				case AtRuleIdentifier:
					{
					setState(194);
					atRule();
					}
					break;
				case EventIdentifier:
					{
					setState(195);
					eventHandler();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(200);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(201);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterComponentStatements(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitComponentStatements(this);
		}
	}

	public final ComponentStatementsContext componentStatements() throws RecognitionException {
		ComponentStatementsContext _localctx = new ComponentStatementsContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_componentStatements);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(204); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(203);
					componentStatement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(206); 
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
		public FunctionContext function() {
			return getRuleContext(FunctionContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ComponentStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterComponentStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitComponentStatement(this);
		}
	}

	public final ComponentStatementContext componentStatement() throws RecognitionException {
		ComponentStatementContext _localctx = new ComponentStatementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_componentStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			componentId();
			setState(209);
			match(COLON);
			setState(212);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				{
				setState(210);
				function();
				}
				break;
			case T__4:
			case T__5:
			case NUMBER:
			case TRUE:
			case FALSE:
			case UNSET:
			case LPAREN:
			case EXCLAMATION:
			case QUESTION:
			case DOLLAR:
			case STRING_LITERAL:
				{
				setState(211);
				expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(214);
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
		public TerminalNode LPAREN() { return getToken(ecssParser.LPAREN, 0); }
		public FunctionParametersContext functionParameters() {
			return getRuleContext(FunctionParametersContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ecssParser.RPAREN, 0); }
		public FunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterFunction(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitFunction(this);
		}
	}

	public final FunctionContext function() throws RecognitionException {
		FunctionContext _localctx = new FunctionContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			match(T__3);
			setState(217);
			match(LPAREN);
			setState(218);
			functionParameters();
			setState(219);
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

	public static class FunctionParametersContext extends ParserRuleContext {
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterFunctionParameters(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitFunctionParameters(this);
		}
	}

	public final FunctionParametersContext functionParameters() throws RecognitionException {
		FunctionParametersContext _localctx = new FunctionParametersContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_functionParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				{
				setState(221);
				expression();
				}
				break;
			case 2:
				{
				setState(225);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
				case 1:
					{
					setState(222);
					queryvar();
					}
					break;
				case 2:
					{
					setState(223);
					literal();
					}
					break;
				case 3:
					{
					setState(224);
					stringLiteral();
					}
					break;
				}
				}
				break;
			}
			setState(240);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(229);
				match(COMMA);
				setState(236);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
				case 1:
					{
					setState(230);
					expression();
					}
					break;
				case 2:
					{
					setState(234);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
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
				}
				}
				setState(242);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterMathoperatoradditions(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitMathoperatoradditions(this);
		}
	}

	public final MathoperatoradditionsContext mathoperatoradditions() throws RecognitionException {
		MathoperatoradditionsContext _localctx = new MathoperatoradditionsContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_mathoperatoradditions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(243);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterMathoperatorfactors(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitMathoperatorfactors(this);
		}
	}

	public final MathoperatorfactorsContext mathoperatorfactors() throws RecognitionException {
		MathoperatorfactorsContext _localctx = new MathoperatorfactorsContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_mathoperatorfactors);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
			_la = _input.LA(1);
			if ( !(_la==MULT || _la==DIV) ) {
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitExpression(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(247);
			term();
			setState(253);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PLUS || _la==MINUS) {
				{
				{
				setState(248);
				mathoperatoradditions();
				setState(249);
				term();
				}
				}
				setState(255);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterTerm(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitTerm(this);
		}
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256);
			factor();
			setState(262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==MULT || _la==DIV) {
				{
				{
				setState(257);
				mathoperatorfactors();
				setState(258);
				factor();
				}
				}
				setState(264);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterFactor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitFactor(this);
		}
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_factor);
		try {
			setState(275);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DOLLAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(265);
				var();
				}
				break;
			case QUESTION:
				enterOuterAlt(_localctx, 2);
				{
				setState(266);
				queryvar();
				}
				break;
			case UNSET:
				enterOuterAlt(_localctx, 3);
				{
				setState(267);
				match(UNSET);
				}
				break;
			case NUMBER:
			case TRUE:
			case FALSE:
			case EXCLAMATION:
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(268);
				literal();
				}
				break;
			case T__4:
				enterOuterAlt(_localctx, 5);
				{
				setState(269);
				rgb();
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 6);
				{
				setState(270);
				rgba();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 7);
				{
				setState(271);
				match(LPAREN);
				setState(272);
				expression();
				setState(273);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitLiteral(this);
		}
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_literal);
		try {
			setState(280);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(277);
				match(NUMBER);
				}
				break;
			case TRUE:
			case FALSE:
			case EXCLAMATION:
				enterOuterAlt(_localctx, 2);
				{
				setState(278);
				boolval();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(279);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterStringLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitStringLiteral(this);
		}
	}

	public final StringLiteralContext stringLiteral() throws RecognitionException {
		StringLiteralContext _localctx = new StringLiteralContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterRgb(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitRgb(this);
		}
	}

	public final RgbContext rgb() throws RecognitionException {
		RgbContext _localctx = new RgbContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_rgb);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(284);
			match(T__4);
			setState(285);
			expression();
			setState(286);
			match(COMMA);
			setState(287);
			expression();
			setState(288);
			match(COMMA);
			setState(289);
			expression();
			setState(290);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterRgba(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitRgba(this);
		}
	}

	public final RgbaContext rgba() throws RecognitionException {
		RgbaContext _localctx = new RgbaContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_rgba);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(292);
			match(T__5);
			setState(293);
			expression();
			setState(294);
			match(COMMA);
			setState(295);
			expression();
			setState(296);
			match(COMMA);
			setState(297);
			expression();
			setState(298);
			match(COMMA);
			setState(299);
			expression();
			setState(300);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterBoolval(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitBoolval(this);
		}
	}

	public final BoolvalContext boolval() throws RecognitionException {
		BoolvalContext _localctx = new BoolvalContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_boolval);
		try {
			setState(306);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TRUE:
				enterOuterAlt(_localctx, 1);
				{
				setState(302);
				match(TRUE);
				}
				break;
			case FALSE:
				enterOuterAlt(_localctx, 2);
				{
				setState(303);
				match(FALSE);
				}
				break;
			case EXCLAMATION:
				enterOuterAlt(_localctx, 3);
				{
				setState(304);
				match(EXCLAMATION);
				setState(305);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterEventHandler(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitEventHandler(this);
		}
	}

	public final EventHandlerContext eventHandler() throws RecognitionException {
		EventHandlerContext _localctx = new EventHandlerContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_eventHandler);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(308);
			eventHandlerHeader();
			setState(309);
			match(LCURLY);
			setState(310);
			eventHandlerBody();
			setState(311);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterEventHandlerHeader(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitEventHandlerHeader(this);
		}
	}

	public final EventHandlerHeaderContext eventHandlerHeader() throws RecognitionException {
		EventHandlerHeaderContext _localctx = new EventHandlerHeaderContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_eventHandlerHeader);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(313);
			match(EventIdentifier);
			setState(315);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(314);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterEventHandlerBody(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitEventHandlerBody(this);
		}
	}

	public final EventHandlerBodyContext eventHandlerBody() throws RecognitionException {
		EventHandlerBodyContext _localctx = new EventHandlerBodyContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_eventHandlerBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__7) | (1L << AtRuleIdentifier) | (1L << Identifier))) != 0)) {
				{
				setState(319);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(317);
					componentStatements();
					}
					break;
				case T__7:
				case AtRuleIdentifier:
					{
					setState(318);
					atRule();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(323);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterArguments(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitArguments(this);
		}
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(324);
			match(LPAREN);
			{
			setState(325);
			argument();
			setState(330);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(326);
				match(COMMA);
				setState(327);
				argument();
				}
				}
				setState(332);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(333);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterArgument(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitArgument(this);
		}
	}

	public final ArgumentContext argument() throws RecognitionException {
		ArgumentContext _localctx = new ArgumentContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_argument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterAtRuleHeader(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitAtRuleHeader(this);
		}
	}

	public final AtRuleHeaderContext atRuleHeader() throws RecognitionException {
		AtRuleHeaderContext _localctx = new AtRuleHeaderContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_atRuleHeader);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterAtRule(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitAtRule(this);
		}
	}

	public final AtRuleContext atRule() throws RecognitionException {
		AtRuleContext _localctx = new AtRuleContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_atRule);
		try {
			setState(344);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
				enterOuterAlt(_localctx, 1);
				{
				setState(339);
				query();
				}
				break;
			case AtRuleIdentifier:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(340);
				atRuleHeader();
				setState(341);
				match(LCURLY);
				setState(342);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterVariableAssignment(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitVariableAssignment(this);
		}
	}

	public final VariableAssignmentContext variableAssignment() throws RecognitionException {
		VariableAssignmentContext _localctx = new VariableAssignmentContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_variableAssignment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(346);
			match(Identifier);
			setState(349);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOT) {
				{
				setState(347);
				match(DOT);
				setState(348);
				match(Identifier);
				}
			}

			setState(351);
			match(ASSIGN);
			setState(352);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterVariableAssignmentValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitVariableAssignmentValue(this);
		}
	}

	public final VariableAssignmentValueContext variableAssignmentValue() throws RecognitionException {
		VariableAssignmentValueContext _localctx = new VariableAssignmentValueContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_variableAssignmentValue);
		try {
			setState(357);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(354);
				match(NUMBER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(355);
				match(Identifier);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(356);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterDefine(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitDefine(this);
		}
	}

	public final DefineContext define() throws RecognitionException {
		DefineContext _localctx = new DefineContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_define);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(359);
			defineHeader();
			setState(365);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LCURLY:
				{
				{
				setState(360);
				match(LCURLY);
				setState(361);
				defineDeclarations();
				setState(362);
				match(RCURLY);
				}
				}
				break;
			case SEMI:
				{
				setState(364);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterDefineHeader(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitDefineHeader(this);
		}
	}

	public final DefineHeaderContext defineHeader() throws RecognitionException {
		DefineHeaderContext _localctx = new DefineHeaderContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_defineHeader);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(367);
			match(T__6);
			setState(368);
			match(LBRACKET);
			setState(369);
			componentId();
			setState(370);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterQuery(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitQuery(this);
		}
	}

	public final QueryContext query() throws RecognitionException {
		QueryContext _localctx = new QueryContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_query);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(372);
			queryHeader();
			setState(384);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LCURLY:
				{
				{
				setState(373);
				match(LCURLY);
				setState(379);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__7) | (1L << EventIdentifier) | (1L << AtRuleIdentifier) | (1L << Identifier))) != 0)) {
					{
					setState(377);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case Identifier:
						{
						setState(374);
						componentStatements();
						}
						break;
					case T__7:
					case AtRuleIdentifier:
						{
						setState(375);
						atRule();
						}
						break;
					case EventIdentifier:
						{
						setState(376);
						eventHandler();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(381);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(382);
				match(RCURLY);
				}
				}
				break;
			case SEMI:
				{
				setState(383);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterQueryHeader(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitQueryHeader(this);
		}
	}

	public final QueryHeaderContext queryHeader() throws RecognitionException {
		QueryHeaderContext _localctx = new QueryHeaderContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_queryHeader);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(386);
			match(T__7);
			setState(387);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterComponentPropertyId(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitComponentPropertyId(this);
		}
	}

	public final ComponentPropertyIdContext componentPropertyId() throws RecognitionException {
		ComponentPropertyIdContext _localctx = new ComponentPropertyIdContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_componentPropertyId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(389);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitType(this);
		}
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(391);
			_la = _input.LA(1);
			if ( !(_la==T__8 || _la==T__9) ) {
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterDefineDeclarations(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitDefineDeclarations(this);
		}
	}

	public final DefineDeclarationsContext defineDeclarations() throws RecognitionException {
		DefineDeclarationsContext _localctx = new DefineDeclarationsContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_defineDeclarations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(394); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(393);
				defineDeclaration();
				}
				}
				setState(396); 
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).enterDefineDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ecssListener ) ((ecssListener)listener).exitDefineDeclaration(this);
		}
	}

	public final DefineDeclarationContext defineDeclaration() throws RecognitionException {
		DefineDeclarationContext _localctx = new DefineDeclarationContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_defineDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(398);
			componentPropertyId();
			setState(399);
			match(COLON);
			setState(400);
			type();
			setState(401);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3-\u0196\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\3\2\6\2f\n\2\r\2"+
		"\16\2g\5\2j\n\2\3\2\6\2m\n\2\r\2\16\2n\3\3\3\3\3\3\3\4\3\4\3\5\3\5\3\5"+
		"\3\5\5\5z\n\5\3\5\3\5\3\6\3\6\3\7\5\7\u0081\n\7\3\7\3\7\3\7\3\7\3\7\7"+
		"\7\u0088\n\7\f\7\16\7\u008b\13\7\3\b\3\b\5\b\u008f\n\b\3\b\3\b\3\b\5\b"+
		"\u0094\n\b\7\b\u0096\n\b\f\b\16\b\u0099\13\b\3\t\6\t\u009c\n\t\r\t\16"+
		"\t\u009d\3\n\3\n\5\n\u00a2\n\n\3\13\3\13\3\f\3\f\3\r\3\r\3\r\3\r\3\16"+
		"\3\16\3\16\7\16\u00af\n\16\f\16\16\16\u00b2\13\16\3\17\3\17\3\17\3\17"+
		"\3\20\3\20\3\20\5\20\u00bb\n\20\3\21\3\21\3\21\3\22\3\22\3\22\3\23\3\23"+
		"\3\23\3\23\7\23\u00c7\n\23\f\23\16\23\u00ca\13\23\3\23\3\23\3\24\6\24"+
		"\u00cf\n\24\r\24\16\24\u00d0\3\25\3\25\3\25\3\25\5\25\u00d7\n\25\3\25"+
		"\3\25\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\5\27\u00e4\n\27\5\27"+
		"\u00e6\n\27\3\27\3\27\3\27\3\27\3\27\5\27\u00ed\n\27\5\27\u00ef\n\27\7"+
		"\27\u00f1\n\27\f\27\16\27\u00f4\13\27\3\30\3\30\3\31\3\31\3\32\3\32\3"+
		"\32\3\32\7\32\u00fe\n\32\f\32\16\32\u0101\13\32\3\33\3\33\3\33\3\33\7"+
		"\33\u0107\n\33\f\33\16\33\u010a\13\33\3\34\3\34\3\34\3\34\3\34\3\34\3"+
		"\34\3\34\3\34\3\34\5\34\u0116\n\34\3\35\3\35\3\35\5\35\u011b\n\35\3\36"+
		"\3\36\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3 \3 \3 "+
		"\3 \3 \3!\3!\3!\3!\5!\u0135\n!\3\"\3\"\3\"\3\"\3\"\3#\3#\5#\u013e\n#\3"+
		"$\3$\7$\u0142\n$\f$\16$\u0145\13$\3%\3%\3%\3%\7%\u014b\n%\f%\16%\u014e"+
		"\13%\3%\3%\3&\3&\3\'\3\'\3(\3(\3(\3(\3(\5(\u015b\n(\3)\3)\3)\5)\u0160"+
		"\n)\3)\3)\3)\3*\3*\3*\5*\u0168\n*\3+\3+\3+\3+\3+\3+\5+\u0170\n+\3,\3,"+
		"\3,\3,\3,\3-\3-\3-\3-\3-\7-\u017c\n-\f-\16-\u017f\13-\3-\3-\5-\u0183\n"+
		"-\3.\3.\3.\3/\3/\3\60\3\60\3\61\6\61\u018d\n\61\r\61\16\61\u018e\3\62"+
		"\3\62\3\62\3\62\3\62\3\62\2\2\63\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36"+
		" \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`b\2\5\3\2\33\34\3\2\35\36\3"+
		"\2\13\f\2\u0199\2i\3\2\2\2\4p\3\2\2\2\6s\3\2\2\2\bu\3\2\2\2\n}\3\2\2\2"+
		"\f\u0080\3\2\2\2\16\u008e\3\2\2\2\20\u009b\3\2\2\2\22\u00a1\3\2\2\2\24"+
		"\u00a3\3\2\2\2\26\u00a5\3\2\2\2\30\u00a7\3\2\2\2\32\u00ab\3\2\2\2\34\u00b3"+
		"\3\2\2\2\36\u00ba\3\2\2\2 \u00bc\3\2\2\2\"\u00bf\3\2\2\2$\u00c2\3\2\2"+
		"\2&\u00ce\3\2\2\2(\u00d2\3\2\2\2*\u00da\3\2\2\2,\u00e5\3\2\2\2.\u00f5"+
		"\3\2\2\2\60\u00f7\3\2\2\2\62\u00f9\3\2\2\2\64\u0102\3\2\2\2\66\u0115\3"+
		"\2\2\28\u011a\3\2\2\2:\u011c\3\2\2\2<\u011e\3\2\2\2>\u0126\3\2\2\2@\u0134"+
		"\3\2\2\2B\u0136\3\2\2\2D\u013b\3\2\2\2F\u0143\3\2\2\2H\u0146\3\2\2\2J"+
		"\u0151\3\2\2\2L\u0153\3\2\2\2N\u015a\3\2\2\2P\u015c\3\2\2\2R\u0167\3\2"+
		"\2\2T\u0169\3\2\2\2V\u0171\3\2\2\2X\u0176\3\2\2\2Z\u0184\3\2\2\2\\\u0187"+
		"\3\2\2\2^\u0189\3\2\2\2`\u018c\3\2\2\2b\u0190\3\2\2\2df\5T+\2ed\3\2\2"+
		"\2fg\3\2\2\2ge\3\2\2\2gh\3\2\2\2hj\3\2\2\2ie\3\2\2\2ij\3\2\2\2jl\3\2\2"+
		"\2km\5\4\3\2lk\3\2\2\2mn\3\2\2\2nl\3\2\2\2no\3\2\2\2o\3\3\2\2\2pq\5\6"+
		"\4\2qr\5$\23\2r\5\3\2\2\2st\5\f\7\2t\7\3\2\2\2uy\7\23\2\2vz\5\n\6\2wz"+
		"\5\30\r\2xz\5\34\17\2yv\3\2\2\2yw\3\2\2\2yx\3\2\2\2z{\3\2\2\2{|\7\24\2"+
		"\2|\t\3\2\2\2}~\7+\2\2~\13\3\2\2\2\177\u0081\5\20\t\2\u0080\177\3\2\2"+
		"\2\u0080\u0081\3\2\2\2\u0081\u0089\3\2\2\2\u0082\u0083\5\22\n\2\u0083"+
		"\u0084\7\21\2\2\u0084\u0085\5\16\b\2\u0085\u0086\7\22\2\2\u0086\u0088"+
		"\3\2\2\2\u0087\u0082\3\2\2\2\u0088\u008b\3\2\2\2\u0089\u0087\3\2\2\2\u0089"+
		"\u008a\3\2\2\2\u008a\r\3\2\2\2\u008b\u0089\3\2\2\2\u008c\u008f\5\20\t"+
		"\2\u008d\u008f\5\f\7\2\u008e\u008c\3\2\2\2\u008e\u008d\3\2\2\2\u008f\u0097"+
		"\3\2\2\2\u0090\u0093\7\32\2\2\u0091\u0094\5\20\t\2\u0092\u0094\5\f\7\2"+
		"\u0093\u0091\3\2\2\2\u0093\u0092\3\2\2\2\u0094\u0096\3\2\2\2\u0095\u0090"+
		"\3\2\2\2\u0096\u0099\3\2\2\2\u0097\u0095\3\2\2\2\u0097\u0098\3\2\2\2\u0098"+
		"\17\3\2\2\2\u0099\u0097\3\2\2\2\u009a\u009c\5\b\5\2\u009b\u009a\3\2\2"+
		"\2\u009c\u009d\3\2\2\2\u009d\u009b\3\2\2\2\u009d\u009e\3\2\2\2\u009e\21"+
		"\3\2\2\2\u009f\u00a2\5\24\13\2\u00a0\u00a2\5\26\f\2\u00a1\u009f\3\2\2"+
		"\2\u00a1\u00a0\3\2\2\2\u00a2\23\3\2\2\2\u00a3\u00a4\7\3\2\2\u00a4\25\3"+
		"\2\2\2\u00a5\u00a6\7\4\2\2\u00a6\27\3\2\2\2\u00a7\u00a8\5\n\6\2\u00a8"+
		"\u00a9\7\5\2\2\u00a9\u00aa\5\n\6\2\u00aa\31\3\2\2\2\u00ab\u00b0\5\34\17"+
		"\2\u00ac\u00ad\7\32\2\2\u00ad\u00af\5\34\17\2\u00ae\u00ac\3\2\2\2\u00af"+
		"\u00b2\3\2\2\2\u00b0\u00ae\3\2\2\2\u00b0\u00b1\3\2\2\2\u00b1\33\3\2\2"+
		"\2\u00b2\u00b0\3\2\2\2\u00b3\u00b4\5\n\6\2\u00b4\u00b5\7\37\2\2\u00b5"+
		"\u00b6\5\36\20\2\u00b6\35\3\2\2\2\u00b7\u00bb\7\r\2\2\u00b8\u00bb\7+\2"+
		"\2\u00b9\u00bb\5\"\22\2\u00ba\u00b7\3\2\2\2\u00ba\u00b8\3\2\2\2\u00ba"+
		"\u00b9\3\2\2\2\u00bb\37\3\2\2\2\u00bc\u00bd\7\"\2\2\u00bd\u00be\7+\2\2"+
		"\u00be!\3\2\2\2\u00bf\u00c0\7!\2\2\u00c0\u00c1\7+\2\2\u00c1#\3\2\2\2\u00c2"+
		"\u00c8\7\25\2\2\u00c3\u00c7\5&\24\2\u00c4\u00c7\5N(\2\u00c5\u00c7\5B\""+
		"\2\u00c6\u00c3\3\2\2\2\u00c6\u00c4\3\2\2\2\u00c6\u00c5\3\2\2\2\u00c7\u00ca"+
		"\3\2\2\2\u00c8\u00c6\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00cb\3\2\2\2\u00ca"+
		"\u00c8\3\2\2\2\u00cb\u00cc\7\26\2\2\u00cc%\3\2\2\2\u00cd\u00cf\5(\25\2"+
		"\u00ce\u00cd\3\2\2\2\u00cf\u00d0\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d0\u00d1"+
		"\3\2\2\2\u00d1\'\3\2\2\2\u00d2\u00d3\5\n\6\2\u00d3\u00d6\7\27\2\2\u00d4"+
		"\u00d7\5*\26\2\u00d5\u00d7\5\62\32\2\u00d6\u00d4\3\2\2\2\u00d6\u00d5\3"+
		"\2\2\2\u00d7\u00d8\3\2\2\2\u00d8\u00d9\7\30\2\2\u00d9)\3\2\2\2\u00da\u00db"+
		"\7\6\2\2\u00db\u00dc\7\21\2\2\u00dc\u00dd\5,\27\2\u00dd\u00de\7\22\2\2"+
		"\u00de+\3\2\2\2\u00df\u00e6\5\62\32\2\u00e0\u00e4\5\"\22\2\u00e1\u00e4"+
		"\58\35\2\u00e2\u00e4\5:\36\2\u00e3\u00e0\3\2\2\2\u00e3\u00e1\3\2\2\2\u00e3"+
		"\u00e2\3\2\2\2\u00e4\u00e6\3\2\2\2\u00e5\u00df\3\2\2\2\u00e5\u00e3\3\2"+
		"\2\2\u00e6\u00f2\3\2\2\2\u00e7\u00ee\7\32\2\2\u00e8\u00ef\5\62\32\2\u00e9"+
		"\u00ed\5\"\22\2\u00ea\u00ed\58\35\2\u00eb\u00ed\5:\36\2\u00ec\u00e9\3"+
		"\2\2\2\u00ec\u00ea\3\2\2\2\u00ec\u00eb\3\2\2\2\u00ed\u00ef\3\2\2\2\u00ee"+
		"\u00e8\3\2\2\2\u00ee\u00ec\3\2\2\2\u00ef\u00f1\3\2\2\2\u00f0\u00e7\3\2"+
		"\2\2\u00f1\u00f4\3\2\2\2\u00f2\u00f0\3\2\2\2\u00f2\u00f3\3\2\2\2\u00f3"+
		"-\3\2\2\2\u00f4\u00f2\3\2\2\2\u00f5\u00f6\t\2\2\2\u00f6/\3\2\2\2\u00f7"+
		"\u00f8\t\3\2\2\u00f8\61\3\2\2\2\u00f9\u00ff\5\64\33\2\u00fa\u00fb\5.\30"+
		"\2\u00fb\u00fc\5\64\33\2\u00fc\u00fe\3\2\2\2\u00fd\u00fa\3\2\2\2\u00fe"+
		"\u0101\3\2\2\2\u00ff\u00fd\3\2\2\2\u00ff\u0100\3\2\2\2\u0100\63\3\2\2"+
		"\2\u0101\u00ff\3\2\2\2\u0102\u0108\5\66\34\2\u0103\u0104\5\60\31\2\u0104"+
		"\u0105\5\66\34\2\u0105\u0107\3\2\2\2\u0106\u0103\3\2\2\2\u0107\u010a\3"+
		"\2\2\2\u0108\u0106\3\2\2\2\u0108\u0109\3\2\2\2\u0109\65\3\2\2\2\u010a"+
		"\u0108\3\2\2\2\u010b\u0116\5 \21\2\u010c\u0116\5\"\22\2\u010d\u0116\7"+
		"\20\2\2\u010e\u0116\58\35\2\u010f\u0116\5<\37\2\u0110\u0116\5> \2\u0111"+
		"\u0112\7\21\2\2\u0112\u0113\5\62\32\2\u0113\u0114\7\22\2\2\u0114\u0116"+
		"\3\2\2\2\u0115\u010b\3\2\2\2\u0115\u010c\3\2\2\2\u0115\u010d\3\2\2\2\u0115"+
		"\u010e\3\2\2\2\u0115\u010f\3\2\2\2\u0115\u0110\3\2\2\2\u0115\u0111\3\2"+
		"\2\2\u0116\67\3\2\2\2\u0117\u011b\7\r\2\2\u0118\u011b\5@!\2\u0119\u011b"+
		"\5:\36\2\u011a\u0117\3\2\2\2\u011a\u0118\3\2\2\2\u011a\u0119\3\2\2\2\u011b"+
		"9\3\2\2\2\u011c\u011d\7%\2\2\u011d;\3\2\2\2\u011e\u011f\7\7\2\2\u011f"+
		"\u0120\5\62\32\2\u0120\u0121\7\32\2\2\u0121\u0122\5\62\32\2\u0122\u0123"+
		"\7\32\2\2\u0123\u0124\5\62\32\2\u0124\u0125\7\22\2\2\u0125=\3\2\2\2\u0126"+
		"\u0127\7\b\2\2\u0127\u0128\5\62\32\2\u0128\u0129\7\32\2\2\u0129\u012a"+
		"\5\62\32\2\u012a\u012b\7\32\2\2\u012b\u012c\5\62\32\2\u012c\u012d\7\32"+
		"\2\2\u012d\u012e\5\62\32\2\u012e\u012f\7\22\2\2\u012f?\3\2\2\2\u0130\u0135"+
		"\7\16\2\2\u0131\u0135\7\17\2\2\u0132\u0133\7 \2\2\u0133\u0135\5@!\2\u0134"+
		"\u0130\3\2\2\2\u0134\u0131\3\2\2\2\u0134\u0132\3\2\2\2\u0135A\3\2\2\2"+
		"\u0136\u0137\5D#\2\u0137\u0138\7\25\2\2\u0138\u0139\5F$\2\u0139\u013a"+
		"\7\26\2\2\u013aC\3\2\2\2\u013b\u013d\7)\2\2\u013c\u013e\5H%\2\u013d\u013c"+
		"\3\2\2\2\u013d\u013e\3\2\2\2\u013eE\3\2\2\2\u013f\u0142\5&\24\2\u0140"+
		"\u0142\5N(\2\u0141\u013f\3\2\2\2\u0141\u0140\3\2\2\2\u0142\u0145\3\2\2"+
		"\2\u0143\u0141\3\2\2\2\u0143\u0144\3\2\2\2\u0144G\3\2\2\2\u0145\u0143"+
		"\3\2\2\2\u0146\u0147\7\21\2\2\u0147\u014c\5J&\2\u0148\u0149\7\32\2\2\u0149"+
		"\u014b\5J&\2\u014a\u0148\3\2\2\2\u014b\u014e\3\2\2\2\u014c\u014a\3\2\2"+
		"\2\u014c\u014d\3\2\2\2\u014d\u014f\3\2\2\2\u014e\u014c\3\2\2\2\u014f\u0150"+
		"\7\22\2\2\u0150I\3\2\2\2\u0151\u0152\5\62\32\2\u0152K\3\2\2\2\u0153\u0154"+
		"\7*\2\2\u0154M\3\2\2\2\u0155\u015b\5X-\2\u0156\u0157\5L\'\2\u0157\u0158"+
		"\7\25\2\2\u0158\u0159\7\26\2\2\u0159\u015b\3\2\2\2\u015a\u0155\3\2\2\2"+
		"\u015a\u0156\3\2\2\2\u015bO\3\2\2\2\u015c\u015f\7+\2\2\u015d\u015e\7\31"+
		"\2\2\u015e\u0160\7+\2\2\u015f\u015d\3\2\2\2\u015f\u0160\3\2\2\2\u0160"+
		"\u0161\3\2\2\2\u0161\u0162\7\37\2\2\u0162\u0163\5R*\2\u0163Q\3\2\2\2\u0164"+
		"\u0168\7\r\2\2\u0165\u0168\7+\2\2\u0166\u0168\5P)\2\u0167\u0164\3\2\2"+
		"\2\u0167\u0165\3\2\2\2\u0167\u0166\3\2\2\2\u0168S\3\2\2\2\u0169\u016f"+
		"\5V,\2\u016a\u016b\7\25\2\2\u016b\u016c\5`\61\2\u016c\u016d\7\26\2\2\u016d"+
		"\u0170\3\2\2\2\u016e\u0170\7\30\2\2\u016f\u016a\3\2\2\2\u016f\u016e\3"+
		"\2\2\2\u0170U\3\2\2\2\u0171\u0172\7\t\2\2\u0172\u0173\7\23\2\2\u0173\u0174"+
		"\5\n\6\2\u0174\u0175\7\24\2\2\u0175W\3\2\2\2\u0176\u0182\5Z.\2\u0177\u017d"+
		"\7\25\2\2\u0178\u017c\5&\24\2\u0179\u017c\5N(\2\u017a\u017c\5B\"\2\u017b"+
		"\u0178\3\2\2\2\u017b\u0179\3\2\2\2\u017b\u017a\3\2\2\2\u017c\u017f\3\2"+
		"\2\2\u017d\u017b\3\2\2\2\u017d\u017e\3\2\2\2\u017e\u0180\3\2\2\2\u017f"+
		"\u017d\3\2\2\2\u0180\u0183\7\26\2\2\u0181\u0183\7\30\2\2\u0182\u0177\3"+
		"\2\2\2\u0182\u0181\3\2\2\2\u0183Y\3\2\2\2\u0184\u0185\7\n\2\2\u0185\u0186"+
		"\5\f\7\2\u0186[\3\2\2\2\u0187\u0188\7+\2\2\u0188]\3\2\2\2\u0189\u018a"+
		"\t\4\2\2\u018a_\3\2\2\2\u018b\u018d\5b\62\2\u018c\u018b\3\2\2\2\u018d"+
		"\u018e\3\2\2\2\u018e\u018c\3\2\2\2\u018e\u018f\3\2\2\2\u018fa\3\2\2\2"+
		"\u0190\u0191\5\\/\2\u0191\u0192\7\27\2\2\u0192\u0193\5^\60\2\u0193\u0194"+
		"\7\30\2\2\u0194c\3\2\2\2)giny\u0080\u0089\u008e\u0093\u0097\u009d\u00a1"+
		"\u00b0\u00ba\u00c6\u00c8\u00d0\u00d6\u00e3\u00e5\u00ec\u00ee\u00f2\u00ff"+
		"\u0108\u0115\u011a\u0134\u013d\u0141\u0143\u014c\u015a\u015f\u0167\u016f"+
		"\u017b\u017d\u0182\u018e";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}