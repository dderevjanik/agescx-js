import ASData from "asdata";
import ASData from "asdata/dist";

export type PlayerData2Struct = {
  unknown1: [string, string][];
  aiNames: string[];
  aiType: number;
  separator: number;
  aiSource: string;
};

const repeat = <T>(callback: () => T, count: number): T[] => {
  const result: T[] = [];
  for(let i = 0; i < count; i++) {
      result.push(callback());
  }
  return result;
}

export const readPlayerData2 = (data: ASData): PlayerData2Struct => {
  return {
    unknown1: repeat(() => [data.getStr16(), data.getStr16()], 16),
    aiNames: repeat(() => data.getStr16() 16),
    aiType: data.getUint8(),
    separator: data.getUnit32()
  }
}
