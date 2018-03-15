import { readScenarioFromFile } from '../Helpers';

describe('testing scenario with messages', () => {
  const scenario = readScenarioFromFile('./scenarios/1.21/sections/messages.scx');

  it('should have hints = "Hints"', () => {
    expect(scenario.messages.hintsTxt).toBe('Hints\0');
  });

  it('should have victory = "Victory"', () => {
    expect(scenario.messages.victoryTxt).toBe('Victory\0');
  });

  it('should have loss = "Loss"', () => {
    expect(scenario.messages.lossTxt).toBe('Loss\0');
  });

  it('should have history = "History"', () => {
    expect(scenario.messages.historyTxt).toBe('History\0');
  });

  it('should have scout = "Scout"', () => {
    expect(scenario.messages.scoutTxt).toBe('Scout\0');
  });
});
