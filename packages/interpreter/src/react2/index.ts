export type JSXElement = [string | ((...args: any) => JSXElement | void), object & { children: any[] }]

function isJSX(input: any) {
    return Array.isArray(input) && input.length >= 2 && (typeof input[0] === 'string' || typeof input[0] == 'function') && typeof input[1] === 'object'
}

export default (() => {
    const hooks: any[] = []
    let idx = 0;

    function useState<T>(initialValue: T) {
        const state = hooks[idx] || initialValue;

        const _idx = idx;

        const setState = (newValue: T) => {
            hooks[_idx] = newValue;
        }

        idx++;

        return [state, setState] as [T, (val: T) => void]
    }

    function useEffect(cb: Function, depArray: any[]) {
        const oldDeps = hooks[idx];

        let hasChanged = true;
        if (oldDeps) {
            hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]))
        }

        if (hasChanged) {
            cb();
        }

        hooks[idx] = depArray;
        idx++
    }

    let level = 0;
    let levelToPopCtx = new Map<number, Function[]>();
    const createContext = <T>(initialValue?: T) => {
        const val = typeof initialValue !== 'undefined' ? initialValue : null;
        let vals: (T | null)[] = [val];

        const context = {
            Provider: ({ value, children }: { value: T, children?: any | any[] }): JSXElement => {
                vals.push(value)

                if (!levelToPopCtx.has(level)) {
                    levelToPopCtx.set(level, []);
                }

                levelToPopCtx.set(level, [...levelToPopCtx.get(level)!, () => {
                    vals.pop()
                }])

                const props = {
                    children: children || []
                }

                return [() => { }, { ...props }];
            },
            read() {
                return vals.at(-1) as T;
            }
        }

        return context;
    }


    type NotNull<T> = T extends Function ? never : T;

    const useContext = <T extends { read: () => any }>(ctx: T) => {
        return (ctx.read()! as ReturnType<typeof ctx["read"]>)!;
    }

    function useMemo<T extends (...args: any) => any>(cb: T, depArray: any[]): ReturnType<T> {
        const data = hooks[idx];

        let memo;

        if (data?.length && data.length >= 2) {
            const [_, oldDeps] = data
            let hasChanged = true;
            if (oldDeps) {
                hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]))
            }

            if (hasChanged) {
                memo = [cb, depArray];
                hooks[idx] = memo
            }
        } else {
            memo = [cb, depArray];
            hooks[idx] = memo

        }

        idx++
        return memo[0]()
    }

    const render = ([elem, props]: JSXElement) => {
        idx = 0;
        level = 0;

        const realRender = ([elem, props]: JSXElement) => {
            if (typeof elem === 'function') {

                level++;
                const rendered = elem(props)

                if (Array.isArray(rendered)) {
                    realRender(rendered)
                    return;
                }

                if (levelToPopCtx.has(level)) {
                    levelToPopCtx.get(level)?.forEach(e => e())
                    levelToPopCtx.set(level, [])
                }

                level--;

            }


            if (props?.children?.length) {
                props.children.forEach(child => {
                    if (isJSX(child)) {
                        realRender(child as unknown as JSXElement)
                    }
                })

                if (props.children?.length && isJSX(props.children)) {
                    realRender(props.children as unknown as JSXElement)
                }
            }
        }

        realRender([elem, props]);
    };

    return {

        render,
        useState,
        createContext,
        useContext,
        useEffect,
        useMemo
    }

})()



