import ASData from "asdata";
import { LocationStruct } from "./LocationStruct";

export type PlayerData4Struct = {
  constName: string;
  startCam: [number, number];
  startCam2: [number, number];
  allyVictory: number;
  diplomacyCount: number;
  diplomacy: any;
  color: number;
  unknown1: number;
  unknown2: number;
};

export function readPlayerDat4(data: ASData): PlayerData4Struct {
  const partial1 = {
    constName: data.getStr16(),
    startCam: [data.getFloat32(), data.getFloat32()] as [number, number],
    startCam2: [data.getFloat32(), data.getFloat32()] as [number, number],
    allyVictory: data.skip(1),
    diplomacyCount: data.getUint16()
  };
  const partial2 = {
    diplomacy: data.skip(partial1.diplomacyCount * 1 + 9 * 4),
    color: data.getUint32(),
    unknown1: data.getFloat32(),
    unknown2: data.getUint16()
  };
  return Object.assign(partial2, partial1);
}
