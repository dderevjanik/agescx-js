import ASData from 'asdata';
import CreateScenario from './Creators/CreateScenario';
import {readTile} from './Structures/Tile';
import {readUnit} from './Structures/Unit';
import IPlayer from './Interfaces/IPlayer';
import {readHeader} from './Partials/Header';
import {readPlayerData1} from './Partials/PlayerData1';
import {readPlayerData2} from './Partials/PlayerData2';
import {readPlayerData3} from './Partials/PlayerData3';
import {readPlayerData4} from './Partials/PlayerData4';
import {readGoals} from './Partials/Goals';
import {readMessages} from './Partials/Messages';
import {readCinematics} from './Partials/Cinematics';
import {readImage} from './Partials/Image';
import {readDisabled} from './Partials/Disabled';
import {readUnits} from './Partials/Units';
import {readTriggers} from './Partials/Triggers';

const readScenario = (data: ASData, debug: boolean = false) => {

    if (debug) console.log(`AgeScx: starting reading scenario`);

    // unpcompressed header
    const Scenario = CreateScenario();
    const playablePlayers = Scenario.players.slice(1, 9);
    const allPlayers = Scenario.players.slice(0, 9);

    readHeader(Scenario, data);

    if (debug) console.log(`AgeScx: header loaded, version = ${Scenario.header.version}`);

    data.inflate(Scenario.header.size + 8);
    Scenario.setup.nextId = data.getUint32();// next unit Id
    Scenario.version = data.getFloat32();	// compressed data version

    if (debug) console.log(`AgeScx: compressed data version = ${Scenario.version}`);

    // player ascii names (max. 256 chars)
    allPlayers.forEach((player: IPlayer) => { // ? GAIA LAST
        player.name = data.getChar(256);
    });
    data.skip(7*256) // skip non-playable players

    // player string name Id
    allPlayers.forEach((player: IPlayer) => { // ? GAIA LAST
        player.nameId = data.getInt32();
    });
    data.skip(7*4) // skip non-playable players

    readPlayerData1(Scenario, data);

    if (debug) console.log(`AgeScx: Player Data #1 - Basic Info`);

    data.skip(4); // unknown, @todo finish
    data.skip(4); // unknonw, @todo finish
    data.skip(1); // separator

    Scenario.setup.filename = data.getStr16();

    // messages section
    readMessages(Scenario, data);

    if (debug) console.log(`AgeScx: Messages`);

    readCinematics(Scenario, data);

    if (debug) console.log(`AgeScx: Cinematics`);

    readImage(Scenario, data);

    if (debug) console.log(`AgeScx: Background Image`);

    readPlayerData2(Scenario, data);

    if (debug) console.log(`AgeScx: Player Data #2 - AI section`);

    data.skip(16*24); // unused resources
    data.skip(4); // another separator

    // scenario goals
    readGoals(Scenario, data);

    if (debug) console.log(`AgeScx: Scenario Goals`);

    playablePlayers.forEach((player: IPlayer) => {
        for(let i: number = 0; i < 8; i++){
            player.diplomacy.push(data.getInt32());
        }
        data.skip(8*4);
    });
    data.skip(8*16*4);

    data.skip(11520); // unused space
    data.skip(4); //separator
    data.skip(16*4); // allied victory, ignored

    if (debug) console.log(`AgeScx: Diplomacy`);

    readDisabled(Scenario, data);

    if (debug) console.log(`AgeScx: Disables`);

    data.skip(8); // unused
    Scenario.setup.allTech = data.getInt32();

    allPlayers.forEach((player: IPlayer) => {
        player.age = data.getInt32();
    });
    data.skip(7*4); // for another players

    data.skip(4); // separator
    Scenario.setup.startCam = [data.getInt32(), data.getInt32()];
    Scenario.setup.aiType = data.getUint32();
    Scenario.setup.width = data.getUint32();
    Scenario.setup.height = data.getUint32();

    if (debug) console.log(`AgeScx: Scenario setup`);

    for(let i: number = 0; i < (Scenario.setup.width * Scenario.setup.height); i++){
        Scenario.tiles.push(readTile(data));
    }

    if (debug) console.log(`AgeScx: Scenario tiles`);

    data.skip(4); // number of units section

    readPlayerData3(Scenario, data);

    if (debug) console.log(`AgeScx: Player Data #3 - Resources`);

    readUnits(Scenario, data);

    if (debug) console.log(`AgeScx: Scenario Units`);

    data.skip(4); // number of players, again

    readPlayerData4(Scenario, data);

    if (debug) console.log(`AgeScx: Player Data #4 - Advanced`);

    data.skip(8); // unknown, 1.6
    data.skip(1); // unknown

    readTriggers(Scenario, data);

    if (debug) console.log(`AgeScx: Triggers`);

    console.log(Scenario);
};

export default readScenario;
