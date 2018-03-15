import ASData from 'asdata';
export { ScenarioStruct } from './Structures/ScenarioStruct';
import { readScenario as readScenarioStruct } from './Structures/ScenarioStruct';

/**
 * Read scenario file
 * @param file - scenario.scx or scenario.aoe2
 */
export const readScenario = (file: Buffer) => {
  const asdata = new ASData(file);
  return readScenarioStruct(asdata);
};
