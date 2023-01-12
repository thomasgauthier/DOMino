grammar ecss;

program: (define+)? system+;

system: systemHeader systemBody;

systemHeader: queryExpression;

//componentAttributes componentEvents;

// componentQueries: (componentQuery+ | modifiedComponentQuery);
componentSelector:
	LBRACKET (componentId | componentAs | componentAttribute) RBRACKET;
// boundedSelector: queryvar componentSelector+; modifiedComponentQuery: (setoperator '('
// componentQuery+ ')'); componentQuery: modifiedComponentQuery? selector modifiedComponentQuery*;
// selector: boundedSelector | componentSelector;
componentId: Identifier;

// queryExpression: queryTerm (setoperator LPAREN queryTerm RPAREN)*; queryTerm: queryFactor
// (setoperator LPAREN queryFactor RPAREN)*; queryFactor: componentSelector+;

queryExpression:
	intersectionQuery? (
		setoperator LPAREN queryOperationParameters RPAREN
	)*;
queryOperationParameters: (intersectionQuery | queryExpression) (
		',' (intersectionQuery | queryExpression)
	)*;
intersectionQuery: componentSelector+;
// queryExpression: (','? (intersectionQuery | componentSelector)) | queryOperation;
// intersectionQuery: componentSelector+; queryOperation: intersectionQuery? ((setoperator
// setOperation))+; setOperation: '(' queryExpression* ')';

setoperator: setOperatorNot | setOperatorAny;
setOperatorNot: ':not';
setOperatorAny: ':any';

componentAs: (componentId 'as' componentId);

componentAttributes:
	componentAttribute (COMMA componentAttribute)*;
componentAttribute: componentId ASSIGN componentAttributeValue;
componentAttributeValue: NUMBER | Identifier | queryvar;

var: DOLLAR Identifier;
queryvar: QUESTION Identifier;

systemBody:
	LCURLY (componentStatements | atRule | eventHandler)* RCURLY;

componentStatements: componentStatement+;
componentStatement:
	componentId COLON (function | expression) SEMI;
function: 'max' '(' functionParameters ')';
functionParameters: (expression | function | (queryvar | literal | stringLiteral)) (
		',' (expression | function | (queryvar | literal | stringLiteral))
	)*;

mathoperatoradditions: '+' | '-';
mathoperatorfactors: '*' | '/';

expression: term (mathoperatoradditions term)*;
term: factor (mathoperatorfactors factor)*;
factor:
	var
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

// eventType: EventIdentifier;

atRuleHeader: AtRuleIdentifier;
atRule: query | (atRuleHeader LCURLY RCURLY);

// componentAction: action;

// action: LCURLY componentStatements RCURLY | EXCLAMATION actionCall | variableAssignment |
// deferredAction;

// actionCall: Identifier LPAREN actionCallParams RPAREN; actionCallParams: actionCallParam (COMMA
// actionCallParam)*; actionCallParam: NUMBER | Identifier | variableAssignment;

variableAssignment:
	Identifier (DOT Identifier)? ASSIGN variableAssignmentValue;
variableAssignmentValue:
	NUMBER
	| Identifier
	| variableAssignment;

// deferredAction: '@defer' LCURLY componentStatements RCURLY;

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

// defineBody : LCURLY d
componentPropertyId: Identifier;
type: 'boolean' | 'number';

defineDeclarations: defineDeclaration+;
defineDeclaration: componentPropertyId COLON type SEMI;

NUMBER: '-'? ([0-9]+ | [0-9]* '.' [0-9]+);

TRUE: 'true';
FALSE: 'false';
UNSET: 'unset';

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

COMMENT: '//' .*? '\n' -> skip;
WS: [ \t\r\n]+ -> skip;
