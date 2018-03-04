import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import ASData from 'asdata';

export const readPlayerData1 = (scenario: IScenario, data: ASData): void => {
  const allPlayers: Array<IPlayer> = scenario.players;

  allPlayers.forEach((player: IPlayer) => {
    player.active = data.getUint32(); // is active
    player.human = data.getUint32(); // is human
    player.civ = data.getInt32(); // player civilization
    player.unknown1 = data.getUint32(); // ? unknown
  });
  data.skip(7 * 16); // skip non-playable players
};

export default {
  readPlayerData1: readPlayerData1
};
