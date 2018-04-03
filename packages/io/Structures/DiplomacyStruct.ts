import ASData from "asdata";
import { repeat } from "../utils/StructureHelpers";

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
