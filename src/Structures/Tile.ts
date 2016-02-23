import ITile from './../interfaces/ITile';
import ASDataView from './../ASDataView';

export const readTile = (data: ASDataView): ITile => ({
    type: <number> data.getUint8()[0],
    level: <number> data.getUint8()[0],
    unk1: <number> data.getUint8()[0]
});
