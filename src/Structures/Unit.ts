import IUnit from './../interfaces/IUnit';
import ASDataView from './../ASDataView';

export const readUnit = (data: ASDataView): IUnit => ({
    x: <number> data.getFloat32()[0],
    y: <number> data.getFloat32()[0],
    unk1: <number> data.getFloat32()[0],
    id: <number> data.getUint32()[0],
    type: <number> data.getUint16()[0],
    unk2: <number> data.getInt8()[0],
    angle: <number> data.getFloat32()[0],
    frame: <number> data.getUint16()[0],
    inId: <number> data.getInt32()[0],
});
