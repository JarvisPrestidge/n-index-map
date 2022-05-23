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

/**
 * Type guard to check if value is an object
 *
 * @param {*} value
 * @returns {*}  {value is object}
 */
export const isObject = (value: any): value is object => {
    return typeof value === "object";
};

/**
 * Type guard to check if value is a string
 *
 * @param {*} value
 * @returns {*}  {value is string}
 */
export const isString = (value: any): value is string => {
    return typeof value === "string";
};

/**
 * Type guard to check if value is a number
 *
 * @param {*} value
 * @returns {*}  {value is number}
 */
export const isNumber = (value: any): value is number => {
    return typeof value === "number";
};
