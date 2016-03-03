import * as Reader from './Reader';
import debug from './Utils/Debug';
import ASData from 'asdata';
import CreateScenario from './Creators/CreateScenario';
import IPlayer from './Interfaces/IPlayer';
import IScenario from './Interfaces/IScenario';

const readScenario = (data: ASData) => {
    const scenario: IScenario = CreateScenario();
    const allPlayers: Array<IPlayer> = scenario.players.slice(0, 9);
    const startTime: number = new Date().getTime();

    debug(`AgeScx: starting reading scenario`);

    // unpcompressed header
    Reader.readHeader(scenario, data);

    debug(`AgeScx: header loaded, version = ${scenario.header.version}`);

    data.inflate(scenario.header.size + 8);          // inflate data
    scenario.setup.nextId = data.getUint32();        // next unit Id
    scenario.version = data.getFloat32().toFixed(2); // compressed data version

    debug(`AgeScx: Compressed data version = ${scenario.version}`);

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

    Reader.readPlayerData1(scenario, data);

    debug(`AgeScx: Player Data #1 - Basic Info`);

    data.skip(4); // unknown, @todo finish
    data.skip(4); // unknonw, @todo finish
    data.skip(1); // separator

    scenario.setup.filename = data.getStr16();

    // messages section
    Reader.readMessages(scenario, data);

    debug(`AgeScx: Messages`);

    Reader.readCinematics(scenario, data);

    debug(`AgeScx: Cinematics`);

    Reader.readImage(scenario, data);

    debug(`AgeScx: Background Image, included = ${scenario.image.included}`);

    Reader.readPlayerData2(scenario, data);

    debug(`AgeScx: Player Data #2 - AI section`);

    data.skip(16 * 24); // unused resources
    data.skip(4); // another separator

    // scenario goals
    Reader.readGoals(scenario, data);

    debug(`AgeScx: Scenario Goals`);

    Reader.readDiplomacy(scenario, data);

    debug(`AgeScx: Diplomacy`);

    data.skip(11520); // unused space
    data.skip(4); // separator
    data.skip(16 * 4); // allied victory, ignored

    Reader.readDisabled(scenario, data);

    debug(`AgeScx: Disables`);

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

    debug(`AgeScx: Scenario setup`);

    Reader.readTiles(scenario, data);

    debug(`AgeScx: Scenario tiles, count = ${scenario.tiles.length}`);

    data.skip(4); // number of units section

    Reader.readPlayerData3(scenario, data);

    debug(`AgeScx: Player Data #3 - Resources`);

    Reader.readUnits(scenario, data);

    debug(`AgeScx: Scenario Units`);

    data.skip(4); // number of players, again

    Reader.readPlayerData4(scenario, data);

    debug(`AgeScx: Player Data #4 - Advanced`);

    data.skip(8); // unknown, 1.6
    data.skip(1); // unknown

    Reader.readTriggers(scenario, data);

    debug(`AgeScx: Triggers, count = ${scenario.triggers.length}`);

    debug(scenario);

    debug(`Agescx: Scenario loaded, time = ${new Date().getTime() - startTime}ms`);
};

export default readScenario;
