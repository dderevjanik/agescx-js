import IScenario from './../Interfaces/IScenario';
import IPlayer from './../Interfaces/IPlayer';
import debug from './../Utils/Debug';
import {readUnit} from './Unit';
import ASData from 'asdata';

export const readUnits = (scenario: IScenario, data: ASData): void => {
    const allPlayers: Array<IPlayer> = scenario.players;

    allPlayers.forEach((player: IPlayer, index: number) => {
        const numOfUnits: number = data.getUint32();

        debug(`AgeScx: Player #${index} num. of units = ${numOfUnits}`);

        for(let i: number = 0; i < numOfUnits; i++) {
            player.units.push(readUnit(data));
        }
    });

};