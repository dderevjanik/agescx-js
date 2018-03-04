import ASData from 'asdata';
import { readTileStruct, TileStruct } from './TileStruct';

export type MapStruct = {
  separator: number;
  startingCamera: [number, number];
  aiType: number;
  width: number;
  height: number;
  terrain: TileStruct[];
};

const repeat = <T>(callback: () => T, count: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(callback());
  }
  return result;
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
