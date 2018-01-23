import ASData from "asdata";

export type GoalsStruct = {
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
    conquest: data.getInt32(),
    unknown1: data.getInt32(),
    relics: data.getInt32(),
    unknown2: data.getInt32(),
    exploration: data.getInt32(),
    unknown3: data.getInt32(),
    all: data.getInt32(),
    mode: data.getInt32(),
    score: data.getInt32(),
    time: data.getInt32()
  };
}
