export const componentStringNameToComponentProperty = (name: string): [string, string | null] => {
    const splitted = name.split('-')

    return [splitted[0], splitted[1] || null]
}
