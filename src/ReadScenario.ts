import * as Reader from './Reader';
import debug from './Utils/Debug';
import ASData from 'asdata';
import CreateScenario from './Creators/CreateScenario';
import IPlayer from './Interfaces/IPlayer';
import IScenario from './Interfaces/IScenario';

// NEW

declare const VERSION: string;
declare const PROCESS_ENV: string;

const readScenario = (data: ASData): IScenario => {
    const scenario: IScenario = CreateScenario();
    const allPlayers: Array<IPlayer> = scenario.players.slice(0, 9);
    const startTime: number = new Date().getTime();

    // debug(`AgeScx: starting reading scenario`);

    // unpcompressed header
    Reader.readHeader(scenario, data);

    // debug(`AgeScx: header loaded, version = ${scenario.header.version}`);

    const compressed: ASData = data.inflate(scenario.header.size + 8);          // inflate data
    // console.log(compressed);
    scenario.setup.nextId = compressed.getUint32();        // next unit Id
    scenario.version = compressed.getFloat32().toFixed(2); // compressed data version
    // console.log(scenario.version);
    // debug(`AgeScx: Compressed data version = ${scenario.version}`);

    // player ascii names (max. 256 chars)
    allPlayers.forEach((player: IPlayer) => { // ? GAIA LAST
        player.name = compressed.getChar(256);
    });
    compressed.skip(7 * 256); // skip non-playable players

    // player string name Id
    allPlayers.forEach((player: IPlayer) => { // ? GAIA LAST
        player.nameId = compressed.getInt32();
    });
    compressed.skip(7 * 4); // skip non-playable players

    Reader.readPlayerData1(scenario, compressed);

    // debug(`AgeScx: Player Data #1 - Basic Info`);

    compressed.skip(4); // unknown, @todo finish
    compressed.skip(4); // unknonw, @todo finish
    compressed.skip(1); // separator

    scenario.setup.filename = compressed.getStr16();

    // messages section
    Reader.readMessages(scenario, compressed);

    // debug(`AgeScx: Messages`);

    Reader.readCinematics(scenario, compressed);

    // debug(`AgeScx: Cinematics`);

    Reader.readImage(scenario, compressed);

    // debug(`AgeScx: Background Image, included = ${scenario.image.included}`);

    Reader.readPlayerData2(scenario, compressed);

    // debug(`AgeScx: Player Data #2 - AI section`);

    compressed.skip(16 * 24); // unused resources
    compressed.skip(4); // another separator

    // scenario goals
    Reader.readGoals(scenario, compressed);

    // debug(`AgeScx: Scenario Goals`);

    Reader.readDiplomacy(scenario, compressed);

    // debug(`AgeScx: Diplomacy`);

    compressed.skip(11520); // unused space
    compressed.skip(4); // separator
    compressed.skip(16 * 4); // allied victory, ignored

    Reader.readDisabled(scenario, compressed);

    // debug(`AgeScx: Disables`);

    compressed.skip(8); // unused
    scenario.setup.allTech = compressed.getInt32();

    allPlayers.forEach((player: IPlayer) => {
        player.age = compressed.getInt32();
    });
    compressed.skip(7 * 4); // for another players

    compressed.skip(4); // separator
    scenario.setup.startCam = [compressed.getInt32(), compressed.getInt32()];
    scenario.setup.aiType = compressed.getUint32();
    scenario.setup.width = compressed.getUint32();
    scenario.setup.height = compressed.getUint32();

    // debug(`AgeScx: Scenario setup`);

    Reader.readTiles(scenario, compressed);

    // debug(`AgeScx: Scenario tiles, count = ${scenario.tiles.length}`);

    compressed.skip(4); // number of units section

    Reader.readPlayerData3(scenario, compressed);

    // debug(`AgeScx: Player Data #3 - Resources`);

    Reader.readUnits(scenario, compressed);

    // debug(`AgeScx: Scenario Units`);

    compressed.skip(4); // number of players, again

    Reader.readPlayerData4(scenario, compressed);

    // debug(`AgeScx: Player Data #4 - Advanced`);

    compressed.skip(8); // unknown, 1.6
    compressed.skip(1); // unknown

    Reader.readTriggers(scenario, compressed);

    // debug(`AgeScx: Triggers, count = ${scenario.triggers.length}`);

    // debug(scenario);

    const decompressTime: number = new Date().getTime() - startTime;

    // debug(`Agescx: Scenario loaded, time = ${decompressTime}ms`);

    const endTime: number = new Date().getTime();

    // scenario.debug.startTime = startTime;
    // scenario.debug.endTime = endTime;
    // scenario.debug.decompressTime = decompressTime;
    // scenario.debug.version = VERSION;
    // scenario.debug.environment = PROCESS_ENV;

    return scenario;
};

export default readScenario;
