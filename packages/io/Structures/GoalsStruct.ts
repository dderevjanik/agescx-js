import ASData from "asdata";

export type GoalsStruct = {
  separator: number;
  conquest: number;
  unknown1: number;
  relics: number;
  unknown2: number;
  exploration: number;
  unknown3: number;
  all: number;
  mode: number;
  score: number;
  time: number;
};

export function readGoals(data: ASData): GoalsStruct {
  return {
    separator: data.getUint32(),
    conquest: data.getUint32(),
    unknown1: data.getUint32(),
    relics: data.getUint32(),
    unknown2: data.getUint32(),
    exploration: data.getUint32(),
    unknown3: data.getUint32(),
    all: data.getUint32(),
    mode: data.getUint32(),
    score: data.getUint32(),
    time: data.getUint32()
  };
}
