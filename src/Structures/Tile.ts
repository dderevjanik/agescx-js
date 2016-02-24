import ITile from './../interfaces/ITile';
import ASDataView from './../ASDataView';

export const readTile = (data: ASDataView): ITile => ({
    type: data.getUint8()[0],
    level: data.getUint8()[0],
    unk1: data.getUint8()[0]
});
