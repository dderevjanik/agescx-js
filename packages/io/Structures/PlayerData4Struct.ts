import ASData from "asdata";
import { repeat } from "../utils/StructureHelpers";

export type PlayerData4Struct = {
  /**
   * Const name like 'Player1'
   */
  constName: string;
  /**
   * Starting camera, for Player 1 = editor camera
   */
  startCam: [number, number];
  /**
   * Same as startCam
   */
  startCam2: [number, number];
  alliedVictory: number;
  // unknown1: number;
  // unknown2: number;
  diplomacyCount: number;
  diplomacy1: number[];
  diplomacy2: number[];
  color: number;
  //
  unknown3: number;
  unknown4: number;
  //
  /**
   * Only included if `unknown4` == 2.0
   */
  unknown5?: number[];
  /**
   * Unknown structure
   */
  unknown6: number[];

  /**
   * Usually 0
   */
  unknown7: number[];
  unknown8: number;
};

export function readPlayerDat4(data: ASData): PlayerData4Struct {
  const partial1 = {
    constName: data.getStr16(),
    startCam: [data.getFloat32(), data.getFloat32()] as [number, number],
    startCam2: [data.getInt16(), data.getInt16()] as [number, number],
    alliedVictory: data.getUint8(),
    // unknown1: data.getFloat32(),
    // unknown2: data.getUint16(),
    diplomacyCount: data.getUint16()
  };
  const partial2 = {
    diplomacy1: repeat(() => data.getUint8(), partial1.diplomacyCount),
    diplomacy2: repeat(() => data.getUint32(), 9),
    color: data.getUint32(),
    unknown3: data.getFloat32(),
    unknown4: data.getUint16()
  };
  const partial3 = {
    unknown5: partial2.unknown3 === 2.0 ? repeat(() => data.getUint8(), 8) : undefined,
    unknown6: repeat(() => data.skip(44), partial2.unknown4),
    unknown7: repeat(() => data.getUint8(), 7),
    unknown8: data.getInt32()
  };
  return Object.assign(partial3, Object.assign(partial2, partial1));
}
