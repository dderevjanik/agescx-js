import IScenario from './../Interfaces/IScenario';
import {readTrigger} from './Trigger';
import {readStructures} from './../Utils/RWUtils';
import ASData from 'asdata';

export const readTriggers = (scenario: IScenario, data: ASData): void => {
    const count: number = data.getUint32();
    scenario.triggers = readStructures(count, () => readTrigger(scenario, data));
};

export default {
    readTriggers: readTriggers
};
