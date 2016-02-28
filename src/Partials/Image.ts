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
        // @todo finish
    }
};
