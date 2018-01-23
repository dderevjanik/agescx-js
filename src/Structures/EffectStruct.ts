import ASData from "asdata";
import { readLocation } from "./LocationStruct";
import { readArea } from "./AreaStruct";

export type EffectStruct = {
  type: number;
  check: number;
  aiGoal: number;
  amount: number;
  resource: number;
  diplomacy: number;
  unitsCount: number;
  unitId: number;
  unitName: number;
  source: number;
  target: number;
  tech: number;
  instrId: number;
  soundId: number;
  instrTime: number;
  location: [number, number];
  area: [number, number, number, number];
  unitGroup: number;
  unitType: number;
  instrPanel: number;
  instrText: string;
  soundFile: string;
};

export function readEffect(data: ASData): EffectStruct {
  const type = data.getInt32();
  const check = data.getInt32();
  const aiGoal = data.getInt32();
  const amount = data.getInt32();
  const resource = data.getInt32();
  const diplomacy = data.getInt32();
  const unitsCount = data.getInt32();

  return {
    type,
    check,
    aiGoal,
    amount,
    resource,
    diplomacy,
    unitsCount,
    unitId: data.getInt32(),
    unitName: data.getInt32(),
    source: data.getInt32(),
    target: data.getInt32(),
    tech: data.getInt32(),
    instrId: data.getInt32(),
    soundId: data.getInt32(),
    instrTime: data.getInt32(),
    location: readLocation(data),
    area: readArea(data),
    unitGroup: data.getInt32(),
    unitType: data.getInt32(),
    instrPanel: data.getInt32(),
    instrText: data.getStr32(),
    soundFile: data.getStr32()
    // TODO
  };
}
