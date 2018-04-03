import { readFileSync } from 'fs';
import { readScenario } from '../packages/io/IO';
import { checkScenario } from '../packages/checker/Checker';

const scx = readFileSync('../scenarios/1.21/aok/Castaway.scx');
const scenario = readScenario(scx);
const errors = checkScenario(scenario);
console.log(errors);
