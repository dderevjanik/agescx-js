import ASData from "asdata";

export type PlayerData1Struct = {
  active: number;
  human: number;
  civ: number;
  unknown1: number;
};

export function readPlayerData1(data: ASData): PlayerData1Struct {
  return {
    active: data.getUint32(),
    human: data.getUint32(),
    civ: data.getInt32(),
    unknown1: data.getUint32()
  };
}
