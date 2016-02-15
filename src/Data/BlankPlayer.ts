import IPlayer from './../Interfaces/IPlayer';
import eCivilization from './../enums/eCivilization';
import ePlayerColor from './../enums/ePlayerColor';
import eAge from './../enums/eAge';

const BlankPlayer = (): IPlayer => ({
    name: "",
    nameId: 0,
    constName: "",
    active: false,
    human: false,
    civ: eCivilization.Britons,
    unk1: 0,
    unk2: 0,
    unk3: 0,
    aiName: "",
    aiSource: "",
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
    disTechs: [],
    disBuildings: [],
    disUnits: [],
});

export default BlankPlayer;
