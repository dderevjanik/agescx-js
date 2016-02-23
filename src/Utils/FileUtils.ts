import ASDataView from './../ASDataView';

/**
 * Create ASDataView from buffer
 * @param {ArrayBuffer} arrayBuffer - file buffer
 * @retunr {ASDataView}
 */
export const createASDataView = (arrayBuffer: ArrayBuffer) =>
    new ASDataView(new DataView(arrayBuffer));
