import ASData from 'asdata';
import { readLocation } from './LocationStruct';
import { readArea } from './AreaStruct';

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
  instructionId: number;
  soundId: number;
  instrTime: number;
  location: [number, number];
  area: [number, number, number, number];
  unitGroup: number;
  unitType: number;
  instrPanel: number;
  instrText: string;
  soundFile: string;
  unitIDs: number[];
};

const repeat = <T>(callback: () => T, count: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(callback());
  }
  return result;
};

export function readEffect(data: ASData): EffectStruct {
  const partial = {
    type: data.getInt32(),
    check: data.getInt32(),
    aiGoal: data.getInt32(),
    amount: data.getInt32(),
    resource: data.getInt32(),
    diplomacy: data.getInt32(),
    unitsCount: data.getInt32(),
    unitId: data.getInt32(),
    unitName: data.getInt32(),
    source: data.getInt32(),
    target: data.getInt32(),
    tech: data.getInt32(),
    instructionId: data.getInt32(),
    soundId: data.getInt32(),
    instrTime: data.getInt32(),
    location: readLocation(data),
    area: readArea(data),
    unitGroup: data.getInt32(),
    unitType: data.getInt32(),
    instrPanel: data.getInt32(),
    instrText: data.getStr32(),
    soundFile: data.getStr32()
  };
  const unitIDs = repeat(() => data.getInt32(), partial.unitsCount);
  return Object.assign(partial, { unitIDs });
}
