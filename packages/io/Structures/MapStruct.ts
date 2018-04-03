import ASData from "asdata";
import { readTileStruct, TileStruct } from "./TileStruct";
import { repeat } from "../utils/StructureHelpers";

export type MapStruct = {
  separator: number;
  /**
   * Starting camera [X, Y]
   */
  startingCamera: [number, number];
  aiType: number;
  /**
   * Map width
   */
  width: number;
  /**
   * Map Height
   */
  height: number;
  terrain: TileStruct[];
};

export function readMapStruct(data: ASData): MapStruct {
  const info = {
    separator: data.getUint32(),
    startingCamera: [data.getInt32(), data.getInt32()] as [number, number],
    aiType: data.getInt32(),
    width: data.getUint32(),
    height: data.getUint32()
  };
  return Object.assign(info, {
    terrain: repeat(() => readTileStruct(data), info.width * info.height)
  });
}
