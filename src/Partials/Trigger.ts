import IScenario from './../Interfaces/IScenario';
import ITrigger from './../Interfaces/ITrigger';
import {readEffect} from './Effect';
import {readCondition} from './Condition';
import ASDataView from './../ASDataView';

export const readTrigger = (scenario: IScenario, data: ASDataView): ITrigger => {
    const trigger: ITrigger = {
        enable: data.getUint32()[0],
        loop: data.getInt8()[0],
        strId: data.getInt32()[0],
        desc: data.getInt8()[0],
        descOrd: data.getUint32()[0],
        timeStart: data.getUint32()[0],
        text: data.getStr32()[0],
        name: data.getStr32()[0],

        effects: [],
        effectsOrd: [],
        conditions: [],
        conditionsOrd: []
    };

    console.log(trigger);

    const effectsCount: number = data.getUint32()[0];
    for(let i: number = 0; i < effectsCount; i++) {
        trigger.effects.push(readEffect(data));
    }
    for(let i: number = 0; i < effectsCount; i++) {
        trigger.effectsOrd.push(data.getInt32()[0]);
    }


    const conditionsCount: number = data.getUint32()[0];
    for(let i: number = 0; i < conditionsCount; i++) {
        trigger.conditions.push(readCondition(data));
    }
    for(let i: number = 0; i < conditionsCount; i++) {
        trigger.conditionsOrd.push(data.getInt32()[0]);
    }

    return trigger;
};
