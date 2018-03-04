import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import ASData from 'asdata';

export const readPlayerData3 = (scenario: IScenario, data: ASData): void => {
  const playablePlayers: Array<IPlayer> = scenario.players.slice(1, 9);
  playablePlayers.forEach((player: IPlayer) => {
    player.food = data.getFloat32();
    player.wood = data.getFloat32();
    player.gold = data.getFloat32();
    player.stone = data.getFloat32();
    player.ore = data.getFloat32();
    data.skip(4); // padding
    player.population = data.getFloat32();
  });
};

export default {
  readPlayerData3: readPlayerData3
};
