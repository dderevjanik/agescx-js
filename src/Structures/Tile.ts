import ITile from './../interfaces/ITile';
import ASData from 'asdata';

export const readTile = (data: ASData): ITile => ({
    type: data.getUint8(),
    level: data.getUint8(),
    unk1: data.getUint8()
});
