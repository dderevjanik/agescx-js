const BlankHeader = (version: string = "1.21") => ({
    version: version,
    size: 0,
    unknown1: 2,
    lastSave: 20,
    instructions: "",
    unknown2: 0,
    players: 8,
});

export default BlankHeader;
