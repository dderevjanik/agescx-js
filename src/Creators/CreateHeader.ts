import IHeader from './../Interfaces/IHeader';

const createHeader = (version: string = '1.21'): IHeader => ({
    version: '',
    size: 0,
    lastSave: 20,
    instructions: '',
    players: 8,
    unknown1: 2,
    unknown2: 0,
});

export default createHeader;
