import ASData from "asdata";

export type ImageStruct = {
  filename: string;
  included: number;
  width: number;
  height: number;
  exists: number;
};

export function readImage(data: ASData): ImageStruct {
  const imageHeader = {
    /**
     * Image filename
     */
    filename: data.getStr16(),
    included: data.getInt32(),
    width: data.getInt32(),
    height: data.getInt32(),
    exists: data.getInt16()
  };
  if (imageHeader.exists === -1 || imageHeader.exists === 2) {
    const bitmapHeader = {
      size: data.getInt32(),
      width: data.getUint32(),
      height: data.getUint32(),
      planes: data.getInt16(),
      bitCount: data.getInt16(),
      compresion: data.getUint32(),
      sizeImage: data.getUint32(),
      xPels: data.getUint32(),
      yPels: data.getUint32(),
      colors: data.getUint32(),
      impColors: data.getUint32()
    };
    data.skip(4 * bitmapHeader.colors);
    data.skip(bitmapHeader.sizeImage);
    // @TODO: finish this !
  }
  return imageHeader;
}
