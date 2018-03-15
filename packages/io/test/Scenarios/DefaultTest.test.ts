import { readScenarioFromFile } from '../Helpers';

describe('testing default scenario', () => {
  const scenario = readScenarioFromFile('./scenarios/1.21/default.scx');

  it('should have header version = 1.21', () => {
    expect(scenario.header.version).toBe('1.21');
  });

  it('should have players = 2', () => {
    expect(scenario.header.players).toBe(2);
  });

  it('should have scenario version = 1.21', () => {
    expect(scenario.header.version).toBe('1.21');
  });

  it('should have size [144, 144]', () => {
    expect(scenario.map.width).toBe(144);
    expect(scenario.map.height).toBe(144);
  });

  it('should have goals = conquest = 1', () => {
    expect(scenario.goals.conquest).toBe(1);
  });

  it('should have aiType = 2', () => {
    expect(scenario.map.aiType).toBe(2);
  });

  it('should have start camera = [-1, -1]', () => {
    expect(scenario.map.startingCamera[0]).toBe(-1);
    expect(scenario.map.startingCamera[1]).toBe(-1);
  });

  it('should have next unit id = 0', () => {
    expect(scenario.compressedHeader.nextUnitId).toBe(0);
  });

  it('should have filename = "default.scx"', () => {
    expect(scenario.compressedHeader.originalFilename).toBe('default.scx');
  });
});
