import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import ASDataView from './../ASDataView';

export const readPlayerData1 = (scenario: IScenario, data: ASDataView): void => {
    const allPlayers: Array<IPlayer> = scenario.players;

    allPlayers.forEach((player: IPlayer) => {
        player.active = data.getUint32()[0];	// is active
        player.human = data.getUint32()[0];	// is human
        player.civ = data.getInt32()[0];		// player civilization
        player.unk1 = data.getUint32()[0];		// ? unknown
    });
    data.skip(7*16); // skip non-playable players
};
