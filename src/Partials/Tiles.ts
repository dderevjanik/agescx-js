import {readTile} from './Tile';
import ASData from 'asdata';
import IScenario from './../Interfaces/IScenario';

export const readTiles = (scenario: IScenario, data: ASData) => {
    const count: number = scenario.setup.width * scenario.setup.height;

    for(let i: number = 0; i < count; i++) {
        scenario.tiles.push(readTile(data));
    }
};

export default {
    readTiles: readTiles
};
