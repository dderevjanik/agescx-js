import ASData from 'asdata';

/**
 * Create ASDataView from buffer
 * @param {ArrayBuffer} arrayBuffer - file buffer
 * @retunr {ASData}
 */
export const createASDataView = (arrayBuffer: ArrayBuffer) =>
    new ASData(arrayBuffer);
