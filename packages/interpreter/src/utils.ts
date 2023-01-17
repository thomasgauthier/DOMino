export const componentStringNameToComponentProperty = (name: string): [string, string | null] => {
    const splitted = name.split('-')

    return [splitted[0], splitted[1] || null]
}

export const constrain = (n, low, high) => {
    return Math.max(Math.min(n, high), low);
};

export const map = (n: number, start1: number, stop1: number, start2: number, stop2: number, withinBounds?: boolean) => {
    const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    if (!withinBounds) {
        return newval;
    }
    if (start2 < stop2) {
        return constrain(newval, start2, stop2);
    } else {
        return constrain(newval, stop2, start2);
    }
};