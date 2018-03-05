import { readFileSync } from 'fs';
import { readScenario } from './io/IO';
import { printStats } from './stats/Stats';

const runExample = (path: string) => {
  const file = readFileSync(path);
  const scenario = readScenario(file);
  printStats(scenario);
};

runExample('../scenarios/1.21/aok/Castaway.scx');
// runExample('../scenarios/1.21/default.scx');
