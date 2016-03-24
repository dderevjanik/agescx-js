interface IHeader {
    version: string;        // version of SCX
    size: number;           // size of header
    lastSave: number;       // timestamp of last save
    instructions: string;   // instructions for scenario, displayed before run
    players: number;        // how many players
    unknown1: number;
    unknown2: number;
};

export default IHeader;
