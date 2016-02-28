import IUnit from './../interfaces/IUnit';
import ASData from 'asdata';

export const readUnit = (data: ASData): IUnit => ({
    x: data.getFloat32(),
    y: data.getFloat32(),
    unk1: data.getFloat32(),
    id: data.getUint32(),
    type: data.getUint16(),
    unk2: data.getInt8(),
    angle: data.getFloat32(),
    frame: data.getUint16(),
    inId: data.getInt32()
});
