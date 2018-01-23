import ASData from "asdata";

export type ImageStruct = {
  filename: string;
  included: number;
  width: number;
  height: number;
  exists: number;
};

export function readImage(data: ASData): ImageStruct {
  return {
    filename: data.getStr16(),
    included: data.getInt32(),
    width: data.getInt32(),
    height: data.getInt32(),
    exists: data.getInt16()
  };
}
