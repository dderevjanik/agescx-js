import readScenarioData from './ReadScenario';
import ASDataView from './ASDataView';
import {createASDataView} from './Utils/FileUtils';

declare var require; // for NodeJS enviroment

/**
 * Read uploaded scenario
 * @desc this function works only in web browser enviroment
 * @param {ArrayBuffer} path - path to file
 * @return {Scenario}
 */
export const readScenario = (arrayBuffer: ArrayBuffer, debug: boolean = false) =>
    readScenarioData(createASDataView(arrayBuffer), debug);

/**
 * Read scenario from a path
 * @desc this function works only in NodeJS enviroment
 * @param {string} path - path to file
 * @param {boolean} debug - turn on/off console logs
 * @return {Scenario}
 */
export const readScenarioNode = (path: string, debug: boolean = false) => {
    const fs = require('fs');
    const file = fs.readFileSync(path);

    return readScenarioData(createASDataView(file.buffer), debug);
};

export default {
    readScenario: readScenario,
    readScenarioNode: readScenarioNode
};

console.log('starting from node enviroment');