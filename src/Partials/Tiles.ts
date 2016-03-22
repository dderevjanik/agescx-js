import {readTile} from './Tile';
import {readStructures} from './../Utils/RWUtils';
import ASData from 'asdata';
import IScenario from './../Interfaces/IScenario';

export const readTiles = (scenario: IScenario, data: ASData) => {
    const count: number = scenario.setup.width * scenario.setup.height;
    scenario.tiles = readStructures(count, () => readTile(data));
};

export default {
    readTiles: readTiles
};
