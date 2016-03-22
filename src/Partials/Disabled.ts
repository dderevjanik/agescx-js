import IScenario from './../Interfaces/IScenario';
import {readStructures} from './../Utils/RWUtils';
import IPlayer from './../Interfaces/IPlayer';
import ASData from 'asdata';

export const readDisabled = (scenario: IScenario, data: ASData): void => {
    const playablePlayers: Array<IPlayer> = scenario.players.slice(1, 9);

    data.skip(16 * 4); // techs count
    playablePlayers.forEach((player: IPlayer) => {
        player.disabled.techs = readStructures(30, () => data.getInt32());
    });
    data.skip(4 * 8 * 30); // skip for another players
    // @todo extra tech for 1.30 version

    data.skip(16 * 4); // units count
    playablePlayers.forEach((player: IPlayer) => {
        player.disabled.units = readStructures(30, () => data.getInt32());
    });
    data.skip(4 * 8 * 30); // for another players
    // @todo extra units for 1.30 version

    data.skip(16 * 4); // buildings count
    playablePlayers.forEach((player: IPlayer) => {
        player.disabled.buildings = readStructures(20, () => data.getInt32());
    });
    data.skip(4 * 8 * 20); // for another players
    // @todo extra buildings for 1.30 version
};

export default {
    readDisabled: readDisabled
};
