import { JSXElement } from "./react2"

export type FunctionComponent<T> = (props: T & { children?: any[] }) => JSXElement

export type EntityNodeEvaluatorProps<T> = T & {setEvaluate: (evaluate: () => (eid: number) => any) => void }
export type EntityNodeEvaluator<T> = FunctionComponent<EntityNodeEvaluatorProps<T>>

export type NodeEvaluatorProps<T> = T & {setEvaluate: (evaluate: () => () => void) => void }
export type NodeEvaluator<T> = FunctionComponent<NodeEvaluatorProps<T>>