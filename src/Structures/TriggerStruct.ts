import ASData from 'asdata';
import { EffectStruct, readEffect } from './EffectStruct';
import { ConditionStruct, readCondition } from './ConditionStruct';

export type Trigger = {
  enable: number;
  loop: number;
  strId: number;
  desc: number;
  descOrd: number;
  timeStart: number;
  text: string;
  name: string;
  effectCount: number;
  effects: EffectStruct[];
  effectsOrd: number[];
  conditionCount: number;
  conditions: ConditionStruct[];
  conditionsOrd: number[];
};

const repeat = <T>(callback: () => T, count: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(callback());
  }
  return result;
};

export const readTrigger = (data: ASData): Trigger => {
  const partial = {
    enable: data.getUint32(),
    loop: data.getInt8(),
    strId: data.getInt32(),
    desc: data.getInt8(),
    descOrd: data.getUint32(),
    timeStart: data.getUint32(),
    text: data.getStr32(),
    name: data.getStr32()
  };
  const effectCount = data.getUint32();
  const effects = {
    effectCount,
    effects: repeat(() => readEffect(data), effectCount),
    effectsOrd: repeat(() => data.getInt32(), effectCount)
  };

  const conditionCount = data.getUint32();
  const conditions = {
    conditionCount,
    conditions: repeat(() => readCondition(data), conditionCount),
    conditionsOrd: repeat(() => data.getInt32(), conditionCount)
  };
  return Object.assign(partial, Object.assign(effects, conditions));
};
