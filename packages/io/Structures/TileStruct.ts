import ASData from "asdata";

/**
 * [0] - Terrain id
 * [1] - Elevation height
 * [2] - unused - 0
 */
export type TileStruct = [number, number, number];

export function readTileStruct(data: ASData): TileStruct {
  return [data.getUint8(), data.getUint8(), data.getUint8()];
}
