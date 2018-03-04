import IGoals from './../Interfaces/IGoals';

const createGoals = (): IGoals => ({
  conquest: 0,
  relics: 0,
  exploration: 0,
  all: 0,
  mode: 0,
  score: 0,
  time: 0,
  unknown1: 0,
  unknown2: 0,
  unknown3: 0
});

export default createGoals;
