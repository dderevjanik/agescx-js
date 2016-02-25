import IScenario from './../Interfaces/IScenario';
import ITrigger from './../Interfaces/ITrigger';
import {readTrigger} from './Trigger';
import ASDataView from './../ASDataView';

export const readTriggers = (scenario: IScenario, data: ASDataView): void => {
    const count: number = data.getUint32()[0];

    for(let i: number = 0; i < count; i++) {
        scenario.triggers.push(readTrigger(scenario, data));
    }

};
