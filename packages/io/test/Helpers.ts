import { readScenario } from "../IO";
import { readFileSync } from "fs";

export const readScenarioFromFile = (path: string) => {
  const file = readFileSync(path);
  return readScenario(file);
};
