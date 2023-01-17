import { ASTNode } from "ecss-parser/dist/ast-types";
import lineColumn from "line-column"

export interface LineColumnInfo {
    line: number;
    col: number;
}

export const getMarkedTextLocFromAstNode = (code: string, loc: ASTNode["loc"]): [{ line: number; ch: number }, { line: number; ch: number }] => {
    const ln = lineColumn(code);
    const from = ln.fromIndex(loc!.start.offset)!
    const to = ln.fromIndex(loc!.end.offset)!

    return [{ line: from.line - 1, ch: from.col - 1 }, { line: to.line - 1, ch: to.col - 1 }]

}



/**
 * Return the last portion of a `path`. Trailing directory separators are ignored.
 * @param path to process
 * @param ext of path directory
 */
export function basename(path: string, ext = ""): string {
    if (ext !== undefined && typeof ext !== "string") {
      throw new TypeError('"ext" argument must be a string');
    }
  
    let start = 0;
    let end = -1;
    let matchedSlash = true;
    let i: number;
  
    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return "";
      let extIdx = ext.length - 1;
      let firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        const code = path.charCodeAt(i);
        if (code == 47) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, mark this as the end of our
            // path component in case we don't match a whole suffix
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
            end = firstNonSlashEnd;
          }
          if (extIdx >= 0) {
            // Try to match the explicit suffix
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched whole suffix, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Suffix character does not match, so bail out early
              // from checking rest of characters
              extIdx = -1;
            }
          }
        }
      }
  
      if (end === -1) return "";
      if (start === end) end = firstNonSlashEnd;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) == 47) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }
  
      if (end === -1) return "";
      return path.slice(start, end);
    }
  }