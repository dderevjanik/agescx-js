# AgeScx - Stats

**Stats** is small tool that prints human-readable statistics to console from
your scenario.

## Usage

```javascript
import { readScenario } from 'agescx/io';
import { printStats } from 'agescx/stats';
import { readFileSync } from 'fs';

const scx = readFileSync('path/to/scenario.scx');
const scenario = readScenario(scx);

printStats(scenario); // Will print stats to console
```
