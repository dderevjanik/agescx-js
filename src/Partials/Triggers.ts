import IScenario from './../Interfaces/IScenario';
import {readTrigger} from './Trigger';
import ASData from 'asdata';

export const readTriggers = (scenario: IScenario, data: ASData): void => {
    const count: number = data.getUint32();

    for(let i: number = 0; i < count; i++) {
        scenario.triggers.push(readTrigger(scenario, data));
    }

};

export default {
    readTriggers: readTriggers
};
