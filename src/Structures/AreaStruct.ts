import ASData from "asdata";

export type AreaStruct = [number, number, number, number];

export function readArea(data: ASData): AreaStruct {
  return [data.getInt32(), data.getInt32(), data.getInt32(), data.getInt32()];
}
