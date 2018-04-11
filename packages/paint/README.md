# Paint

## Usage

```typescript
import { Paint, readScenario } from 'agescx';
import { readFileSync } from 'fs';

const scxFile = readFileSync('./path/to/scenario.scx');
const scenario = readScenario(scxFile);

const paint = new Paint(scenario);

// Draw line from start to 20, 20
paint.line(0, 0, 20, 20);

// Draw rectangle
paint.box(scenario.map.width / 2, scenario.map.height / 2, 20, 20);
```
