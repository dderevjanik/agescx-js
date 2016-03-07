import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import ASData from 'asdata';

export const readDisabled = (scenario: IScenario, data: ASData): void => {
    const playablePlayers: Array<IPlayer> = scenario.players.slice(1, 9);

    data.skip(16 * 4); // techs count
    playablePlayers.forEach((player: IPlayer) => {
        for(let i: number = 0; i < 30; i++) {
            player.disabled.techs.push(data.getUint32());
        }
    });
    data.skip(4 * 8 * 30); // skip for another players
    // @todo extra tech for 1.30 version

    data.skip(16 * 4); // units count
    playablePlayers.forEach((player: IPlayer) => {
        for(let i: number = 0; i < 30; i++) {
            player.disabled.units.push(data.getUint32());
        }
    });
    data.skip(4 * 8 * 30); // for another players
    // @todo extra units for 1.30 version

    data.skip(16 * 4); // buildings count
    playablePlayers.forEach((player: IPlayer) => {
        for(let i: number = 0; i < 20; i++) {
            player.disabled.buildings.push(data.getUint32());
        }
    });
    data.skip(4 * 8 * 20); // for another players
    // @todo extra buildings for 1.30 version
};
