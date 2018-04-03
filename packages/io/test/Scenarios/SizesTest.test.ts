import { readScenarioFromFile } from "../Helpers";

describe("testing different scenario sizes", () => {
  it("tiny scenario should have size [120, 120]", () => {
    const scenario = readScenarioFromFile("./scenarios/1.21/sizes/tiny.scx");
    expect(scenario.map.width).toBe(120);
    expect(scenario.map.height).toBe(120);
  });

  it("small scenario should have size [144, 144]", () => {
    const scenario = readScenarioFromFile("./scenarios/1.21/sizes/small.scx");
    expect(scenario.map.width).toBe(144);
    expect(scenario.map.height).toBe(144);
  });

  it("medium scenario should have size [168, 168]", () => {
    const scenario = readScenarioFromFile("./scenarios/1.21/sizes/medium.scx");
    expect(scenario.map.width).toBe(168);
    expect(scenario.map.height).toBe(168);
  });

  it("normal scenario should have size [200, 200]", () => {
    const scenario = readScenarioFromFile("./scenarios/1.21/sizes/normal.scx");
    expect(scenario.map.width).toBe(200);
    expect(scenario.map.height).toBe(200);
  });

  it("large scenario should have size [220, 220]", () => {
    const scenario = readScenarioFromFile("./scenarios/1.21/sizes/large.scx");
    expect(scenario.map.width).toBe(220);
    expect(scenario.map.height).toBe(220);
  });

  it("giant scenario should have size [240, 240]", () => {
    const scenario = readScenarioFromFile("./scenarios/1.21/sizes/giant.scx");
    expect(scenario.map.width).toBe(240);
    expect(scenario.map.height).toBe(240);
  });
});
