# AgeScx - Converter

Convert scenario or its part to `.json`, `.xml` or `.yaml` format.

## Usage

```javascript
import { readScenario } from 'agescx/io';
import { convert } from 'agescx/converter';
import { readFileSync, writeFileSync } from 'fs';

const scx = readFileSync('path/to/scenario.scx');
const scenario = readScenario(scx);

// Supported formats
convert(scenario, 'json');
convert(scenario, 'xml');
convert(scenario, 'yaml');

// Convert only specific section
const triggers = convert(scenario, 'xml', 'triggers');

// Save a converted scenario
const yamlscx = convert(scenario, 'yaml');
writeFileSync('./myscenario.yaml');
writeFileSync('./scenariotriggers.xml', triggers);
```
