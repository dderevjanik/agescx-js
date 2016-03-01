import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import ASData from 'asdata';

export const readPlayerData4 = (scenario: IScenario, data: ASData): void => {
    const playablePlayers: Array<IPlayer> = scenario.players.slice(1, 9);

    playablePlayers.forEach((player: IPlayer) => {
        player.constName = data.getStr16();
        player.startCam = [
            data.getFloat32(),
            data.getFloat32()
        ];
        data.skip(4); // skip duplicated camera X and camera Y
        data.skip(1); // skip allyVictory, duplicated

        const numOfDipl: number = data.getUint16();

        data.skip(numOfDipl * 1);
        data.skip(9 * 4); // player / diplomacy
        player.color = data.getUint32();
        player.unk2 = data.getFloat32();
        player.unk3 = data.getUint16();
        if (player.unk2 === 2.0){
            data.skip(8 * 1);
        }
        data.skip(player.unk3 * 44);
        data.skip(7 * 1);
        data.skip(4);
    });
};
