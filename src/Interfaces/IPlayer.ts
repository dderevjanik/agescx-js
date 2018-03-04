import { point } from './../Utils/DataTypes';
import IUnit from './IUnit';
import IDisabled from './IDisabled';

interface IPlayer {
  name: string; // player in-game name
  nameId: number; // string Id for name
  constName?: string; // for internal purpuose

  active: number; // is player active
  human: number; // is player human

  aiName: string; // name of AI
  aiSource: string; // AI Source code
  aiType: number; // AI type

  civ: number; // civilization
  age: number; // starting age
  color: number; // color
  population: number; // max. population

  food: number; // food
  wood: number; // wood
  gold: number; // gold
  stone: number; // stone
  ore: number; // ore; unused

  diplomacy: Array<number>; // diplomacy with others
  alliedVict?: number; // is allied victory
  startCam?: point; // starting camera

  disabled: IDisabled;

  unknown1?: number;
  unknown2?: number;
  unknown3?: number;

  units: Array<IUnit>;
}

export default IPlayer;
