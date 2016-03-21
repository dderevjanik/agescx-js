/* tslint:disable:no-unused-variable */
import IScenario from './../Interfaces/IScenario';
import IImage from './../Interfaces/IImage';
import ASData from 'asdata';

export const readImage = (scenario: IScenario, data: ASData): void => {
    const image: IImage = scenario.image;

    image.filename = data.getStr16();
    image.included = data.getInt32();
    image.width = data.getInt32();
    image.height = data.getInt32();
    image.exists = data.getInt16();

    if ((image.exists === -1) || (image.exists === 2)){
        const size: number = data.getInt32();
        const width: number = data.getUint32();
        const height: number = data.getUint32();
        const planes: number = data.getInt16();
        const bitCount: number = data.getInt16();
        const compresion: number = data.getUint32();
        const sizeImage: number = data.getUint32();
        const xPels: number = data.getUint32();
        const yPels: number = data.getUint32();
        const colors: number = data.getUint32();
        const impColors: number = data.getUint32();
        data.skip(4 * colors);
        data.skip(sizeImage);
    }
};

export default {
    readImage: readImage
};
