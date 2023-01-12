export type Program = {
    type: 'Program',
    components: ComponentDefinition[];
    systems: System[]
} & ASTNode

export type ComponentDefinition = {
    type: 'ComponentDefinition',
    name: string,
    properties: Property[]
} & ASTNode

export type Property = {
    type: 'Property',
    name: string,
    propertyType: "i8" | "ui8" | "ui8c" | "i16" | "ui16" | "i32" | "ui32" | "f32" | "f64" | "eid" | "number" | "boolean";
} & ASTNode

export type System = {
    type: 'System',
    query: Query,
    body: Block
} & ASTNode

export type AtQuery = {
    type: 'AtQuery',
    query: Query,
    body: Block
} & ASTNode

export type Block = {
    type: 'Block',
    children: (ComponentStatement | EventHandler | AtQuery)[]
} & ASTNode

export type EventHandler = {
    type: 'EventHandler',
    event: string,
    body: Block
} & ASTNode

export type ComponentStatement = {
    type: 'ComponentStatement',
    declaration: Declaration
} & ASTNode

export type Function = {
    type: 'Function',
    arguments: FunctionArgumentList
} & ASTNode

export type FunctionArgumentList = {
    type: "FunctionArgumentList",
    arguments: (Literal | StringLiteral | BinaryExpression | Identifier | Function)[]
} & ASTNode

export type Declaration = {
    type: 'Declaration',
    componentIdentifier: Identifier,
    value: Literal | StringLiteral | BinaryExpression | Identifier | Function
} & ASTNode

export type BinaryExpression = {
    type: 'BinaryExpression',
    left: BinaryExpression | Literal | StringLiteral | Identifier,
    right: BinaryExpression | Literal | StringLiteral | Identifier,
    operator: '+' | '-' | '*' | '/'
} & ASTNode

export type Literal = {
    type: 'Literal',
    value: string
} & ASTNode

export type StringLiteral = {
    type: 'StringLiteral',
    value: string
} & ASTNode

export type Query = {
    type: "Query",
    selector: BinarySelector | CompoundSelector | WildcardSelector,
    text: string,
} & ASTNode

export type BinarySelector = {
    type: "BinarySelector",
    left: BinarySelector | CompoundSelector | WildcardSelector,
    right: OperatorArgumentList,
    operator: ':not' | ':any'
} & ASTNode

export type WildcardSelector = {
    type: "WildcardSelector",
} & ASTNode

export type CompoundSelector = {
    type: "CompoundSelector",
    selectors: ComponentSelector[],
} & ASTNode

export type OperatorArgumentList = {
    type: "OperatorArgumentList",
    selectors: (CompoundSelector | BinarySelector)[],
} & ASTNode

export type ComponentSelector = {
    type: 'ComponentSelector',
    boundedEntity?: Identifier,
    identifier: Identifier,
    as?: Identifier,
    matcher?: '=',
    value?: Identifier | Literal | StringLiteral,
} & ASTNode

export type Identifier = {
    type: 'Identifier',
    name: string
} & ASTNode

type NodeType = "Program" | "System" | "Block" | "EventHandler" | "ComponentStatement" | "AtQuery" | "ComponentDefinition" | "Property" | "WildcardSelector" | "BinarySelector" | "OperatorArgumentList" | "CompoundSelector" |  "Function" | "FunctionArgumentList" | "Declaration" | "BinaryExpression" | "Literal" | "StringLiteral" | "Query" | "ComponentSelector" | "Identifier";

export interface ASTNode {
    type: NodeType,
    loc?: {
        start: {
            line: number
            column: number
            offset: number
        },
        end: {
            line: number
            column: number
            offset: number
        }
    }
}
