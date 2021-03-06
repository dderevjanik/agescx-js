import ASData from "asdata";
import { PlayerData1Struct, readPlayerData1 } from "./PlayerData1Struct";
import { repeat } from "../utils/StructureHelpers";

export type CompressedHeaderStruct = {
  /**
   * Next unit id
   */
  nextUnitId: number;
  version2: number;
  /**
   * ASCII chars of player names
   */
  playerNames: string[];
  /**
   * Player names string table IDs
   */
  playerNamesIDs: number[];
  /**
   * Basic information about player
   */
  playersData: PlayerData1Struct[];
  unknown1: number;
  unknown2: string;
  unknown3: number;
  /**
   * Original scenario filename, created while first time scenario saved
   */
  originalFilename: string;
};

export function readCompressedHeaderStruct(data: ASData): CompressedHeaderStruct {
  return {
    nextUnitId: data.getUint32(),
    version2: parseFloat(data.getFloat32().toFixed(2)),
    playerNames: repeat(() => data.getChar(256), 16),
    playerNamesIDs: repeat(() => data.getUint32(), 16),
    playersData: repeat(() => readPlayerData1(data), 16),
    unknown1: data.getUint32(),
    unknown2: data.getChar(1),
    unknown3: data.getFloat32(),
    originalFilename: data.getStr16()
  };
}
