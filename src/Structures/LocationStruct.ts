import ASData from "asdata";

export type LocationStruct = [number, number];

export function readLocation(data: ASData): LocationStruct {
  return [data.getInt32(), data.getInt32()];
}
