import ASData from 'asdata';

export type BitmapStruct = {
  size: number;
  width: number;
  height: number;
  planes: number;
  bitCount: number;
  compresion: number;
  sizeImage: number;
  xPels: number;
  yPels: number;
  colors: number;
  impColors: number;
  colorPallette: number[];
  raw: number[];
};

export function readBitmap(data: ASData): any {
  const header = {
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
  const body = {
    colorPallette: data.skip(4 * header.colors),
    raw: data.skip(header.sizeImage)
  };
  // TODO: Object.assign(header, body);
  return {};
}
