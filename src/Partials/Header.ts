import IScenario from './../Interfaces/IScenario';
import IHeader from './../Interfaces/IHeader';
import ASDataView from './../ASDataView';

export const readHeader = (scenario: IScenario, data: ASDataView): void => {
    const header: IHeader = scenario.header;

    header.version = data.getChar(4).join("");	// scenario version
    header.size = data.getUint32()[0];			// size of headerer, excluding version and this
    header.unknown1 = data.getUint32()[0];		// ? unknown
    header.lastSave = data.getUint32()[0];		// last save game timestamp
    header.instructions = data.getStr32()[0];	// instructions before a start
    header.unknown2 = data.getInt32()[0];		// ? unknown
    header.players = data.getInt32()[0];
};
