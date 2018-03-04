/* tslint:disable:no-any */
import readScenarioData from './ReadScenario';
import { createASDataView } from './Utils/FileUtils';
import IScenario from './Interfaces/IScenario';

declare const require; // for NodeJS enviroment

/**
 * Read uploaded scenario
 * @desc this function works only in web browser enviroment
 * @param {ArrayBuffer} path - path to file
 * @return {Scenario}
 */
export const readScenario = (arrayBuffer: ArrayBuffer): IScenario => readScenarioData(createASDataView(arrayBuffer));

/**
 * Read scenario from a path
 * @desc this function works only in NodeJS enviroment
 * @param {string} path - path to file
 * @param {boolean} debug - turn on/off console logs
 * @return {Scenario}
 */
export const readScenarioFile = (path: string): IScenario => {
  const fs = require('fs');
  const file: any = fs.readFileSync(path);
  return readScenarioData(createASDataView(file));
};

export default {
  readScenario: readScenario,
  readScenarioFile: readScenarioFile
};
