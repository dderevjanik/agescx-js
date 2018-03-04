import ASData from 'asdata';
import { readFileSync } from 'fs';
// structus
import { readHeader} from './Structures/HeaderStruct';
import { readCompressedHeaderStruct } from './Structures/CompressedHeaderStruct';
import { readMessages }  from './Structures/MessagesStruct';
import { readCinematic } from './Structures/CinematicStruct';
import { readPlayerData2 } from './Structures/PlayerData2Struct';
import Scenario from './Scenario';
import { readImage } from './Structures/ImageStruct';
import { readGoals } from './Structures/GoalsStruct';
import { readDiplomacy } from './Structures/DiplomacyStruct';
import { readDisablesStruct } from './Structures/DisablesStruct';
import { readMapStruct } from './Structures/MapStruct';
import { readUnitsStruct } from './Structures/UnitsStruct';

/**
 * NEW
 */
const scenario = readFileSync('../scenarios/1.21/random/arabia.scx');
const asdata = new ASData(scenario);

const header = readHeader(asdata);
// console.log(header.size);
const compressed = asdata.inflate(header.size + 8);
const compressedHeader = readCompressedHeaderStruct(compressed);
const messages = readMessages(compressed);
const cinematics = readCinematic(compressed);
const image = readImage(compressed);
const playersData2 = readPlayerData2(compressed);
const goals = readGoals(compressed);
// console.log(goals);

const diplomacies = readDiplomacy(compressed);

const disables = readDisablesStruct(compressed);
const map = readMapStruct(compressed);
const units = readUnitsStruct(compressed);



/**
 * Old
 */
const osc = Scenario.readScenarioFile('../scenarios/1.21/random/arabia.scx');
// console.log(osc.setup);
// console.log(osc.image);
// console.log(osc.header.size);
// console.log(osc.setup.nextId);
// console.log(osc.messages);


// console.log(compressedHeader.version2);
// console.log(compressedHeader.nextUnitId);
// console.log(compressedHeader.version2);
// console.log(compressedHeader.playersData);
// console.log(compressedHeader.playersData);
