import ASData from 'asdata';
import { repeat } from '../utils/StructureHelpers';

export type DisablesStruct = {
  disabledTechs: number[];
  disabledTechsIDs: number[][];
  // extraDisabledTechs: number[][];
  disabledUnits: number[];
  disabledUnitsIDs: number[][];
  // extraDisabledUnits: number[][];
  disabledBuildings: number[];
  disabledBuildingsIDs: number[][];
  // extraDisabledBuildings: number[][];
  combatMode: number;
  navalMode: number;
  allTechs: number;
  startingAges: number[];
};

export const readDisablesStruct = (data: ASData): DisablesStruct => {
  return {
    disabledTechs: repeat(() => data.getUint32(), 16),
    disabledTechsIDs: repeat(() => repeat(() => data.getUint32(), 30), 16),
    // extraDisabledTechs: repeat(() => repeat(() => data.getUint32(), 30), 16),
    disabledUnits: repeat(() => data.getUint32(), 16),
    disabledUnitsIDs: repeat(() => repeat(() => data.getUint32(), 30), 16),
    // extraDisabledUnits: repeat(() => repeat(() => data.getUint32(), 30), 16),
    disabledBuildings: repeat(() => data.getUint32(), 16),
    disabledBuildingsIDs: repeat(() => repeat(() => data.getUint32(), 20), 16),
    // extraDisabledBuildings: repeat(() => repeat(() => data.getUint32(), 40), 16),
    combatMode: data.getUint32(),
    navalMode: data.getUint32(),
    allTechs: data.getUint32(),
    startingAges: repeat(() => data.getUint32(), 16)
  };
};
