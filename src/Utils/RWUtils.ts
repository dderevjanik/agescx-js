import IScenario from './../interfaces/IScenario';
import ASData from 'asdata';

export const readStructures = function<T>(count: number, readFunction: () => T): Array<T> {
    const arr: Array<T> = [];
    for (let i: number = 0; i < count; i++) {
        arr.push(readFunction());
    }
    return arr;
};

export default {
    readStructures: readStructures
};
