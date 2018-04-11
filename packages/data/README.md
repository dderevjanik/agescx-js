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

- [Age](./Age.ts) Age ID
- [AIType](./AIType.ts) AI type ID
- [Civilization](./Civilization.ts) Civilization ID
- [DifficultyLevel](./DifficultyLevel.ts) Difficulty level ID
- [GameExtension](./GameExtension.ts) Extensions (DLC)
- [Player](./Player.ts) Player Indexes
- [PlayerColor](./PlayerColor.ts) Player Colors (HEX)
- [Resource](./Resource.ts)  InGame Resource IDs
- [ScenarioSize](./ScenarioSize.ts) Scenario default size
- [Tech](./Tech.ts) Tech name to ID
- [Terrain](./Terrain.ts) Terrain IDs and their minimap colors (HEX)
- [Unit](./Unit.ts) Unit name to ID
- [UnitGroup](./UnitGroup.ts) List of Groups ant theirs unit IDs
- [Effect](./Effect.ts) Effect types
- [Condition](./Condition.ts) Condition types

## Download

You can also download data in different formats (`.json`, `.xml`, `.yaml`)
