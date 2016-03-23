/**
 * Read structures
 * @param {number} count - number of structures to read
 * @param {function} readFunction - a function, which return an readed structure
 * @return {Array<T>}
 */
export const readStructures = <T>(count: number, readFunction: () => T): Array<T> => {
    const arr: Array<T> = [];
    for (let i: number = 0; i < count; i++) {
        arr.push(readFunction());
    }
    return arr;
};

export default {
    readStructures: readStructures
};
