import IGoals from './../Interfaces/IGoals';

const createGoals = (): IGoals => ({
    conquest: 0,
    relics: 0,
    exploration: 0,
    all: 0,
    mode: 0,
    score: 0,
    time: 0,
    unk1: 0,
    unk2: 0,
    unk3: 0
});

export default createGoals;
