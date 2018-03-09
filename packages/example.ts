import { readFileSync } from 'fs';
import { readScenario } from './io/IO';
import { printStats } from './stats/Stats';
import { check } from './checker/Checker';

const runExample = (path: string) => {
  const file = readFileSync(path);
  const scenario = readScenario(file);
  // printStats(scenario);
  check(scenario);
};
runExample('../scenarios/1.21/aok/Castaway.scx');
// runExample('../scenarios/1.21/default.scx');
