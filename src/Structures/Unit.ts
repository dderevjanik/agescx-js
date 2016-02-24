import IUnit from './../interfaces/IUnit';
import ASDataView from './../ASDataView';

export const readUnit = (data: ASDataView): IUnit => ({
    x: data.getFloat32()[0],
    y: data.getFloat32()[0],
    unk1: data.getFloat32()[0],
    id: data.getUint32()[0],
    type: data.getUint16()[0],
    unk2: data.getInt8()[0],
    angle: data.getFloat32()[0],
    frame: data.getUint16()[0],
    inId: data.getInt32()[0],
});
