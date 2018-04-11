export { checkScenario } from "./checker/Checker";
// export { convertScenario } from "./converter/Converter";
export { readScenario, ScenarioStruct } from "./io/IO";
export { printStats } from "./stats/Stats";
export { Paint } from "./paint/Paint";
export { Data } from "./data/All";

import * as ScenarioHelpers from "./helpers/Helpers";
export const Helpers = ScenarioHelpers;

// import { readFileSync } from 'fs';
// import { readScenario } from './io/IO';
// import { printStats } from './stats/Stats';
// import { check } from './checker/Checker';

// const runExample = (path: string) => {
//   const file = readFileSync(path);
//   const scenario = readScenario(file);
//   printStats(scenario);
//   console.log(check(scenario));
// };
// runExample('../scenarios/1.21/aok/Castaway.scx');
// // runExample('../scenarios/1.21/default.scx');
