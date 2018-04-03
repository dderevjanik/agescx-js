import ASData from "asdata";

export type ResourceStruct = {
  gold: number;
  wood: number;
  food: number;
  stone: number;
  /**
   * Ore is unused resource !
   */
  ore: number;
  /**
   * Trade Goods
   */
  goods: number;
};

export const readResourceStruct = (data: ASData): ResourceStruct => {
  return {
    gold: data.getUint32(),
    wood: data.getUint32(),
    food: data.getUint32(),
    stone: data.getUint32(),
    ore: data.getUint32(),
    goods: data.getUint32()
  };
};
