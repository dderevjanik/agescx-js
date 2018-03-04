import ASData from 'asdata';

export type UnitStruct = {
  x: number;
  y: number;
  unknown1: number;
  id: number;
  unit: number;
  unknown2: number;
  rotation: number;
  initialFrame: number;
  garissonId: number;
};

export function readUnit(data: ASData): UnitStruct {
  return {
    x: data.getFloat32(),
    y: data.getFloat32(),
    unknown1: data.getFloat32(),
    id: data.getUint32(),
    unit: data.getUint16(),
    unknown2: data.getUint8(),
    rotation: data.getFloat32(),
    initialFrame: data.getUint16(),
    garissonId: data.getUint32()
  };
}
