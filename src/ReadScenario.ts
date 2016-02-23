import CreateScenario from './Creators/CreateScenario';
import ASDataView from './ASDataView';
import {readTile} from './Structures/Tile';
import {readUnit} from './Structures/Unit';
import IPlayer from './Interfaces/IPlayer';

type MyNumber = number;

const readScenario = (data: ASDataView, debug: boolean = false) => {

    if (debug) console.log(`AgeScx: starting reading scenario`);

    // unpcompressed header
    const Scenario = CreateScenario();
    const playablePlayers = Scenario.players.slice(1, 9);
    const allPlayers = Scenario.players.slice(0, 9);

    const head = Scenario.header;
    head.version = <string> data.getChar(4).join("");	// scenario version
    head.size = <number> data.getUint32()[0];			// size of header, excluding version and this
    head.unknown1 = <number> data.getUint32()[0];		// ? unknown
    head.lastSave = <number> data.getUint32()[0];		// last save game timestamp
    head.instructions = <string> data.getStr32()[0];	// instructions before a start
    head.unknown2 = <number> data.getInt32()[0];		// ? unknown
    head.players = <number> data.getInt32()[0];			// number of players

    if (debug) console.log(`AgeScx: header loaded, version = ${head.version}`);

    data.inflate(head.size + 8);
    Scenario.setup.nextId = <number> data.getUint32()[0];// next unit Id
    Scenario.version = <number> data.getFloat32()[0];	// compressed data version

    if (debug) console.log(`AgeScx: compressed data version = ${Scenario.version}`);

    // player ascii names (max. 256 chars)
    allPlayers.forEach((player: IPlayer) => { // ? GAIA LAST
        player.name = <string> data.getChar(256).join("");
    });
    data.skip(7*256) // skip non-playable players

    // player string name Id
    allPlayers.forEach((player: IPlayer) => { // ? GAIA LAST
        player.nameId = <number> data.getInt32()[0];
    });
    data.skip(7*4) // skip non-playable players

    // player data#1 section
    allPlayers.forEach((player: IPlayer) => {
        player.active = <number> data.getUint32()[0];	// is active
        player.human = <number> data.getUint32()[0];	// is human
        player.civ = <number> data.getInt32()[0];		// player civilization
        player.unk1 = <number> data.getUint32()[0];		// ? unknown
    });
    data.skip(7*16); // skip non-playable players

    if (debug) console.log(`AgeScx: Player Data #1`);

    data.skip(4); // unknown, @todo finish
    data.skip(4); // unknonw, @todo finish
    data.skip(1); // separator

    Scenario.setup.filename = <string> data.getStr16()[0];

    // messages section
    Scenario.messages.objectives.id = <number> data.getInt32()[0];
    Scenario.messages.hints.id = <number> data.getInt32()[0];
    Scenario.messages.victory.id = <number> data.getInt32()[0];
    Scenario.messages.loss.id = <number> data.getInt32()[0];
    Scenario.messages.history.id = <number> data.getInt32()[0];
    Scenario.messages.scout.id = <number> data.getInt32()[0]; // 1.22>

    Scenario.messages.objectives.text = <string> data.getStr16()[0];
    Scenario.messages.hints.text = <string> data.getStr16()[0];
    Scenario.messages.victory.text = <string> data.getStr16()[0];
    Scenario.messages.loss.text = <string> data.getStr16()[0];
    Scenario.messages.history.text = <string> data.getStr16()[0];
    Scenario.messages.scout.text = <string> data.getStr16()[0]; // 1.22>

    if (debug) console.log(`AgeScx: Messages`);

    Scenario.cinematics.intro = <string> data.getStr16()[0];
    Scenario.cinematics.defeat = <string> data.getStr16()[0];
    Scenario.cinematics.victory = <string> data.getStr16()[0];

    if (debug) console.log(`AgeScx: Cinematics`);

    Scenario.image.filename = <string> data.getStr16()[0];
    Scenario.image.included = <number> data.getInt32()[0];
    Scenario.image.width = <number> data.getInt32()[0];
    Scenario.image.height = <number> data.getInt32()[0];
    Scenario.image.exists = <number> data.getInt16()[0];
    if ((Scenario.image.exists) === -1 || (Scenario.image.exists === 2)){
        // @todo finish
    }

    if (debug) console.log(`AgeScx: Background Image`);

    // player data #2 section
    Scenario.players.forEach((player: IPlayer) => {
        data.getStr16();
        data.getStr16();
    });

    if (debug) console.log(`AgeScx: Players Data #2`);
    console.log(Scenario);

    // ai name
    playablePlayers.forEach((player: IPlayer) => {
        player.aiName = data.getStr16()[0];
    });
    for (let i: number = 0; i < 8; i++){
        data.getStr16();
    }

    // ai source
    playablePlayers.forEach((player: IPlayer) => {
        data.skip(8) // unknowns 2 & 3
        player.aiSource = data.getStr32()[0];
    });
    for (let i: number = 0; i < 8; i++){
        data.skip(8);
        data.getStr32();
    }

    // ai type
    playablePlayers.forEach((player: IPlayer) => {
        player.aiType = data.getInt8()[0];
    });
    data.skip(8); // skip non-playable players
    data.skip(4); // separator

    if (debug) console.log(`AgeScx: AI Section`);

    data.skip(16*24); // unused resources
    data.skip(4); // another separator

    // scenario goals
    Scenario.goals.conquest = data.getInt32()[0];
    Scenario.goals.unk1 = data.getInt32()[0];
    Scenario.goals.relics = data.getInt32()[0];
    Scenario.goals.unk2 = data.getInt32()[0];
    Scenario.goals.exploration = data.getInt32()[0];
    Scenario.goals.unk3 = data.getInt32()[0];
    Scenario.goals.all = data.getInt32()[0];
    Scenario.goals.mode = data.getInt32()[0];
    Scenario.goals.score = data.getInt32()[0];
    Scenario.goals.time = data.getInt32()[0];

    if (debug) console.log(`AgeScx: Scenario Goals`);

    playablePlayers.forEach((player: IPlayer) => {
        player.diplomacy = data.getInt32(8);
        data.skip(8*4);
    });
    data.skip(8*16*4);

    data.skip(11520); // unused space
    data.skip(4); //separator
    data.skip(16*4); // allied victory, ignored

    if (debug) console.log(`AgeScx: Diplomacy`);

    // Section: Disabled
    data.skip(16*4); // techs count
    playablePlayers.forEach((player: IPlayer) => {
        player.disTechs = data.getInt32(30);
    })
    data.skip(4*8*30); // skip for another players
    // @todo extra tech for 1.30 version

    data.skip(16*4); // units count
    playablePlayers.forEach((player: IPlayer) => {
        player.disUnits = data.getInt32(30);
    });
    data.skip(4*8*30); // for another players
    // @todo extra units for 1.30 version

    data.skip(16*4); // buildings count
    playablePlayers.forEach((player: IPlayer) => {
        player.disBuildings = data.getInt32(20);
    });
    data.skip(4*8*20); // for another players
    // @todo extra buildings for 1.30 version

    if (debug) console.log(`AgeScx: Disables`);

    data.skip(8); // unused
    Scenario.setup.allTech = data.getInt32()[0];

    allPlayers.forEach((player: IPlayer) => {
        player.age = data.getInt32()[0];
    });
    data.skip(7*4); // for another players

    data.skip(4); // separator
    Scenario.setup.startCam = data.getInt32(2);
    Scenario.setup.aiType = data.getUint32()[0];
    Scenario.setup.width = data.getUint32()[0];
    Scenario.setup.height = data.getUint32()[0];

    if (debug) console.log(`AgeScx: Scenario setup`);

    for(let i: number = 0; i < (Scenario.setup.width * Scenario.setup.height); i++){
        Scenario.tiles.push(readTile(data));
    }

    if (debug) console.log(`AgeScx: Scenario tiles`);

    data.skip(4); // number of units section

    playablePlayers.forEach((player: IPlayer) => {
        player.food = data.getFloat32()[0];
        player.wood = data.getFloat32()[0];
        player.gold = data.getFloat32()[0];
        player.stone = data.getFloat32()[0];
        player.ore = data.getFloat32()[0];
        data.skip(4); // padding
        player.population = data.getFloat32()[0];
    });

    allPlayers.forEach((player: IPlayer) => {
        const numOfUnits: number = data.getUint32()[0];
        for(let i: number = 0; i < numOfUnits; i++){
            player.units.push(readUnit(data));
        }
    });

    data.skip(4); // number of players, again

    playablePlayers.forEach((player: IPlayer) => {
        player.constName = data.getStr16()[0];
        player.startCam = [data.getFloat32()[0], data.getFloat32()[0]];
        data.skip(4); // skip duplicated camera X and camera Y
        data.skip(1); // skip allyVictory, duplicated
        const numOfDipl: number = data.getUint16()[0];
        data.skip(numOfDipl*1);
        data.skip(9*4) // player / diplomacy
        player.color = data.getUint32()[0];
        player.unk2 = data.getFloat32()[0];
        player.unk3 = data.getUint16()[0];
        if (player.unk2 === 2.0){
            data.skip(8*1);
        }
        data.skip(player.unk3*44);
        data.skip(7*1);
        data.skip(4);
    });

    data.skip(8); // unknown, 1.6
    data.skip(1); // unknown

    /*
    let numOfTrigs: number = data.getUint32()[0];
    for (let i: number = 0; i < numOfTrigs; i++){

    }
    */
    console.log(this);
};

export default readScenario;
