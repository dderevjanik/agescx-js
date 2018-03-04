import IScenario from './../Interfaces/IScenario';
import ITrigger from './../Interfaces/ITrigger';
import { readEffect } from './Effect';
import { readCondition } from './Condition';
import { readStructures } from './../Utils/RWUtils';
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

  const effectsCount: number = data.getUint32();
  trigger.effects = readStructures(effectsCount, () => readEffect(data));
  trigger.effectsOrd = readStructures(effectsCount, () => data.getInt32());

  const conditionsCount: number = data.getUint32();
  trigger.conditions = readStructures(conditionsCount, () => readCondition(data));
  trigger.conditionsOrd = readStructures(conditionsCount, () => data.getInt32());

  return trigger;
};

export default {
  readTrigger: readTrigger
};
