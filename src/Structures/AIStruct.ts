import ASData from 'asdata';

export type AIStruct = {
  unknown1: number;
  unknown2: number;
  /**
   * Name of AI.per file
   */
  fileText: string;
};

export const readAIStruct = (data: ASData): AIStruct => {
  return {
    unknown1: data.getUint32(),
    unknown2: data.getUint32(),
    fileText: data.getStr32()
  };
};
