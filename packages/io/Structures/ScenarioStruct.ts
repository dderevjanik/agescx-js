import ASData from "asdata";
import { repeat } from "../utils/StructureHelpers";

// #region structures
import { HeaderStruct, readHeader } from "./HeaderStruct";
import { readCompressedHeaderStruct, CompressedHeaderStruct } from "./CompressedHeaderStruct";
import { readMessages, MessagesStruct } from "./MessagesStruct";
import { readCinematic, CinematicStruct } from "./CinematicStruct";
import { readImage, ImageStruct } from "./ImageStruct";
import { readPlayerData2, PlayerData2Struct } from "./PlayerData2Struct";
import { readGoals, GoalsStruct } from "./GoalsStruct";
import { readDiplomacy, DiplomacyStruct } from "./DiplomacyStruct";
import { readDisablesStruct, DisablesStruct } from "./DisablesStruct";
import { readMapStruct, MapStruct } from "./MapStruct";
import { readUnitsStruct, UnitsStruct } from "./UnitsStruct";
import { readPlayerDat4, PlayerData4Struct } from "./PlayerData4Struct";
import { readTrigger, TriggerStruct } from "./TriggerStruct";
// #endregion

export type ScenarioStruct = {
  header: HeaderStruct;
  compressedHeader: CompressedHeaderStruct;
  messages: MessagesStruct;
  cinematics: CinematicStruct;
  image: ImageStruct;
  playersData2: PlayerData2Struct;
  goals: GoalsStruct;
  diplomacy: DiplomacyStruct;
  disables: DisablesStruct;
  map: MapStruct;
  units: UnitsStruct;
  playersCount: number;
  playersData4: PlayerData4Struct[];
  triggersInstructionStart: number;
  triggersCount: number;
  triggers: TriggerStruct[];
  triggersOrd: number[];
};

export const readScenario = (data: ASData): ScenarioStruct => {
  const uncompressedHeader = {
    header: readHeader(data)
  };
  const compressed = data.inflate(uncompressedHeader.header.size + 8);
  const compressedPartial1 = {
    compressedHeader: readCompressedHeaderStruct(compressed),
    messages: readMessages(compressed),
    cinematics: readCinematic(compressed),
    image: readImage(compressed),
    playersData2: readPlayerData2(compressed),
    goals: readGoals(compressed),
    diplomacy: readDiplomacy(compressed),
    disables: readDisablesStruct(compressed),
    map: readMapStruct(compressed),
    units: readUnitsStruct(compressed),
    playersCount: compressed.getUint32(),
    playersData4: repeat(() => readPlayerDat4(compressed), 8) // TODO: should be playersCount ,
  };
  compressed.skip(8); // Should be Float64, better version
  const triggersInstructionStart = compressed.getUint8();
  const triggersCount = compressed.getUint32();
  const compressedPartial2 = {
    triggers: repeat(() => readTrigger(compressed), triggersCount),
    triggersOrd: repeat(() => data.getInt32(), triggersCount)
  };

  return {
    ...uncompressedHeader,
    ...compressedPartial1,
    triggersCount,
    triggersInstructionStart,
    ...compressedPartial2
  };
};
