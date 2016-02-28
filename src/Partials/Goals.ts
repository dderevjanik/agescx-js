import IScenario from './../Interfaces/IScenario';
import IGoals from './../Interfaces/IGoals';
import ASData from 'asdata';

export const readGoals = (scenario: IScenario, data: ASData): void => {
    const goals: IGoals = scenario.goals;

    goals.conquest = data.getInt32();
    goals.unk1 = data.getInt32();
    goals.relics = data.getInt32();
    goals.unk2 = data.getInt32();
    goals.exploration = data.getInt32();
    goals.unk3 = data.getInt32();
    goals.all = data.getInt32();
    goals.mode = data.getInt32();
    goals.score = data.getInt32();
    goals.time = data.getInt32();
};
