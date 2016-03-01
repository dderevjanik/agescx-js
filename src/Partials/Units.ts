import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import {readUnit} from './../Structures/Unit';
import ASData from 'asdata';

export const readUnits = (scenario: IScenario, data: ASData): void => {
    const allPlayers: Array<IPlayer> = scenario.players;

    allPlayers.forEach((player: IPlayer) => {
        const numOfUnits: number = data.getUint32();
        for(let i: number = 0; i < numOfUnits; i++) {
            player.units.push(readUnit(data));
        }
    });

};
