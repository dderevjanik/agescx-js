import ASData from "asdata";

export type HeaderStruct = {
  version: string;
  size: number;
  unknown1: number;
  lastSave: number;
  instructions: string;
  unknown2: number;
  players: number;
};

export function readHeader(data: ASData): HeaderStruct {
  return {
    version: data.getChar(4),
    size: data.getUint32(),
    unknown1: data.getUint32(),
    lastSave: data.getUint32(),
    instructions: data.getStr32(),
    unknown2: data.getInt32(),
    players: data.getInt32()
  };
}
