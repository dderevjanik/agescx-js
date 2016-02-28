import IScenario from './../Interfaces/IScenario';
import ICinematics from './../Interfaces/ICinematics';
import ASData from 'asdata';

export const readCinematics = (scenario: IScenario, data: ASData): void => {
    const cinematics: ICinematics = scenario.cinematics;

    cinematics.intro = data.getStr16();
    cinematics.defeat = data.getStr16();
    cinematics.victory = data.getStr16();
};
