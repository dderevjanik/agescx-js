import ASData from 'asdata';
import { PlayerData3Struct, readPlayerData3 } from './PlayerData3Struct';
import { UnitStruct, readUnit } from './UnitStruct';

export type UnitsStruct = {
  /**
   * Number of units sections, default = 9
   */
  sectionCount: number;
  /**
   * Duplicated resource section
   */
  resources: PlayerData3Struct[];
  /**
   * Unit sections per-player
   */
  sections: {
    /**
     * Number of units in this section
     */
    count: number;
    units: UnitStruct[];
  }[];
};

const repeat = <T>(callback: () => T, count: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(callback());
  }
  return result;
};

export const readUnitsStruct = (data: ASData): UnitsStruct => {
  const sectionCount = data.getUint32();
  return {
    sectionCount: sectionCount,
    resources: repeat(() => readPlayerData3(data), 8),
    sections: repeat(() => {
      const unitCount = data.getUint32();
      return {
        count: unitCount,
        units: repeat(() => readUnit(data), unitCount)
      };
    }, sectionCount)
  };
};
