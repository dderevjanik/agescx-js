import ASData from 'asdata';
import { repeat } from '../utils/StructureHelpers';

export type PlayerData3Struct = {
  food: number;
  wood: number;
  gold: number;
  stone: number;
  ore: number;
  padding: number;
  population: number;
};

export function readPlayerData3(data: ASData): PlayerData3Struct {
  return {
    food: data.getFloat32(),
    wood: data.getFloat32(),
    gold: data.getFloat32(),
    stone: data.getFloat32(),
    ore: data.getFloat32(),
    padding: data.skip(4),
    population: data.getFloat32()
  };
}
