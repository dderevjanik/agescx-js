import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import ASDataView from './../ASDataView';

export const readDisabled = (scenario: IScenario, data: ASDataView): void => {
    const playablePlayers: Array<IPlayer> = scenario.players.slice(1, 9);

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
};
