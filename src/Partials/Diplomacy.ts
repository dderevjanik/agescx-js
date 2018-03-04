import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import { readStructures } from './../Utils/RWUtils';
import ASData from 'asdata';

export const readDiplomacy = (scenario: IScenario, data: ASData): void => {
  const playablePlayers: Array<IPlayer> = scenario.players.slice(1, 9);

  playablePlayers.forEach((player: IPlayer) => {
    player.diplomacy = readStructures(8, () => data.getInt32());
    data.skip(8 * 4); // skip diplomacy to other players
  });
  data.skip(8 * 16 * 4); // skip other players
};

export default {
  readDiplomacy: readDiplomacy
};
