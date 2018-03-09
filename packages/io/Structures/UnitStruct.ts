import ASData from 'asdata';

export type UnitStruct = {
  /**
   * X position
   */
  x: number;
  /**
   * Y position
   */
  y: number;
  unknown1: number;
  /**
   * Unit ID, this ID is used for triggers
   */
  id: number;
  /**
   * Unit Type ID
   */
  unit: number;
  unknown2: number;
  /**
   * Rotation in Radians
   */
  rotation: number;
  /**
   * Initial Frame
   */
  initialFrame: number;
  /**
   * In which unit is garissoned
   */
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
    garissonId: data.getInt32()
  };
}
