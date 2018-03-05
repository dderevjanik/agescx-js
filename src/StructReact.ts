import ASData from 'asdata';
import { readFileSync } from 'fs';
// structus
import { readHeader } from './Structures/HeaderStruct';
import { readCompressedHeaderStruct } from './Structures/CompressedHeaderStruct';
import { readMessages } from './Structures/MessagesStruct';
import { readCinematic } from './Structures/CinematicStruct';
import { readPlayerData2 } from './Structures/PlayerData2Struct';
import Scenario from './Scenario';
import { readImage } from './Structures/ImageStruct';
import { readGoals } from './Structures/GoalsStruct';
import { readDiplomacy } from './Structures/DiplomacyStruct';
import { readDisablesStruct } from './Structures/DisablesStruct';
import { readMapStruct } from './Structures/MapStruct';
import { readUnitsStruct } from './Structures/UnitsStruct';
import { readPlayerDat4 } from './Structures/PlayerData4Struct';
import { readTrigger } from './Structures/TriggerStruct';

const repeat = <T>(callback: () => T, count: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(callback());
  }
  return result;
};

/**
 * NEW
 */
const scenario = readFileSync('../scenarios/1.21/default.scx');
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
const playersCount = compressed.getUint32();
const players = repeat(() => readPlayerDat4(compressed), 8); // TODO: should be playersCount ?
compressed.skip(8); // Should be Float64, better version
const triggersInstructionStart = compressed.getUint8();
const triggersCount = compressed.getInt32();
const triggers = repeat(() => readTrigger(compressed), triggersCount);
console.log(triggers);

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
