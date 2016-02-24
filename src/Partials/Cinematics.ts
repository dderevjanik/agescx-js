import IScenario from './../Interfaces/IScenario';
import ICinematics from './../Interfaces/ICinematics';
import ASDataView from './../ASDataView';

export const readCinematics = (scenario: IScenario, data: ASDataView): void => {
    const cinematics: ICinematics = scenario.cinematics;

    cinematics.intro = data.getStr16()[0];
    cinematics.defeat = data.getStr16()[0];
    cinematics.victory = data.getStr16()[0];
};
