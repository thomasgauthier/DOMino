grammar ecss;

program: (define+)? (keyframe | system)+;

keyframe:
	'@keyframes' Identifier '{' 'from' '{' componentStatements '}' (
		'to' '{' componentStatements '}'
	)? '}';

system: systemHeader systemBody;

systemHeader: queryExpression;

componentSelector:
	LBRACKET (componentId | componentAs | componentAttribute) RBRACKET;
componentId: Identifier;

queryExpression:
	intersectionQuery? (
		setoperator LPAREN queryOperationParameters RPAREN
	)*;
queryOperationParameters: (intersectionQuery | queryExpression) (
		',' (intersectionQuery | queryExpression)
	)*;
intersectionQuery: componentSelector+;

setoperator: setOperatorNot | setOperatorAny;
setOperatorNot: ':not';
setOperatorAny: ':any';

componentAs: (componentId 'as' componentId);

componentAttributes:
	componentAttribute (COMMA componentAttribute)*;
componentAttribute:
	componentId componentAttributeComparator componentAttributeValue;
componentAttributeComparator:
	ASSIGN
	| LESSTHAN
	| GREATERTHAN
	| LESSTHANOREQUAL
	| GREATERTHANOREQUAL;
componentAttributeValue: NUMBER | Identifier | queryvar;

var: DOLLAR Identifier;
queryvar: QUESTION Identifier;

systemBody:
	LCURLY (componentStatements | atRule | eventHandler)* RCURLY;

statementPlaceHolder: ':' Identifier?;

componentStatements: componentStatement+;
componentStatement:
	componentId (
		statementPlaceHolder
		| ( COLON (expression | function))
	) SEMI;

function: functionName '(' functionParameters ')';
functionName: Identifier;
// 'max' | 'min' | 'sin' | 'cos' | 'map' | 'abs' | 'sign';

functionParameters: (
		expression
		| function
		| (queryvar | literal | stringLiteral)
	) (
		',' (
			expression
			| function
			| (queryvar | literal | stringLiteral)
		)
	)*;

mathoperatoradditions: '+' | '-';
mathoperatorfactors: '*' | '/' | '%';

expression: term (mathoperatoradditions term)*;
term: factor (mathoperatorfactors factor)*;
factor:
	function
	| var
	| queryvar
	| UNSET
	| literal
	| rgb
	| rgba
	| LPAREN expression RPAREN;

literal: NUMBER | boolval | stringLiteral;

stringLiteral: STRING_LITERAL;

rgb: 'rgb(' expression ',' expression ',' expression ')';
rgba:
	'rgba(' expression ',' expression ',' expression ',' expression ')';

boolval: TRUE | FALSE | EXCLAMATION boolval;

eventHandler: eventHandlerHeader LCURLY eventHandlerBody RCURLY;

eventHandlerHeader: EventIdentifier arguments?;
eventHandlerBody: (componentStatements | atRule)*;
arguments: '(' (argument (',' argument)*) ')';
argument: expression;

atRuleHeader: AtRuleIdentifier;
atRule: query | (atRuleHeader LCURLY RCURLY);

variableAssignment:
	Identifier (DOT Identifier)? ASSIGN variableAssignmentValue;
variableAssignmentValue:
	NUMBER
	| Identifier
	| variableAssignment;

define:
	defineHeader ((LCURLY defineDeclarations RCURLY) | SEMI);
defineHeader: '@define' LBRACKET componentId RBRACKET;

query:
	queryHeader (
		(
			LCURLY (componentStatements | atRule | eventHandler)* RCURLY
		)
		| SEMI
	);
queryHeader: '@query' queryExpression;

componentPropertyId: Identifier;
type: 'boolean' | 'number';

defineDeclarations: defineDeclaration+;
defineDeclaration: componentPropertyId COLON type SEMI;

NUMBER: '-'? ([0-9]+ | [0-9]* '.' [0-9]+);

TRUE: 'true';
FALSE: 'false';
UNSET: 'unset';

Identifier: IdentifierStart IdentifierPart*;

fragment UnicodeEscapeSequence:
	'u' HexDigit HexDigit HexDigit HexDigit
	| 'u' '{' HexDigit HexDigit+ '}';

fragment IdentifierPart:
	IdentifierStart
	| [\p{Mn}]
	| [\p{Nd}]
	| [\p{Pc}]
	| '\u200C'
	| '\u200D'
	| '-';

fragment IdentifierStart: [\p{L}] | '\\' UnicodeEscapeSequence;



LPAREN: '(';
RPAREN: ')';
LBRACKET: '[';
RBRACKET: ']';
LCURLY: '{';
RCURLY: '}';
COLON: ':';
SEMI: ';';
DOT: '.';
COMMA: ',';
PLUS: '+';
MINUS: '-';
MULT: '*';
DIV: '/';
ASSIGN: '=';
LESSTHAN: '<';
GREATERTHAN: '>';
LESSTHANOREQUAL: '<=';
GREATERTHANOREQUAL: '>=';
EXCLAMATION: '!';
QUESTION: '?';
DOLLAR: '$';
AT: '@';
QUOTE: '"';

STRING_LITERAL: QUOTE (ESC | ~["\\])* QUOTE;

ESC: '\\' (["\\/bfnrt] | UNICODE);

UNICODE: 'u' HEX HEX HEX HEX;

HEX: '0' ..'9' | 'a' ..'f' | 'A' ..'F';

fragment HexDigit: [_0-9a-fA-F];

EventIdentifier: ':' Identifier;
AtRuleIdentifier: '@' Identifier;

COMMENT: '//' .*? '\n' -> skip;
WS: [ \t\r\n]+ -> skip;
