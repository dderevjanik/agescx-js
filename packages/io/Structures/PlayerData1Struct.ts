import ASData from "asdata";

export type PlayerData1Struct = {
  /**
   * Is player playable ?
   */
  active: number;
  /**
   * Is player human ?
   */
  human: number;
  /**
   * Civilization id
   */
  civilization: number;
  CTYMode: number;
};

export function readPlayerData1(data: ASData): PlayerData1Struct {
  return {
    active: data.getUint32(),
    human: data.getUint32(),
    civilization: data.getInt32(),
    CTYMode: data.getUint32()
  };
}
