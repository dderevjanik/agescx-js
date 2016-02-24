import IScenario from './../Interfaces/IScenario';
import IGoals from './../Interfaces/IGoals';
import ASDataView from './../ASDataView';

export const readGoals = (scenario: IScenario, data: ASDataView): void => {
    const goals: IGoals = scenario.goals;

    goals.conquest = data.getInt32()[0];
    goals.unk1 = data.getInt32()[0];
    goals.relics = data.getInt32()[0];
    goals.unk2 = data.getInt32()[0];
    goals.exploration = data.getInt32()[0];
    goals.unk3 = data.getInt32()[0];
    goals.all = data.getInt32()[0];
    goals.mode = data.getInt32()[0];
    goals.score = data.getInt32()[0];
    goals.time = data.getInt32()[0];
};
