import set from "core-js/features/set"

export { };

declare global {
    interface Set<T> {
        difference<T>(other: Iterable<T>): Set<T>;
        intersection<T>(other: Iterable<T>): Set<T>;
        isDisjointFrom<T>(other: Iterable<T>): boolean;
        isSubsetOf<T>(other: Iterable<T>): boolean;
        isSupersetOf<T>(other: Iterable<T>): boolean;
        symmetricDifference<T>(other: Iterable<T>): Set<T>;
        union<T>(other: Iterable<T>): Set<T>;
    }
}