declare module "monaco-editor/esm/vs/editor/common/core/range.js" {
    export const Range: Awaited<typeof import("monaco-editor/esm/vs/editor/editor.api")>["Range"];
    export type Range = InstanceType<typeof import("monaco-editor/esm/vs/editor/editor.api")["Range"]>;
}

declare module "monaco-editor/esm/vs/editor/common/core/position.js" {
    export const Position: Awaited<typeof import("monaco-editor/esm/vs/editor/editor.api")>["Position"];
    export type Position = InstanceType<typeof import("monaco-editor/esm/vs/editor/editor.api")["Position"]>;
}
