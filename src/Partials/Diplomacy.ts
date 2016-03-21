import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import ASData from 'asdata';

export const readDiplomacy = (scenario: IScenario, data: ASData): void => {
    const playablePlayers: Array<IPlayer> = scenario.players.slice(1, 9);

    playablePlayers.forEach((player: IPlayer) => {
        for(let i: number = 0; i < 8; i++) {
            player.diplomacy.push(data.getInt32());
        }
        data.skip(8 * 4); // skip diplomacy to other players
    });
    data.skip(8 * 16 * 4); // skip other players
};

export default {
    readDiplomacy: readDiplomacy
};
