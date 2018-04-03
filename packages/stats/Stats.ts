import { ScenarioStruct } from "../io/IO";
import { Terrain } from "../data/Terrain";
import { Civilization } from "../data/Civilization";
import chalk from "chalk";
import { getDominantTerrain } from "../helpers/Helpers";

const { green, yellow } = chalk;

const civilizations = Object.entries(Civilization).reduce((acc, civ) => ({ ...acc, [civ[1].id]: civ[0] }));
const terrains = Object.entries(Terrain).reduce((acc, ter) => ({ ...acc, [ter[1].id]: ter[0] }));

export const printStats = (scenario: ScenarioStruct) => {
  console.log(`${green("Filename:")} ${scenario.compressedHeader.originalFilename}`);
  console.log(`${green("Size:")} ${scenario.map.width} x ${scenario.map.height}`);
  console.log(`${green("Players:")} ${scenario.header.players}`);
  scenario.compressedHeader.playersData.forEach((player, index) => {
    const playerName = scenario.compressedHeader.playerNames[index].replace(/\0/g, "");
    const civilization = civilizations[player.civilization];
    if (player.active) {
      if (player.human) {
        console.log(`- [${index}] ${yellow("Player")} (${civilization})`);
      } else {
        console.log(`- [${index}] ${playerName} (${civilization})`);
      }
    }
  });
  const unitsCount = scenario.units.sections.reduce((acc, val) => acc + val.count, 0);
  console.log(`${green("Units:")}`);
  console.log(`- GAIA: ${unitsCount}`);
  console.log(`- Players: ${unitsCount - scenario.units.sections[0].count}`);
  console.log(`${green("Triggers:")} ${scenario.triggersCount}`);
  if (scenario.triggersCount > 0) {
    const [effectsCount, conditionsCount] = scenario.triggers.reduce(
      (acc, val) => [acc[0] + val.effectCount, acc[1] + val.conditionCount],
      [0, 0]
    );
    console.log(`- ${yellow("Effects")} ${effectsCount}`);
    console.log(`- ${yellow("Conditions")} ${conditionsCount}`);
  }
  const terId = getDominantTerrain(scenario);

  const terrain = terrains[parseInt(terId[0])];
  console.log(`${yellow("Terrain")}: ${terrain}`);
};
