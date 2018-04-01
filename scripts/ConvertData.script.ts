import { writeFileSync, write, writeFile } from 'fs';

// #region parsers
import * as yamljs from 'yamljs';
import * as jsontoxml from 'jsontoxml';
// #endregion
// #region data
import { Age } from '../packages/data/Age';
import { AIType } from '../packages/data/AIType';
import { Architecture } from '../packages/data/Architecture';
import { Civilization } from '../packages/data/Civilization';
import { DifficultyLevel } from '../packages/data/DifficultyLevel';
import { GameExtension } from '../packages/data/GameExtension';
import { Player } from '../packages/data/Player';
import { PlayerColor } from '../packages/data/PlayerColor';
import { Resource } from '../packages/data/Resource';
import { ScenarioSize } from '../packages/data/ScenarioSize';
import { Terrain } from '../packages/data/Terrain';
import { UnitGroup } from '../packages/data/UnitGroup';
// #endregion

function createMDTemplate(name: string, dataYml: string) {
  const lines = dataYml.split('\n');
  return `# ${name}

- [${name}.json](./${name}.json)
- [${name}.yaml](./${name}.yaml)
- [${name}.xml](./${name}.xml)

## Preview

\`\`\`yaml
${lines.slice(0, 100).join('\n')}
${lines.length > 100 ? `...\n--- More ${lines.length - 100} entries ---` : ''}
\`\`\`
`;
}

(async () => {
  const data = {
    Age: Age,
    AiType: AIType,
    Architecture: Architecture,
    Civilization: Civilization,
    DifficultyLevel: DifficultyLevel,
    GameExtension: GameExtension,
    Player: Player,
    PlayerColor: PlayerColor,
    Resource: Resource,
    ScenarioSize: ScenarioSize,
    Terrain: Terrain,
    UnitGroup: UnitGroup
  };

  const dataKeys = Object.keys(data) as (keyof typeof data)[];
  dataKeys.forEach(dataKey => {
    const obj = data[dataKey];
    const json = JSON.stringify(obj, null, 2);
    const yaml = yamljs.stringify(obj);
    const xml = jsontoxml({ [dataKey]: obj }, { prettyPrint: true });
    writeFileSync(`./docs/data/${dataKey}.json`, json);
    writeFileSync(`./docs/data/${dataKey}.yaml`, yaml);
    writeFileSync(`./docs/data/${dataKey}.xml`, xml);
    writeFileSync(`./docs/data/${dataKey}.md`, createMDTemplate(dataKey, json));
  });
})();
