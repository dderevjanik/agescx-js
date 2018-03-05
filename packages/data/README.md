# AgeScx - Data

Extracted data from Age of Empires 2 HD.

Those data helps you to edit your scenarios a much faster, thanks to Typescript's intellisense support.
For example, if you want to edit player's civilization, it works like that

## Usage

```javascript
import { readScenario } from 'agescx/io';
import { Civilization } from 'agescx/data';
import { readFileSync } from 'fs';

const scx = readFileSync('path/to/scenario.scx');
const scenario = readScenario(scx);

scenario.compressedHeader.playersData[1].civ = Civilization.France;
// Throws an error, because 'France' doesn't exists
// and will also try correct a user with "Did you mean 'Franks'?"

scenario.compressedHeader.playersData[1].civ = Civilization.Franks;
// Ok ! No errors
```

## List

- **Age** Age ID
- **AIType** AI type ID
- **Civilization** Civilization ID
- **DifficultyLevel** Difficulty level ID
- **Player** Player Indexes
- **PlayerColor** Player Colors (HEX)
- **Resource**  InGame Resource IDs
- **ScenarioSize** Scenario default size
- **Terrain** Terrain IDs and their minimap colors (HEX)
- **UnitGroup** List of Groups ant theirs unit IDs

## Download

You can also download data in different formats (`.json`, `.xml`, `.yaml`)
