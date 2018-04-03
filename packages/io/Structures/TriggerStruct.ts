import ASData from "asdata";
import { EffectStruct, readEffect } from "./EffectStruct";
import { ConditionStruct, readCondition } from "./ConditionStruct";
import { repeat } from "../utils/StructureHelpers";

export type TriggerStruct = {
  /**
   * Is trigger enabled at start ?
   */
  isEnabled: number;
  /**
   * Should trigger loop ?
   */
  isLoop: number;
  /**
   * String Id
   */
  strId: number;
  /**
   * Description
   */
  desc: number;
  /**
   * Description order
   */
  descOrd: number;
  /**
   * After which amount of time to start
   */
  timeStart: number;
  /**
   * Text
   */
  text: string;
  /**
   * Trigger name, only 44 chars are displayed in UI
   */
  name: string;
  effectCount: number;
  effects: EffectStruct[];
  effectsOrd: number[];
  conditionCount: number;
  conditions: ConditionStruct[];
  conditionsOrd: number[];
};

export const readTrigger = (data: ASData): TriggerStruct => {
  const partial = {
    isEnabled: data.getUint32(),
    isLoop: data.getInt8(),
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
