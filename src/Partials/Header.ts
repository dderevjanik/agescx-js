import IScenario from './../Interfaces/IScenario';
import IHeader from './../Interfaces/IHeader';
import ASData from 'asdata';

export const readHeader = (scenario: IScenario, data: ASData): void => {
    const header: IHeader = scenario.header;

    header.version = data.getChar(4);      // scenario version
    header.size = data.getUint32();        // size of headerer, excluding version and this
    header.unknown1 = data.getUint32();    // ? unknown
    header.lastSave = data.getUint32();    // last save game timestamp
    header.instructions = data.getStr32(); // instructions before a start
    header.unknown2 = data.getInt32();     // ? unknown
    header.players = data.getInt32();
};

export default {
    readHeader: readHeader
};
