import IPlayer from './../Interfaces/IPlayer';
import { Civilization } from './../Enums/Civilization';
import { PlayerColor } from './../Enums/PlayerColors';
import { Age } from './../Enums/Age';

const createPlayer = (): IPlayer => ({
  name: '',
  nameId: 0,
  constName: '',
  active: 0,
  human: 0,
  civ: Civilization.Britons.id,
  unknown1: 0,
  unknown2: 0,
  unknown3: 0,
  aiName: '',
  aiSource: '',
  aiType: 0,
  age: Age.None,
  population: 100,
  color: PlayerColor.White.id,
  food: 0,
  wood: 0,
  gold: 0,
  stone: 0,
  ore: 0,
  diplomacy: [],
  alliedVict: 0,
  startCam: [0, 0],
  disabled: {
    techs: [],
    units: [],
    buildings: []
  },
  units: []
});

export default createPlayer;
