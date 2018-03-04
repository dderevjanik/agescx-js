import ASData from "asdata";
import { PlayerData1Struct, readPlayerData1 } from './PlayerData1Struct';

export type CompressedHeaderStruct = {
  nextUnitId: number;
  version2: number;
  playerNames: string[];
  playerNamesIDs: number[];
  playersData: PlayerData1Struct[];
  conquestMode: number;
  missionItemsCounter: number;
  missionAvailable: number;
  missionTimeline: number;
  missionItem: string;
  originalFilename: string;
};

const repeat = <T>(callback: () => T, count: number): T[] => {
    const result: T[] = [];
    for(let i = 0; i < count; i++) {
        result.push(callback());
    }
    return result;
}

export function readCompressedHeaderStruct(data: ASData): CompressedHeaderStruct {
  return {
    nextUnitId: data.getUint32(),
    version2: parseFloat(data.getFloat32().toFixed(2)),
    playerNames: repeat(() => data.getChar(256), 16),
    playerNamesIDs: repeat(() => data.getUint32(), 16),
    playersData: repeat(() => readPlayerData1(data), 16),
    conquestMode: data.getUint8(),
    missionItemsCounter: data.getUint16(),
    missionAvailable: data.getUint16(),
    missionTimeline: data.getFloat32(),
    missionItem: data.getCStr(30),
    originalFilename: data.getChar(30)
  };
}
