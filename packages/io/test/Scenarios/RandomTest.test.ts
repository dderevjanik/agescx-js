import { readScenarioFromFile } from "../Helpers";

describe("testing random scenarios, ", () => {
  describe("Arabia", () => {
    const scenario = readScenarioFromFile("./scenarios/1.21/random/arabia.scx");

    it("GAIA player should have 2530 units", () => {
      expect(scenario.units.sections[0].units.length).toBe(2530);
    });

    it("Player 1 should have 5 units", () => {
      expect(scenario.units.sections[1].units.length).toBe(5);
    });

    it("Player 2 should have 5 units", () => {
      expect(scenario.units.sections[2].units.length).toBe(5);
    });
  });

  describe("Archipelago", () => {
    const scenario = readScenarioFromFile("./scenarios/1.21/random/archipelago.scx");

    it("GAIA player should have 1581 units", () => {
      expect(scenario.units.sections[0].units.length).toBe(1581);
    });

    it("Player 1 should have 5 units", () => {
      expect(scenario.units.sections[1].units.length).toBe(5);
    });

    it("Player 2 should have 5 units", () => {
      expect(scenario.units.sections[2].units.length).toBe(5);
    });
  });

  describe("Arena", () => {
    const scenario = readScenarioFromFile("./scenarios/1.21/random/arena.scx");

    it("GAIA player should have 10065 units", () => {
      expect(scenario.units.sections[0].units.length).toBe(10065);
    });

    it("Player 1 should have 79 units", () => {
      expect(scenario.units.sections[1].units.length).toBe(79);
    });

    it("Player 2 should have 109 units", () => {
      expect(scenario.units.sections[2].units.length).toBe(109);
    });
  });

  describe("Baltic", () => {
    const scenario = readScenarioFromFile("./scenarios/1.21/random/baltic.scx");

    it("GAIA player should have 1683 units", () => {
      expect(scenario.units.sections[0].units.length).toBe(1683);
    });

    it("Player 1 should have 5 units", () => {
      expect(scenario.units.sections[1].units.length).toBe(5);
    });

    it("Player 2 should have 5 units", () => {
      expect(scenario.units.sections[2].units.length).toBe(5);
    });
  });

  describe("Black Forest", () => {
    const scenario = readScenarioFromFile("./scenarios/1.21/random/black-forest.scx");

    it("GAIA player should have 7803 units", () => {
      expect(scenario.units.sections[0].units.length).toBe(7803);
    });

    it("Player 1 should have 5 units", () => {
      expect(scenario.units.sections[1].units.length).toBe(5);
    });

    it("Player 2 should have 5 units", () => {
      expect(scenario.units.sections[2].units.length).toBe(5);
    });
  });
});
