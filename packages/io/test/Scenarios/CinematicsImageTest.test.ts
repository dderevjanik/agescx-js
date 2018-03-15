import { readScenarioFromFile } from '../Helpers';

describe('testing scenario with cinematics and image', () => {
  const scenario = readScenarioFromFile('./scenarios/1.21/sections/cinematics-image.scx');

  it('should have intro cinematics = "Mslogo"', () => {
    expect(scenario.cinematics.intro).toBe('Mslogo');
  });

  it('should have defeat cinematics = "Mslogo"', () => {
    expect(scenario.cinematics.defeat).toBe('Mslogo');
  });

  it('should have victory cinematics = "Mslogo"', () => {
    expect(scenario.cinematics.victory).toBe('Mslogo');
  });

  it('should have background image = "scenariobkh"', () => {
    expect(scenario.image.filename).toBe('scenariobkg');
  });
});
