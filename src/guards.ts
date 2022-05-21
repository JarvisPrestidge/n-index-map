/**
 * Type guard to check value is defined
 *
 * @template T
 * @param {(T | undefined | null)} value
 * @returns {*}  {value is T}
 */
export const isDefined = <T>(value: T | undefined | null): value is T => {
    return typeof value !== "undefined" && value !== null;
};
