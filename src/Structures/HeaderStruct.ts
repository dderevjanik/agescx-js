import ASData from 'asdata';

export type HeaderStruct = {
  /**
   * Scenario version
   */
  version: string;
  /**
   * Size of uncompressed header
   */
  size: number;
  /**
   * Unknown
   */
  unknown1: number;
  /**
   * Last saved
   */
  lastSave: number;
  /**
   * Scenario instructions
   */
  instructions: string;
  /**
   * Unknown
   */
  unknown2: number;
  /**
   * Number of players
   */
  players: number;
};

export function readHeader(data: ASData): HeaderStruct {
  return {
    version: data.getChar(4),
    size: data.getUint32(),
    unknown1: data.getUint32(),
    lastSave: data.getUint32(),
    instructions: data.getStr32(),
    unknown2: data.getInt32(),
    players: data.getInt32()
  };
}
