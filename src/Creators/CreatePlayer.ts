import IPlayer from './../Interfaces/IPlayer';
import eCivilization from './../Enums/eCivilization';
import ePlayerColor from './../Enums/ePlayerColor';
import eAge from './../Enums/eAge';

const createPlayer = (): IPlayer => ({
  name: '',
  nameId: 0,
  constName: '',
  active: 0,
  human: 0,
  civ: eCivilization.Britons,
  unknown1: 0,
  unknown2: 0,
  unknown3: 0,
  aiName: '',
  aiSource: '',
  aiType: 0,
  age: eAge.None,
  population: 100,
  color: ePlayerColor.Gray,
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
