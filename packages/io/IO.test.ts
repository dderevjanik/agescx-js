import { readFileSync } from 'fs';
import { readScenario } from './IO';

const file = readFileSync('../../scenarios/1.21/aok/Castaway.scx');
const scenario = readScenario(file);
