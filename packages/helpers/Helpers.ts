import { ScenarioStruct } from "../io/Structures/ScenarioStruct";
import { UnitStruct } from "../io/Structures/UnitStruct";
import { ConditionStruct } from "../io/Structures/ConditionStruct";
import { EffectStruct } from "../io/Structures/EffectStruct";
import { TileStruct } from "../io/Structures/TileStruct";

/**
 * Get all units in scenario
 * @param scenario
 * @param includeGaia - should also returns gaia units ?
 */
export const getAllUnits = (scenario: ScenarioStruct, includeGaia: boolean = true) =>
  (includeGaia ? scenario.units.sections : scenario.units.sections.slice(1, 16)).reduce(
    (acc, section) => [...acc, ...section.units],
    [] as UnitStruct[]
  );

/**
 * Get all conditions in scenario
 * @param scenario
 */
export const getAllConditions = (scenario: ScenarioStruct) =>
  scenario.triggers.reduce((acc, trigger) => [...acc, ...trigger.conditions], [] as ConditionStruct[]);

/**
 * Get all effects in scenario
 * @param scenario
 */
export const getAllEffects = (scenario: ScenarioStruct) =>
  scenario.triggers.reduce((acc, trigger) => [...acc, ...trigger.effects], [] as EffectStruct[]);

/**
 * Get all units ids
 * @param scenario
 * @param includeGaia - should also includes gaia unit ids ?
 */
export const getAllUnitIds = (scenario: ScenarioStruct, includeGaia: boolean = true) =>
  getAllUnits(scenario, includeGaia).reduce((acc, unit) => [...acc, unit.id], [] as number[]);

/**
 * Get only gaia units
 * @param scenario
 */
export const getGaiaUnits = (scenario: ScenarioStruct) => scenario.units.sections[0].units;

/**
 * Returns scenario tiles as 2d Array
 * @param scenario
 * @desc by default, scenario tiles are stored as 1d Array
 */
export const getMap2dArray = (scenario: ScenarioStruct) => {
  const tiles = [] as TileStruct[][];
  const width = scenario.map.width;
  for (let i = 0; i < scenario.map.height; i++) {
    const row = scenario.map.terrain.slice(i * width, width);
    tiles.push(row);
  }
  return tiles;
};

/**
 * Find unit by it's id
 * @param scenario
 * @param unitId
 */
export const getUnitById = (scenario: ScenarioStruct, unitId: number) => {
  for (const uSection of scenario.units.sections) {
    const foundUnit = uSection.units.find(unit => unit.id === unitId);
    if (foundUnit) {
      return foundUnit;
    }
  }
  return null;
};

/**
 * Get tile at Row and Col
 * @param scenario
 * @param row
 * @param col
 */
export const getTile = (scenario: ScenarioStruct, row: number, col: number) => {
  return scenario.map.terrain[row * scenario.map.width + col];
};

/**
 * Receive dominant terrain Id
 * @param scenario
 * @returns array of tuples [terrainId, count]
 */
export const getSortedTerrainByTiles = (scenario: ScenarioStruct) => {
  const dict = scenario.map.terrain.reduce(
    (acc, tile) => {
      const terrainId = tile[0];
      if (acc[terrainId]) {
        acc[terrainId] = acc[terrainId] + 1;
        return acc;
      } else {
        acc[terrainId] = 1;
        return acc;
      }
    },
    {} as { [terrainId: number]: number }
  );
  const sorted = Object.entries(dict).sort((a, b) => a[1] - b[1]);
  return sorted;
};
