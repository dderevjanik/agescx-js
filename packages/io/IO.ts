import ASData from 'asdata';
import { readScenario as readScenarioStruct } from './Structures/ScenarioStruct';

export const readScenario = (file: Buffer) => {
  const asdata = new ASData(file);
  return readScenarioStruct(asdata);
};
