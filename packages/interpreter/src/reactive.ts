import { reactive, effect as createEffect, computed, ShallowRef, shallowRef } from "@vue/reactivity"


export function useState<T extends Number | boolean | object | Function>(initialValue: T) {


    let _val = reactive<{ value: T }>({ value: initialValue })

    const setVal = (val: T) => {
        (_val as any).value = val;
    }

    return [() => _val.value, setVal] as [() => T, (val: T) => void];
}

export function useEffect<T extends () => unknown>(effect: T) {
    return createEffect(effect);
}


export function useMemo<T extends (v: unknown) => unknown>(memo: T) {
    return computed(memo) as { value: ReturnType<T> };
}
