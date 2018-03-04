import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import { readStructures } from './../Utils/RWUtils';
import ASData from 'asdata';

export const readPlayerData2 = (scenario: IScenario, data: ASData): void => {
  const playablePlayers: Array<IPlayer> = scenario.players.slice(1, 9);

  readStructures(16, () => {
    data.getStr16();
    data.getStr16();
  });

  // ai name
  playablePlayers.forEach((player: IPlayer) => {
    player.aiName = data.getStr16();
  });
  readStructures(8, () => data.getStr16());

  // ai source
  playablePlayers.forEach((player: IPlayer) => {
    data.skip(8); // unknowns 2 & 3
    player.aiSource = data.getStr32();
  });
  readStructures(8, () => {
    data.skip(8);
    data.getStr32();
  });

  // ai type
  playablePlayers.forEach((player: IPlayer) => {
    player.aiType = data.getInt8();
  });
  data.skip(8); // skip non-playable players
  data.skip(4); // separator
};

export default {
  readPlayerData2: readPlayerData2
};
