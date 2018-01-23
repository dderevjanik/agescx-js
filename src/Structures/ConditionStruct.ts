import ASData from "asdata";
import { readArea, AreaStruct } from "./AreaStruct";

export type ConditionStruct = {
  type: number;
  check: number;
  amount: number;
  resource: number;
  unitObject: number;
  unitId: number;
  unitName: number;
  source: number;
  tech: number;
  timer: number;
  unknown1: number;
  area: AreaStruct;
  unitGroup: number;
  unitType: number;
  aiSignal: number;
};

export function readCondition(data: ASData) {
  return {
    type: data.getInt32(),
    check: data.getInt32(),
    amount: data.getInt32(),
    resource: data.getInt32(),
    unitObject: data.getInt32(),
    unitId: data.getInt32(),
    unitName: data.getInt32(),
    source: data.getInt32(),
    tech: data.getInt32(),
    timer: data.getInt32(),
    unknown1: data.getInt32(),
    area: readArea(data),
    unitGroup: data.getInt32(),
    unitType: data.getInt32(),
    aiSignal: data.getInt32()
  };
}
