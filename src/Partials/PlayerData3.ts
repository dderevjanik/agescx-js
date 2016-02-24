import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import ASDataView from './../ASDataView';

export const readPlayerData3 = (scenario: IScenario, data: ASDataView): void => {
    const playablePlayers: Array<IPlayer> = scenario.players.slice(1, 9);

    playablePlayers.forEach((player: IPlayer) => {
        player.food = data.getFloat32()[0];
        player.wood = data.getFloat32()[0];
        player.gold = data.getFloat32()[0];
        player.stone = data.getFloat32()[0];
        player.ore = data.getFloat32()[0];
        data.skip(4); // padding
        player.population = data.getFloat32()[0];
    });
};
