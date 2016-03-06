/// <reference path="../../typings/jasmine/jasmine.d.ts"/>
import Scenario from '../../src/Scenario';
import IScenario from '../../src/Interfaces/IScenario';

describe('testing default scenario', () => {
    const scenario: IScenario = Scenario.readScenarioFile('./scenarios/1.21/default.scx');

    it('should have header version = 1.21', () => {
        expect(scenario.header.version).toBe('1.21');
    });

    it('should have players = 2', () => {
        expect(scenario.header.players).toBe(2);
    });

    it('should have scenario version = 1.22', () => {
        expect(scenario.version).toBe('1.22');
    });

    it('should have size [144, 144]', () => {
        expect(scenario.setup.width).toBe(144);
        expect(scenario.setup.height).toBe(144);
    });

    it('should have goals = conquest = 1', () => {
        expect(scenario.goals.conquest).toBe(1);
    });

    it('should have allTech = 0', () => {
        expect(scenario.setup.allTech).toBe(0);
    });

    it('should have aiType = 2', () => {
        expect(scenario.setup.aiType).toBe(2);
    });

    it('should have start camera = [-1, -1]', () => {
        expect(scenario.setup.startCam[0]).toBe(-1);
        expect(scenario.setup.startCam[1]).toBe(-1);
    });

    it('should have next unit id = 0', () => {
        expect(scenario.setup.nextId).toBe(0);
    });

    it('should have filename = "default.scx"', () => {
        expect(scenario.setup.filename).toBe('default.scx');
    });

});
