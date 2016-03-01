import ASData from 'asdata';
import CreateScenario from './Creators/CreateScenario';
import {readTile} from './Structures/Tile';
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
    const scenario = CreateScenario();
    const playablePlayers = scenario.players.slice(1, 9);
    const allPlayers = scenario.players.slice(0, 9);

    readHeader(scenario, data);

    if (debug) console.log(`AgeScx: header loaded, version = ${scenario.header.version}`);

    data.inflate(scenario.header.size + 8);
    scenario.setup.nextId = data.getUint32();// next unit Id
    scenario.version = data.getFloat32();	// compressed data version

    if (debug) console.log(`AgeScx: compressed data version = ${scenario.version}`);

    // player ascii names (max. 256 chars)
    allPlayers.forEach((player: IPlayer) => { // ? GAIA LAST
        player.name = data.getChar(256);
    });
    data.skip(7 * 256); // skip non-playable players

    // player string name Id
    allPlayers.forEach((player: IPlayer) => { // ? GAIA LAST
        player.nameId = data.getInt32();
    });
    data.skip(7 * 4); // skip non-playable players

    readPlayerData1(scenario, data);

    if (debug) console.log(`AgeScx: Player Data #1 - Basic Info`);

    data.skip(4); // unknown, @todo finish
    data.skip(4); // unknonw, @todo finish
    data.skip(1); // separator

    scenario.setup.filename = data.getStr16();

    // messages section
    readMessages(scenario, data);

    if (debug) console.log(`AgeScx: Messages`);

    readCinematics(scenario, data);

    if (debug) console.log(`AgeScx: Cinematics`);

    readImage(scenario, data);

    if (debug) console.log(`AgeScx: Background Image`);

    readPlayerData2(scenario, data);

    if (debug) console.log(`AgeScx: Player Data #2 - AI section`);

    data.skip(16 * 24); // unused resources
    data.skip(4); // another separator

    // scenario goals
    readGoals(scenario, data);

    if (debug) console.log(`AgeScx: scenario Goals`);

    playablePlayers.forEach((player: IPlayer) => {
        for(let i: number = 0; i < 8; i++) {
            player.diplomacy.push(data.getInt32());
        }
        data.skip(8 * 4);
    });
    data.skip(8 * 16 * 4);

    data.skip(11520); // unused space
    data.skip(4); // separator
    data.skip(16 * 4); // allied victory, ignored

    if (debug) console.log(`AgeScx: Diplomacy`);

    readDisabled(scenario, data);

    if (debug) console.log(`AgeScx: Disables`);

    data.skip(8); // unused
    scenario.setup.allTech = data.getInt32();

    allPlayers.forEach((player: IPlayer) => {
        player.age = data.getInt32();
    });
    data.skip(7 * 4); // for another players

    data.skip(4); // separator
    scenario.setup.startCam = [data.getInt32(), data.getInt32()];
    scenario.setup.aiType = data.getUint32();
    scenario.setup.width = data.getUint32();
    scenario.setup.height = data.getUint32();

    if (debug) console.log(`AgeScx: scenario setup`);

    for(let i: number = 0; i < (scenario.setup.width * scenario.setup.height); i++) {
        scenario.tiles.push(readTile(data));
    }

    if (debug) console.log(`AgeScx: scenario tiles`);

    data.skip(4); // number of units section

    readPlayerData3(scenario, data);

    if (debug) console.log(`AgeScx: Player Data #3 - Resources`);

    readUnits(scenario, data);

    if (debug) console.log(`AgeScx: scenario Units`);

    data.skip(4); // number of players, again

    readPlayerData4(scenario, data);

    if (debug) console.log(`AgeScx: Player Data #4 - Advanced`);

    data.skip(8); // unknown, 1.6
    data.skip(1); // unknown

    readTriggers(scenario, data);

    if (debug) console.log(`AgeScx: Triggers`);

    console.log(scenario);
};

export default readScenario;
