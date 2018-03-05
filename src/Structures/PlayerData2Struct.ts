import ASData from 'asdata';
import { AIStruct, readAIStruct } from './AIStruct';
import { readResourceStruct, ResourceStruct } from './ResourceStruct';

export type PlayerData2Struct = {
  unknown1: [string, string][];
  /**
   * Name of AI to control a player
   */
  aiNames: string[];
  /**
   * Files that belongs to AI
   */
  aiFiles: AIStruct[];
  /**
   * Type of AI
   */
  aiType: number[];
  separator: number;
  resources: ResourceStruct[];
};

const repeat = <T>(callback: () => T, count: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(callback());
  }
  return result;
};

export const readPlayerData2 = (data: ASData): PlayerData2Struct => {
  return {
    unknown1: repeat(() => [data.getStr16(), data.getStr16()] as any, 16),
    aiNames: repeat(() => data.getStr16(), 16),
    aiFiles: repeat(() => readAIStruct(data), 16),
    aiType: repeat(() => data.getUint8(), 16),
    separator: data.getUint32(),
    resources: repeat(() => readResourceStruct(data), 16)
  };
};
