import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import ASDataView from './../ASDataView';
import {readUnit} from './../Structures/Unit';

export const readUnits = (scenario: IScenario, data: ASDataView): void => {
    const allPlayers: Array<IPlayer> = scenario.players;

    allPlayers.forEach((player: IPlayer) => {
        const numOfUnits: number = data.getUint32()[0];
        for(let i: number = 0; i < numOfUnits; i++){
            player.units.push(readUnit(data));
        }
    });

};
