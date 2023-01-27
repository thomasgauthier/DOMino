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
		T__9=10, T__10=11, T__11=12, T__12=13, NUMBER=14, TRUE=15, FALSE=16, UNSET=17, 
		Identifier=18, LPAREN=19, RPAREN=20, LBRACKET=21, RBRACKET=22, LCURLY=23, 
		RCURLY=24, COLON=25, SEMI=26, DOT=27, COMMA=28, PLUS=29, MINUS=30, MULT=31, 
		DIV=32, ASSIGN=33, LESSTHAN=34, GREATERTHAN=35, LESSTHANOREQUAL=36, GREATERTHANOREQUAL=37, 
		EXCLAMATION=38, QUESTION=39, DOLLAR=40, AT=41, QUOTE=42, STRING_LITERAL=43, 
		ESC=44, UNICODE=45, HEX=46, EventIdentifier=47, AtRuleIdentifier=48, COMMENT=49, 
		WS=50;
	public static final int
		RULE_program = 0, RULE_keyframe = 1, RULE_system = 2, RULE_systemHeader = 3, 
		RULE_componentSelector = 4, RULE_componentId = 5, RULE_queryExpression = 6, 
		RULE_queryOperationParameters = 7, RULE_intersectionQuery = 8, RULE_setoperator = 9, 
		RULE_setOperatorNot = 10, RULE_setOperatorAny = 11, RULE_componentAs = 12, 
		RULE_componentAttributes = 13, RULE_componentAttribute = 14, RULE_componentAttributeComparator = 15, 
		RULE_componentAttributeValue = 16, RULE_var = 17, RULE_queryvar = 18, 
		RULE_systemBody = 19, RULE_statementPlaceHolder = 20, RULE_componentStatements = 21, 
		RULE_componentStatement = 22, RULE_function = 23, RULE_functionName = 24, 
		RULE_functionParameters = 25, RULE_mathoperatoradditions = 26, RULE_mathoperatorfactors = 27, 
		RULE_expression = 28, RULE_term = 29, RULE_factor = 30, RULE_literal = 31, 
		RULE_stringLiteral = 32, RULE_rgb = 33, RULE_rgba = 34, RULE_boolval = 35, 
		RULE_eventHandler = 36, RULE_eventHandlerHeader = 37, RULE_eventHandlerBody = 38, 
		RULE_arguments = 39, RULE_argument = 40, RULE_atRuleHeader = 41, RULE_atRule = 42, 
		RULE_variableAssignment = 43, RULE_variableAssignmentValue = 44, RULE_define = 45, 
		RULE_defineHeader = 46, RULE_query = 47, RULE_queryHeader = 48, RULE_componentPropertyId = 49, 
		RULE_type = 50, RULE_defineDeclarations = 51, RULE_defineDeclaration = 52;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "keyframe", "system", "systemHeader", "componentSelector", 
			"componentId", "queryExpression", "queryOperationParameters", "intersectionQuery", 
			"setoperator", "setOperatorNot", "setOperatorAny", "componentAs", "componentAttributes", 
			"componentAttribute", "componentAttributeComparator", "componentAttributeValue", 
			"var", "queryvar", "systemBody", "statementPlaceHolder", "componentStatements", 
			"componentStatement", "function", "functionName", "functionParameters", 
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
			null, "'@keyframes'", "'from'", "'to'", "':not'", "':any'", "'as'", "'%'", 
			"'rgb('", "'rgba('", "'@define'", "'@query'", "'boolean'", "'number'", 
			null, "'true'", "'false'", "'unset'", null, "'('", "')'", "'['", "']'", 
			"'{'", "'}'", "':'", "';'", "'.'", "','", "'+'", "'-'", "'*'", "'/'", 
			"'='", "'<'", "'>'", "'<='", "'>='", "'!'", "'?'", "'$'", "'@'", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "NUMBER", "TRUE", "FALSE", "UNSET", "Identifier", "LPAREN", 
			"RPAREN", "LBRACKET", "RBRACKET", "LCURLY", "RCURLY", "COLON", "SEMI", 
			"DOT", "COMMA", "PLUS", "MINUS", "MULT", "DIV", "ASSIGN", "LESSTHAN", 
			"GREATERTHAN", "LESSTHANOREQUAL", "GREATERTHANOREQUAL", "EXCLAMATION", 
			"QUESTION", "DOLLAR", "AT", "QUOTE", "STRING_LITERAL", "ESC", "UNICODE", 
			"HEX", "EventIdentifier", "AtRuleIdentifier", "COMMENT", "WS"
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
		public List<KeyframeContext> keyframe() {
			return getRuleContexts(KeyframeContext.class);
		}
		public KeyframeContext keyframe(int i) {
			return getRuleContext(KeyframeContext.class,i);
		}
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
			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__9) {
				{
				setState(107); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(106);
					define();
					}
					}
					setState(109); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__9 );
				}
			}

			setState(115); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(115);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
					{
					setState(113);
					keyframe();
					}
					break;
				case T__3:
				case T__4:
				case LBRACKET:
				case LCURLY:
					{
					setState(114);
					system();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(117); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__3) | (1L << T__4) | (1L << LBRACKET) | (1L << LCURLY))) != 0) );
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

	public static class KeyframeContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(ecssParser.Identifier, 0); }
		public List<TerminalNode> LCURLY() { return getTokens(ecssParser.LCURLY); }
		public TerminalNode LCURLY(int i) {
			return getToken(ecssParser.LCURLY, i);
		}
		public List<ComponentStatementsContext> componentStatements() {
			return getRuleContexts(ComponentStatementsContext.class);
		}
		public ComponentStatementsContext componentStatements(int i) {
			return getRuleContext(ComponentStatementsContext.class,i);
		}
		public List<TerminalNode> RCURLY() { return getTokens(ecssParser.RCURLY); }
		public TerminalNode RCURLY(int i) {
			return getToken(ecssParser.RCURLY, i);
		}
		public KeyframeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyframe; }
	}

	public final KeyframeContext keyframe() throws RecognitionException {
		KeyframeContext _localctx = new KeyframeContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_keyframe);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			match(T__0);
			setState(120);
			match(Identifier);
			setState(121);
			match(LCURLY);
			setState(122);
			match(T__1);
			setState(123);
			match(LCURLY);
			setState(124);
			componentStatements();
			setState(125);
			match(RCURLY);
			setState(131);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__2) {
				{
				setState(126);
				match(T__2);
				setState(127);
				match(LCURLY);
				setState(128);
				componentStatements();
				setState(129);
				match(RCURLY);
				}
			}

			setState(133);
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
		enterRule(_localctx, 4, RULE_system);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			systemHeader();
			setState(136);
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
		enterRule(_localctx, 6, RULE_systemHeader);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(138);
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
		enterRule(_localctx, 8, RULE_componentSelector);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
			match(LBRACKET);
			setState(144);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(141);
				componentId();
				}
				break;
			case 2:
				{
				setState(142);
				componentAs();
				}
				break;
			case 3:
				{
				setState(143);
				componentAttribute();
				}
				break;
			}
			setState(146);
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
		enterRule(_localctx, 10, RULE_componentId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
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
		enterRule(_localctx, 12, RULE_queryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACKET) {
				{
				setState(150);
				intersectionQuery();
				}
			}

			setState(160);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3 || _la==T__4) {
				{
				{
				setState(153);
				setoperator();
				setState(154);
				match(LPAREN);
				setState(155);
				queryOperationParameters();
				setState(156);
				match(RPAREN);
				}
				}
				setState(162);
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
		enterRule(_localctx, 14, RULE_queryOperationParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(163);
				intersectionQuery();
				}
				break;
			case 2:
				{
				setState(164);
				queryExpression();
				}
				break;
			}
			setState(174);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(167);
				match(COMMA);
				setState(170);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
				case 1:
					{
					setState(168);
					intersectionQuery();
					}
					break;
				case 2:
					{
					setState(169);
					queryExpression();
					}
					break;
				}
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
		enterRule(_localctx, 16, RULE_intersectionQuery);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(177);
				componentSelector();
				}
				}
				setState(180); 
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
		enterRule(_localctx, 18, RULE_setoperator);
		try {
			setState(184);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(182);
				setOperatorNot();
				}
				break;
			case T__4:
				enterOuterAlt(_localctx, 2);
				{
				setState(183);
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
		enterRule(_localctx, 20, RULE_setOperatorNot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(186);
			match(T__3);
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
		enterRule(_localctx, 22, RULE_setOperatorAny);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			match(T__4);
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
		enterRule(_localctx, 24, RULE_componentAs);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(190);
			componentId();
			setState(191);
			match(T__5);
			setState(192);
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
		enterRule(_localctx, 26, RULE_componentAttributes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			componentAttribute();
			setState(199);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(195);
				match(COMMA);
				setState(196);
				componentAttribute();
				}
				}
				setState(201);
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
		enterRule(_localctx, 28, RULE_componentAttribute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(202);
			componentId();
			setState(203);
			componentAttributeComparator();
			setState(204);
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
		enterRule(_localctx, 30, RULE_componentAttributeComparator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
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
		enterRule(_localctx, 32, RULE_componentAttributeValue);
		try {
			setState(211);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(208);
				match(NUMBER);
				}
				break;
			case Identifier:
				enterOuterAlt(_localctx, 2);
				{
				setState(209);
				match(Identifier);
				}
				break;
			case QUESTION:
				enterOuterAlt(_localctx, 3);
				{
				setState(210);
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
		enterRule(_localctx, 34, RULE_var);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			match(DOLLAR);
			setState(214);
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
		enterRule(_localctx, 36, RULE_queryvar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			match(QUESTION);
			setState(217);
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
		enterRule(_localctx, 38, RULE_systemBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			match(LCURLY);
			setState(225);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__10) | (1L << Identifier) | (1L << EventIdentifier) | (1L << AtRuleIdentifier))) != 0)) {
				{
				setState(223);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(220);
					componentStatements();
					}
					break;
				case T__10:
				case AtRuleIdentifier:
					{
					setState(221);
					atRule();
					}
					break;
				case EventIdentifier:
					{
					setState(222);
					eventHandler();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(227);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(228);
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

	public static class StatementPlaceHolderContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(ecssParser.COLON, 0); }
		public TerminalNode Identifier() { return getToken(ecssParser.Identifier, 0); }
		public StatementPlaceHolderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementPlaceHolder; }
	}

	public final StatementPlaceHolderContext statementPlaceHolder() throws RecognitionException {
		StatementPlaceHolderContext _localctx = new StatementPlaceHolderContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_statementPlaceHolder);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(230);
			match(COLON);
			setState(232);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(231);
				match(Identifier);
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
		enterRule(_localctx, 42, RULE_componentStatements);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(235); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(234);
					componentStatement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(237); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
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
		public TerminalNode SEMI() { return getToken(ecssParser.SEMI, 0); }
		public StatementPlaceHolderContext statementPlaceHolder() {
			return getRuleContext(StatementPlaceHolderContext.class,0);
		}
		public TerminalNode COLON() { return getToken(ecssParser.COLON, 0); }
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
		enterRule(_localctx, 44, RULE_componentStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(239);
			componentId();
			setState(246);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(240);
				statementPlaceHolder();
				}
				break;
			case 2:
				{
				{
				setState(241);
				match(COLON);
				setState(244);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
				case 1:
					{
					setState(242);
					expression();
					}
					break;
				case 2:
					{
					setState(243);
					function();
					}
					break;
				}
				}
				}
				break;
			}
			setState(248);
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
		enterRule(_localctx, 46, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(250);
			functionName();
			setState(251);
			match(LPAREN);
			setState(252);
			functionParameters();
			setState(253);
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
		public TerminalNode Identifier() { return getToken(ecssParser.Identifier, 0); }
		public FunctionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionName; }
	}

	public final FunctionNameContext functionName() throws RecognitionException {
		FunctionNameContext _localctx = new FunctionNameContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_functionName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255);
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
		enterRule(_localctx, 50, RULE_functionParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(257);
				expression();
				}
				break;
			case 2:
				{
				setState(258);
				function();
				}
				break;
			case 3:
				{
				setState(262);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
				case 1:
					{
					setState(259);
					queryvar();
					}
					break;
				case 2:
					{
					setState(260);
					literal();
					}
					break;
				case 3:
					{
					setState(261);
					stringLiteral();
					}
					break;
				}
				}
				break;
			}
			setState(278);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(266);
				match(COMMA);
				setState(274);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
				case 1:
					{
					setState(267);
					expression();
					}
					break;
				case 2:
					{
					setState(268);
					function();
					}
					break;
				case 3:
					{
					setState(272);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
					case 1:
						{
						setState(269);
						queryvar();
						}
						break;
					case 2:
						{
						setState(270);
						literal();
						}
						break;
					case 3:
						{
						setState(271);
						stringLiteral();
						}
						break;
					}
					}
					break;
				}
				}
				}
				setState(280);
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
		enterRule(_localctx, 52, RULE_mathoperatoradditions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(281);
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
		enterRule(_localctx, 54, RULE_mathoperatorfactors);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(283);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << MULT) | (1L << DIV))) != 0)) ) {
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
		enterRule(_localctx, 56, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(285);
			term();
			setState(291);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PLUS || _la==MINUS) {
				{
				{
				setState(286);
				mathoperatoradditions();
				setState(287);
				term();
				}
				}
				setState(293);
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
		enterRule(_localctx, 58, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(294);
			factor();
			setState(300);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << MULT) | (1L << DIV))) != 0)) {
				{
				{
				setState(295);
				mathoperatorfactors();
				setState(296);
				factor();
				}
				}
				setState(302);
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
		enterRule(_localctx, 60, RULE_factor);
		try {
			setState(314);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(303);
				function();
				}
				break;
			case DOLLAR:
				enterOuterAlt(_localctx, 2);
				{
				setState(304);
				var();
				}
				break;
			case QUESTION:
				enterOuterAlt(_localctx, 3);
				{
				setState(305);
				queryvar();
				}
				break;
			case UNSET:
				enterOuterAlt(_localctx, 4);
				{
				setState(306);
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
				setState(307);
				literal();
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 6);
				{
				setState(308);
				rgb();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 7);
				{
				setState(309);
				rgba();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 8);
				{
				setState(310);
				match(LPAREN);
				setState(311);
				expression();
				setState(312);
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
		enterRule(_localctx, 62, RULE_literal);
		try {
			setState(319);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(316);
				match(NUMBER);
				}
				break;
			case TRUE:
			case FALSE:
			case EXCLAMATION:
				enterOuterAlt(_localctx, 2);
				{
				setState(317);
				boolval();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(318);
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
		enterRule(_localctx, 64, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
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
		enterRule(_localctx, 66, RULE_rgb);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(323);
			match(T__7);
			setState(324);
			expression();
			setState(325);
			match(COMMA);
			setState(326);
			expression();
			setState(327);
			match(COMMA);
			setState(328);
			expression();
			setState(329);
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
		enterRule(_localctx, 68, RULE_rgba);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(331);
			match(T__8);
			setState(332);
			expression();
			setState(333);
			match(COMMA);
			setState(334);
			expression();
			setState(335);
			match(COMMA);
			setState(336);
			expression();
			setState(337);
			match(COMMA);
			setState(338);
			expression();
			setState(339);
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
		enterRule(_localctx, 70, RULE_boolval);
		try {
			setState(345);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TRUE:
				enterOuterAlt(_localctx, 1);
				{
				setState(341);
				match(TRUE);
				}
				break;
			case FALSE:
				enterOuterAlt(_localctx, 2);
				{
				setState(342);
				match(FALSE);
				}
				break;
			case EXCLAMATION:
				enterOuterAlt(_localctx, 3);
				{
				setState(343);
				match(EXCLAMATION);
				setState(344);
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
		enterRule(_localctx, 72, RULE_eventHandler);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(347);
			eventHandlerHeader();
			setState(348);
			match(LCURLY);
			setState(349);
			eventHandlerBody();
			setState(350);
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
		enterRule(_localctx, 74, RULE_eventHandlerHeader);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(352);
			match(EventIdentifier);
			setState(354);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(353);
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
		enterRule(_localctx, 76, RULE_eventHandlerBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(360);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__10) | (1L << Identifier) | (1L << AtRuleIdentifier))) != 0)) {
				{
				setState(358);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(356);
					componentStatements();
					}
					break;
				case T__10:
				case AtRuleIdentifier:
					{
					setState(357);
					atRule();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(362);
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
		enterRule(_localctx, 78, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			match(LPAREN);
			{
			setState(364);
			argument();
			setState(369);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(365);
				match(COMMA);
				setState(366);
				argument();
				}
				}
				setState(371);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(372);
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
		enterRule(_localctx, 80, RULE_argument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
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
		enterRule(_localctx, 82, RULE_atRuleHeader);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(376);
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
		enterRule(_localctx, 84, RULE_atRule);
		try {
			setState(383);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__10:
				enterOuterAlt(_localctx, 1);
				{
				setState(378);
				query();
				}
				break;
			case AtRuleIdentifier:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(379);
				atRuleHeader();
				setState(380);
				match(LCURLY);
				setState(381);
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
		enterRule(_localctx, 86, RULE_variableAssignment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(385);
			match(Identifier);
			setState(388);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOT) {
				{
				setState(386);
				match(DOT);
				setState(387);
				match(Identifier);
				}
			}

			setState(390);
			match(ASSIGN);
			setState(391);
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
		enterRule(_localctx, 88, RULE_variableAssignmentValue);
		try {
			setState(396);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(393);
				match(NUMBER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(394);
				match(Identifier);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(395);
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
		enterRule(_localctx, 90, RULE_define);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(398);
			defineHeader();
			setState(404);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LCURLY:
				{
				{
				setState(399);
				match(LCURLY);
				setState(400);
				defineDeclarations();
				setState(401);
				match(RCURLY);
				}
				}
				break;
			case SEMI:
				{
				setState(403);
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
		enterRule(_localctx, 92, RULE_defineHeader);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(406);
			match(T__9);
			setState(407);
			match(LBRACKET);
			setState(408);
			componentId();
			setState(409);
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
		enterRule(_localctx, 94, RULE_query);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(411);
			queryHeader();
			setState(423);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LCURLY:
				{
				{
				setState(412);
				match(LCURLY);
				setState(418);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__10) | (1L << Identifier) | (1L << EventIdentifier) | (1L << AtRuleIdentifier))) != 0)) {
					{
					setState(416);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case Identifier:
						{
						setState(413);
						componentStatements();
						}
						break;
					case T__10:
					case AtRuleIdentifier:
						{
						setState(414);
						atRule();
						}
						break;
					case EventIdentifier:
						{
						setState(415);
						eventHandler();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					setState(420);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(421);
				match(RCURLY);
				}
				}
				break;
			case SEMI:
				{
				setState(422);
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
		enterRule(_localctx, 96, RULE_queryHeader);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(425);
			match(T__10);
			setState(426);
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
		enterRule(_localctx, 98, RULE_componentPropertyId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(428);
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
		enterRule(_localctx, 100, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(430);
			_la = _input.LA(1);
			if ( !(_la==T__11 || _la==T__12) ) {
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
		enterRule(_localctx, 102, RULE_defineDeclarations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(433); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(432);
				defineDeclaration();
				}
				}
				setState(435); 
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
		enterRule(_localctx, 104, RULE_defineDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(437);
			componentPropertyId();
			setState(438);
			match(COLON);
			setState(439);
			type();
			setState(440);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\64\u01bd\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\3\2\6\2n\n\2\r\2\16\2o\5\2r\n\2\3\2\3\2\6\2v\n"+
		"\2\r\2\16\2w\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\u0086"+
		"\n\3\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3\6\5\6\u0093\n\6\3\6\3\6"+
		"\3\7\3\7\3\b\5\b\u009a\n\b\3\b\3\b\3\b\3\b\3\b\7\b\u00a1\n\b\f\b\16\b"+
		"\u00a4\13\b\3\t\3\t\5\t\u00a8\n\t\3\t\3\t\3\t\5\t\u00ad\n\t\7\t\u00af"+
		"\n\t\f\t\16\t\u00b2\13\t\3\n\6\n\u00b5\n\n\r\n\16\n\u00b6\3\13\3\13\5"+
		"\13\u00bb\n\13\3\f\3\f\3\r\3\r\3\16\3\16\3\16\3\16\3\17\3\17\3\17\7\17"+
		"\u00c8\n\17\f\17\16\17\u00cb\13\17\3\20\3\20\3\20\3\20\3\21\3\21\3\22"+
		"\3\22\3\22\5\22\u00d6\n\22\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\25"+
		"\3\25\7\25\u00e2\n\25\f\25\16\25\u00e5\13\25\3\25\3\25\3\26\3\26\5\26"+
		"\u00eb\n\26\3\27\6\27\u00ee\n\27\r\27\16\27\u00ef\3\30\3\30\3\30\3\30"+
		"\3\30\5\30\u00f7\n\30\5\30\u00f9\n\30\3\30\3\30\3\31\3\31\3\31\3\31\3"+
		"\31\3\32\3\32\3\33\3\33\3\33\3\33\3\33\5\33\u0109\n\33\5\33\u010b\n\33"+
		"\3\33\3\33\3\33\3\33\3\33\3\33\5\33\u0113\n\33\5\33\u0115\n\33\7\33\u0117"+
		"\n\33\f\33\16\33\u011a\13\33\3\34\3\34\3\35\3\35\3\36\3\36\3\36\3\36\7"+
		"\36\u0124\n\36\f\36\16\36\u0127\13\36\3\37\3\37\3\37\3\37\7\37\u012d\n"+
		"\37\f\37\16\37\u0130\13\37\3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \5 \u013d\n"+
		" \3!\3!\3!\5!\u0142\n!\3\"\3\"\3#\3#\3#\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$"+
		"\3$\3$\3$\3$\3$\3%\3%\3%\3%\5%\u015c\n%\3&\3&\3&\3&\3&\3\'\3\'\5\'\u0165"+
		"\n\'\3(\3(\7(\u0169\n(\f(\16(\u016c\13(\3)\3)\3)\3)\7)\u0172\n)\f)\16"+
		")\u0175\13)\3)\3)\3*\3*\3+\3+\3,\3,\3,\3,\3,\5,\u0182\n,\3-\3-\3-\5-\u0187"+
		"\n-\3-\3-\3-\3.\3.\3.\5.\u018f\n.\3/\3/\3/\3/\3/\3/\5/\u0197\n/\3\60\3"+
		"\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\7\61\u01a3\n\61\f\61\16\61"+
		"\u01a6\13\61\3\61\3\61\5\61\u01aa\n\61\3\62\3\62\3\62\3\63\3\63\3\64\3"+
		"\64\3\65\6\65\u01b4\n\65\r\65\16\65\u01b5\3\66\3\66\3\66\3\66\3\66\3\66"+
		"\2\2\67\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:"+
		"<>@BDFHJLNPRTVXZ\\^`bdfhj\2\6\3\2#\'\3\2\37 \4\2\t\t!\"\3\2\16\17\2\u01c3"+
		"\2q\3\2\2\2\4y\3\2\2\2\6\u0089\3\2\2\2\b\u008c\3\2\2\2\n\u008e\3\2\2\2"+
		"\f\u0096\3\2\2\2\16\u0099\3\2\2\2\20\u00a7\3\2\2\2\22\u00b4\3\2\2\2\24"+
		"\u00ba\3\2\2\2\26\u00bc\3\2\2\2\30\u00be\3\2\2\2\32\u00c0\3\2\2\2\34\u00c4"+
		"\3\2\2\2\36\u00cc\3\2\2\2 \u00d0\3\2\2\2\"\u00d5\3\2\2\2$\u00d7\3\2\2"+
		"\2&\u00da\3\2\2\2(\u00dd\3\2\2\2*\u00e8\3\2\2\2,\u00ed\3\2\2\2.\u00f1"+
		"\3\2\2\2\60\u00fc\3\2\2\2\62\u0101\3\2\2\2\64\u010a\3\2\2\2\66\u011b\3"+
		"\2\2\28\u011d\3\2\2\2:\u011f\3\2\2\2<\u0128\3\2\2\2>\u013c\3\2\2\2@\u0141"+
		"\3\2\2\2B\u0143\3\2\2\2D\u0145\3\2\2\2F\u014d\3\2\2\2H\u015b\3\2\2\2J"+
		"\u015d\3\2\2\2L\u0162\3\2\2\2N\u016a\3\2\2\2P\u016d\3\2\2\2R\u0178\3\2"+
		"\2\2T\u017a\3\2\2\2V\u0181\3\2\2\2X\u0183\3\2\2\2Z\u018e\3\2\2\2\\\u0190"+
		"\3\2\2\2^\u0198\3\2\2\2`\u019d\3\2\2\2b\u01ab\3\2\2\2d\u01ae\3\2\2\2f"+
		"\u01b0\3\2\2\2h\u01b3\3\2\2\2j\u01b7\3\2\2\2ln\5\\/\2ml\3\2\2\2no\3\2"+
		"\2\2om\3\2\2\2op\3\2\2\2pr\3\2\2\2qm\3\2\2\2qr\3\2\2\2ru\3\2\2\2sv\5\4"+
		"\3\2tv\5\6\4\2us\3\2\2\2ut\3\2\2\2vw\3\2\2\2wu\3\2\2\2wx\3\2\2\2x\3\3"+
		"\2\2\2yz\7\3\2\2z{\7\24\2\2{|\7\31\2\2|}\7\4\2\2}~\7\31\2\2~\177\5,\27"+
		"\2\177\u0085\7\32\2\2\u0080\u0081\7\5\2\2\u0081\u0082\7\31\2\2\u0082\u0083"+
		"\5,\27\2\u0083\u0084\7\32\2\2\u0084\u0086\3\2\2\2\u0085\u0080\3\2\2\2"+
		"\u0085\u0086\3\2\2\2\u0086\u0087\3\2\2\2\u0087\u0088\7\32\2\2\u0088\5"+
		"\3\2\2\2\u0089\u008a\5\b\5\2\u008a\u008b\5(\25\2\u008b\7\3\2\2\2\u008c"+
		"\u008d\5\16\b\2\u008d\t\3\2\2\2\u008e\u0092\7\27\2\2\u008f\u0093\5\f\7"+
		"\2\u0090\u0093\5\32\16\2\u0091\u0093\5\36\20\2\u0092\u008f\3\2\2\2\u0092"+
		"\u0090\3\2\2\2\u0092\u0091\3\2\2\2\u0093\u0094\3\2\2\2\u0094\u0095\7\30"+
		"\2\2\u0095\13\3\2\2\2\u0096\u0097\7\24\2\2\u0097\r\3\2\2\2\u0098\u009a"+
		"\5\22\n\2\u0099\u0098\3\2\2\2\u0099\u009a\3\2\2\2\u009a\u00a2\3\2\2\2"+
		"\u009b\u009c\5\24\13\2\u009c\u009d\7\25\2\2\u009d\u009e\5\20\t\2\u009e"+
		"\u009f\7\26\2\2\u009f\u00a1\3\2\2\2\u00a0\u009b\3\2\2\2\u00a1\u00a4\3"+
		"\2\2\2\u00a2\u00a0\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3\17\3\2\2\2\u00a4"+
		"\u00a2\3\2\2\2\u00a5\u00a8\5\22\n\2\u00a6\u00a8\5\16\b\2\u00a7\u00a5\3"+
		"\2\2\2\u00a7\u00a6\3\2\2\2\u00a8\u00b0\3\2\2\2\u00a9\u00ac\7\36\2\2\u00aa"+
		"\u00ad\5\22\n\2\u00ab\u00ad\5\16\b\2\u00ac\u00aa\3\2\2\2\u00ac\u00ab\3"+
		"\2\2\2\u00ad\u00af\3\2\2\2\u00ae\u00a9\3\2\2\2\u00af\u00b2\3\2\2\2\u00b0"+
		"\u00ae\3\2\2\2\u00b0\u00b1\3\2\2\2\u00b1\21\3\2\2\2\u00b2\u00b0\3\2\2"+
		"\2\u00b3\u00b5\5\n\6\2\u00b4\u00b3\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\u00b4"+
		"\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7\23\3\2\2\2\u00b8\u00bb\5\26\f\2\u00b9"+
		"\u00bb\5\30\r\2\u00ba\u00b8\3\2\2\2\u00ba\u00b9\3\2\2\2\u00bb\25\3\2\2"+
		"\2\u00bc\u00bd\7\6\2\2\u00bd\27\3\2\2\2\u00be\u00bf\7\7\2\2\u00bf\31\3"+
		"\2\2\2\u00c0\u00c1\5\f\7\2\u00c1\u00c2\7\b\2\2\u00c2\u00c3\5\f\7\2\u00c3"+
		"\33\3\2\2\2\u00c4\u00c9\5\36\20\2\u00c5\u00c6\7\36\2\2\u00c6\u00c8\5\36"+
		"\20\2\u00c7\u00c5\3\2\2\2\u00c8\u00cb\3\2\2\2\u00c9\u00c7\3\2\2\2\u00c9"+
		"\u00ca\3\2\2\2\u00ca\35\3\2\2\2\u00cb\u00c9\3\2\2\2\u00cc\u00cd\5\f\7"+
		"\2\u00cd\u00ce\5 \21\2\u00ce\u00cf\5\"\22\2\u00cf\37\3\2\2\2\u00d0\u00d1"+
		"\t\2\2\2\u00d1!\3\2\2\2\u00d2\u00d6\7\20\2\2\u00d3\u00d6\7\24\2\2\u00d4"+
		"\u00d6\5&\24\2\u00d5\u00d2\3\2\2\2\u00d5\u00d3\3\2\2\2\u00d5\u00d4\3\2"+
		"\2\2\u00d6#\3\2\2\2\u00d7\u00d8\7*\2\2\u00d8\u00d9\7\24\2\2\u00d9%\3\2"+
		"\2\2\u00da\u00db\7)\2\2\u00db\u00dc\7\24\2\2\u00dc\'\3\2\2\2\u00dd\u00e3"+
		"\7\31\2\2\u00de\u00e2\5,\27\2\u00df\u00e2\5V,\2\u00e0\u00e2\5J&\2\u00e1"+
		"\u00de\3\2\2\2\u00e1\u00df\3\2\2\2\u00e1\u00e0\3\2\2\2\u00e2\u00e5\3\2"+
		"\2\2\u00e3\u00e1\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e6\3\2\2\2\u00e5"+
		"\u00e3\3\2\2\2\u00e6\u00e7\7\32\2\2\u00e7)\3\2\2\2\u00e8\u00ea\7\33\2"+
		"\2\u00e9\u00eb\7\24\2\2\u00ea\u00e9\3\2\2\2\u00ea\u00eb\3\2\2\2\u00eb"+
		"+\3\2\2\2\u00ec\u00ee\5.\30\2\u00ed\u00ec\3\2\2\2\u00ee\u00ef\3\2\2\2"+
		"\u00ef\u00ed\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0-\3\2\2\2\u00f1\u00f8\5"+
		"\f\7\2\u00f2\u00f9\5*\26\2\u00f3\u00f6\7\33\2\2\u00f4\u00f7\5:\36\2\u00f5"+
		"\u00f7\5\60\31\2\u00f6\u00f4\3\2\2\2\u00f6\u00f5\3\2\2\2\u00f7\u00f9\3"+
		"\2\2\2\u00f8\u00f2\3\2\2\2\u00f8\u00f3\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa"+
		"\u00fb\7\34\2\2\u00fb/\3\2\2\2\u00fc\u00fd\5\62\32\2\u00fd\u00fe\7\25"+
		"\2\2\u00fe\u00ff\5\64\33\2\u00ff\u0100\7\26\2\2\u0100\61\3\2\2\2\u0101"+
		"\u0102\7\24\2\2\u0102\63\3\2\2\2\u0103\u010b\5:\36\2\u0104\u010b\5\60"+
		"\31\2\u0105\u0109\5&\24\2\u0106\u0109\5@!\2\u0107\u0109\5B\"\2\u0108\u0105"+
		"\3\2\2\2\u0108\u0106\3\2\2\2\u0108\u0107\3\2\2\2\u0109\u010b\3\2\2\2\u010a"+
		"\u0103\3\2\2\2\u010a\u0104\3\2\2\2\u010a\u0108\3\2\2\2\u010b\u0118\3\2"+
		"\2\2\u010c\u0114\7\36\2\2\u010d\u0115\5:\36\2\u010e\u0115\5\60\31\2\u010f"+
		"\u0113\5&\24\2\u0110\u0113\5@!\2\u0111\u0113\5B\"\2\u0112\u010f\3\2\2"+
		"\2\u0112\u0110\3\2\2\2\u0112\u0111\3\2\2\2\u0113\u0115\3\2\2\2\u0114\u010d"+
		"\3\2\2\2\u0114\u010e\3\2\2\2\u0114\u0112\3\2\2\2\u0115\u0117\3\2\2\2\u0116"+
		"\u010c\3\2\2\2\u0117\u011a\3\2\2\2\u0118\u0116\3\2\2\2\u0118\u0119\3\2"+
		"\2\2\u0119\65\3\2\2\2\u011a\u0118\3\2\2\2\u011b\u011c\t\3\2\2\u011c\67"+
		"\3\2\2\2\u011d\u011e\t\4\2\2\u011e9\3\2\2\2\u011f\u0125\5<\37\2\u0120"+
		"\u0121\5\66\34\2\u0121\u0122\5<\37\2\u0122\u0124\3\2\2\2\u0123\u0120\3"+
		"\2\2\2\u0124\u0127\3\2\2\2\u0125\u0123\3\2\2\2\u0125\u0126\3\2\2\2\u0126"+
		";\3\2\2\2\u0127\u0125\3\2\2\2\u0128\u012e\5> \2\u0129\u012a\58\35\2\u012a"+
		"\u012b\5> \2\u012b\u012d\3\2\2\2\u012c\u0129\3\2\2\2\u012d\u0130\3\2\2"+
		"\2\u012e\u012c\3\2\2\2\u012e\u012f\3\2\2\2\u012f=\3\2\2\2\u0130\u012e"+
		"\3\2\2\2\u0131\u013d\5\60\31\2\u0132\u013d\5$\23\2\u0133\u013d\5&\24\2"+
		"\u0134\u013d\7\23\2\2\u0135\u013d\5@!\2\u0136\u013d\5D#\2\u0137\u013d"+
		"\5F$\2\u0138\u0139\7\25\2\2\u0139\u013a\5:\36\2\u013a\u013b\7\26\2\2\u013b"+
		"\u013d\3\2\2\2\u013c\u0131\3\2\2\2\u013c\u0132\3\2\2\2\u013c\u0133\3\2"+
		"\2\2\u013c\u0134\3\2\2\2\u013c\u0135\3\2\2\2\u013c\u0136\3\2\2\2\u013c"+
		"\u0137\3\2\2\2\u013c\u0138\3\2\2\2\u013d?\3\2\2\2\u013e\u0142\7\20\2\2"+
		"\u013f\u0142\5H%\2\u0140\u0142\5B\"\2\u0141\u013e\3\2\2\2\u0141\u013f"+
		"\3\2\2\2\u0141\u0140\3\2\2\2\u0142A\3\2\2\2\u0143\u0144\7-\2\2\u0144C"+
		"\3\2\2\2\u0145\u0146\7\n\2\2\u0146\u0147\5:\36\2\u0147\u0148\7\36\2\2"+
		"\u0148\u0149\5:\36\2\u0149\u014a\7\36\2\2\u014a\u014b\5:\36\2\u014b\u014c"+
		"\7\26\2\2\u014cE\3\2\2\2\u014d\u014e\7\13\2\2\u014e\u014f\5:\36\2\u014f"+
		"\u0150\7\36\2\2\u0150\u0151\5:\36\2\u0151\u0152\7\36\2\2\u0152\u0153\5"+
		":\36\2\u0153\u0154\7\36\2\2\u0154\u0155\5:\36\2\u0155\u0156\7\26\2\2\u0156"+
		"G\3\2\2\2\u0157\u015c\7\21\2\2\u0158\u015c\7\22\2\2\u0159\u015a\7(\2\2"+
		"\u015a\u015c\5H%\2\u015b\u0157\3\2\2\2\u015b\u0158\3\2\2\2\u015b\u0159"+
		"\3\2\2\2\u015cI\3\2\2\2\u015d\u015e\5L\'\2\u015e\u015f\7\31\2\2\u015f"+
		"\u0160\5N(\2\u0160\u0161\7\32\2\2\u0161K\3\2\2\2\u0162\u0164\7\61\2\2"+
		"\u0163\u0165\5P)\2\u0164\u0163\3\2\2\2\u0164\u0165\3\2\2\2\u0165M\3\2"+
		"\2\2\u0166\u0169\5,\27\2\u0167\u0169\5V,\2\u0168\u0166\3\2\2\2\u0168\u0167"+
		"\3\2\2\2\u0169\u016c\3\2\2\2\u016a\u0168\3\2\2\2\u016a\u016b\3\2\2\2\u016b"+
		"O\3\2\2\2\u016c\u016a\3\2\2\2\u016d\u016e\7\25\2\2\u016e\u0173\5R*\2\u016f"+
		"\u0170\7\36\2\2\u0170\u0172\5R*\2\u0171\u016f\3\2\2\2\u0172\u0175\3\2"+
		"\2\2\u0173\u0171\3\2\2\2\u0173\u0174\3\2\2\2\u0174\u0176\3\2\2\2\u0175"+
		"\u0173\3\2\2\2\u0176\u0177\7\26\2\2\u0177Q\3\2\2\2\u0178\u0179\5:\36\2"+
		"\u0179S\3\2\2\2\u017a\u017b\7\62\2\2\u017bU\3\2\2\2\u017c\u0182\5`\61"+
		"\2\u017d\u017e\5T+\2\u017e\u017f\7\31\2\2\u017f\u0180\7\32\2\2\u0180\u0182"+
		"\3\2\2\2\u0181\u017c\3\2\2\2\u0181\u017d\3\2\2\2\u0182W\3\2\2\2\u0183"+
		"\u0186\7\24\2\2\u0184\u0185\7\35\2\2\u0185\u0187\7\24\2\2\u0186\u0184"+
		"\3\2\2\2\u0186\u0187\3\2\2\2\u0187\u0188\3\2\2\2\u0188\u0189\7#\2\2\u0189"+
		"\u018a\5Z.\2\u018aY\3\2\2\2\u018b\u018f\7\20\2\2\u018c\u018f\7\24\2\2"+
		"\u018d\u018f\5X-\2\u018e\u018b\3\2\2\2\u018e\u018c\3\2\2\2\u018e\u018d"+
		"\3\2\2\2\u018f[\3\2\2\2\u0190\u0196\5^\60\2\u0191\u0192\7\31\2\2\u0192"+
		"\u0193\5h\65\2\u0193\u0194\7\32\2\2\u0194\u0197\3\2\2\2\u0195\u0197\7"+
		"\34\2\2\u0196\u0191\3\2\2\2\u0196\u0195\3\2\2\2\u0197]\3\2\2\2\u0198\u0199"+
		"\7\f\2\2\u0199\u019a\7\27\2\2\u019a\u019b\5\f\7\2\u019b\u019c\7\30\2\2"+
		"\u019c_\3\2\2\2\u019d\u01a9\5b\62\2\u019e\u01a4\7\31\2\2\u019f\u01a3\5"+
		",\27\2\u01a0\u01a3\5V,\2\u01a1\u01a3\5J&\2\u01a2\u019f\3\2\2\2\u01a2\u01a0"+
		"\3\2\2\2\u01a2\u01a1\3\2\2\2\u01a3\u01a6\3\2\2\2\u01a4\u01a2\3\2\2\2\u01a4"+
		"\u01a5\3\2\2\2\u01a5\u01a7\3\2\2\2\u01a6\u01a4\3\2\2\2\u01a7\u01aa\7\32"+
		"\2\2\u01a8\u01aa\7\34\2\2\u01a9\u019e\3\2\2\2\u01a9\u01a8\3\2\2\2\u01aa"+
		"a\3\2\2\2\u01ab\u01ac\7\r\2\2\u01ac\u01ad\5\16\b\2\u01adc\3\2\2\2\u01ae"+
		"\u01af\7\24\2\2\u01afe\3\2\2\2\u01b0\u01b1\t\5\2\2\u01b1g\3\2\2\2\u01b2"+
		"\u01b4\5j\66\2\u01b3\u01b2\3\2\2\2\u01b4\u01b5\3\2\2\2\u01b5\u01b3\3\2"+
		"\2\2\u01b5\u01b6\3\2\2\2\u01b6i\3\2\2\2\u01b7\u01b8\5d\63\2\u01b8\u01b9"+
		"\7\33\2\2\u01b9\u01ba\5f\64\2\u01ba\u01bb\7\34\2\2\u01bbk\3\2\2\2-oqu"+
		"w\u0085\u0092\u0099\u00a2\u00a7\u00ac\u00b0\u00b6\u00ba\u00c9\u00d5\u00e1"+
		"\u00e3\u00ea\u00ef\u00f6\u00f8\u0108\u010a\u0112\u0114\u0118\u0125\u012e"+
		"\u013c\u0141\u015b\u0164\u0168\u016a\u0173\u0181\u0186\u018e\u0196\u01a2"+
		"\u01a4\u01a9\u01b5";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}