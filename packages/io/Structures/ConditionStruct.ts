import ASData from 'asdata';
import { readArea, AreaStruct } from './AreaStruct';

export type ConditionStruct = {
  type: number;
  isChecked: number;
  amount: number;
  resourceId: number;
  unitObject: number;
  unitId: number;
  unitName: number;
  sourcePlayer: number;
  techId: number;
  elapsed: number;
  unknown1: number;
  area: AreaStruct;
  unitGroup: number;
  unitType: number;
  aiSignal: number;
};

export function readCondition(data: ASData) {
  return {
    type: data.getInt32(),
    isChecked: data.getInt32(),
    amount: data.getInt32(),
    resourceId: data.getInt32(),
    unitObject: data.getInt32(),
    unitId: data.getInt32(),
    unitName: data.getInt32(),
    sourcePlayer: data.getInt32(),
    techId: data.getInt32(),
    elapsed: data.getInt32(),
    unknown1: data.getInt32(),
    area: readArea(data),
    unitGroup: data.getInt32(),
    unitType: data.getInt32(),
    aiSignal: data.getInt32()
  };
}
