/* tslint:disable:no-any */
import ASData from 'asdata';

declare const Buffer;

/**
 * Create ASDataView from buffer
 * @param {ArrayBuffer} arrayBuffer - file buffer
 * @retunr {ASData}
 */
export const createASDataView = (arrayBuffer: any): ASData =>
    new ASData(arrayBuffer);
