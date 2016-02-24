import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import ASDataView from './../ASDataView';

export const readPlayerData2 = (scenario: IScenario, data: ASDataView): void => {
    const playablePlayers: Array<IPlayer> = scenario.players.slice(1, 9);

    for (let i: number = 0; i < 16; i++) {
        data.getStr16();
        data.getStr16();
    }

    // ai name
    playablePlayers.forEach((player: IPlayer) => {
        player.aiName = data.getStr16()[0];
    });
    for (let i: number = 0; i < 8; i++){
        data.getStr16();
    }

    // ai source
    playablePlayers.forEach((player: IPlayer) => {
        data.skip(8) // unknowns 2 & 3
        player.aiSource = data.getStr32()[0];
    });
    for (let i: number = 0; i < 8; i++){
        data.skip(8);
        data.getStr32();
    }

    // ai type
    playablePlayers.forEach((player: IPlayer) => {
        player.aiType = data.getInt8()[0];
    });
    data.skip(8); // skip non-playable players
    data.skip(4); // separator
};
