import IUnit from './../Interfaces/IUnit';

const createUnit = (): IUnit => ({
    id: 0,
    inId: 0,
    type: 0,
    x: 0,
    y: 0,
    angle: 0,
    frame: 0,
    unk1: 0,
    unk2: 0
});

export default createUnit;
