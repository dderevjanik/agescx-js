import IScenario from './../Interfaces/IScenario';
import ITrigger from './../Interfaces/ITrigger';
import {readEffect} from './Effect';
import {readCondition} from './Condition';
import ASData from 'asdata';

export const readTrigger = (scenario: IScenario, data: ASData): ITrigger => {
    const trigger: ITrigger = {
        enable: data.getUint32(),
        loop: data.getInt8(),
        strId: data.getInt32(),
        desc: data.getInt8(),
        descOrd: data.getUint32(),
        timeStart: data.getUint32(),
        text: data.getStr32(),
        name: data.getStr32(),

        effects: [],
        effectsOrd: [],
        conditions: [],
        conditionsOrd: []
    };

    console.log(trigger);

    const effectsCount: number = data.getUint32();
    for(let i: number = 0; i < effectsCount; i++) {
        trigger.effects.push(readEffect(data));
    }
    for(let i: number = 0; i < effectsCount; i++) {
        trigger.effectsOrd.push(data.getInt32());
    }

    const conditionsCount: number = data.getUint32();
    for(let i: number = 0; i < conditionsCount; i++) {
        trigger.conditions.push(readCondition(data));
    }
    for(let i: number = 0; i < conditionsCount; i++) {
        trigger.conditionsOrd.push(data.getInt32());
    }

    return trigger;
};
