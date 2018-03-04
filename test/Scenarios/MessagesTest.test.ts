import Scenario from '../../src/Scenario';
import IScenario from '../../src/Interfaces/IScenario';

describe('testing scenario with messages', () => {
    const scenario: IScenario = Scenario.readScenarioFile('./scenarios/1.21/sections/messages.scx');

    it('should have hints = "Hints"', () => {
        expect(scenario.messages.hints.text).toBe('Hints\0');
    });

    it('should have victory = "Victory"', () => {
        expect(scenario.messages.victory.text).toBe('Victory\0');
    });

    it('should have loss = "Loss"', () => {
        expect(scenario.messages.loss.text).toBe('Loss\0');
    });

    it('should have history = "History"', () => {
        expect(scenario.messages.history.text).toBe('History\0');
    });

    it('should have scout = "Scout"', () => {
        expect(scenario.messages.scout.text).toBe('Scout\0');
    });

});
