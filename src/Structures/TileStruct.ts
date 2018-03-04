import ASData from 'asdata';

export type TileStruct = [number, number, number];

export function readTileStruct(data: ASData): TileStruct {
  return [data.getUint8(), data.getUint8(), data.getUint8()];
}
