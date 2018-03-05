# AgeScx - IO

Input/Output package is low-leve structure close as much as possible to original `.scx` and `.aoe2` scenario format.

## Read scenario

```javascript
import { readFileSync } from 'fs';
import { readScenario } from 'agescx/io';
const scxFile = readFileSync('./path/to/scenario.scx');
const scenario = readScenario(scxFile);
```
