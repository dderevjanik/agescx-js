import ASData from 'asdata';

const repeat = <T>(callback: () => T, count: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(callback());
  }
  return result;
};

export type DiplomacyStruct = {
  diplomacies: number[][];
  unused: number;
  separator: number;
  alliedVictories: number[];
};

export function readDiplomacy(data: ASData): DiplomacyStruct {
  return {
    diplomacies: repeat(() => repeat(() => data.getUint32(), 16), 16),
    unused: data.skip(11520),
    separator: data.getUint32(),
    alliedVictories: repeat(() => data.getUint32(), 16)
  };
}
