import IScenario from './../Interfaces/IScenario';
import IImage from './../Interfaces/IImage';
import ASDataView from './../ASDataView';

export const readImage = (scenario: IScenario, data: ASDataView): void => {
    const image: IImage = scenario.image;

    image.filename = data.getStr16()[0];
    image.included = data.getInt32()[0];
    image.width = data.getInt32()[0];
    image.height = data.getInt32()[0];
    image.exists = data.getInt16()[0];

    if ((image.exists === -1) || (image.exists === 2)){
        // @todo finish
    }
};
