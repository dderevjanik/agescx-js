import { ScenarioStruct } from "../io/Structures/ScenarioStruct";
import { UnitStruct } from "../io/Structures/UnitStruct";
import { ConditionStruct } from "../io/Structures/ConditionStruct";
import { EffectStruct } from "../io/Structures/EffectStruct";
import { TileStruct } from "../io/Structures/TileStruct";

/**
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
 */
export const getDominantTerrain = (scenario: ScenarioStruct) => {
  const dict: { [id: number]: number } = {};
  let dominant: [string, number] = ["0", 0];
  scenario.map.terrain.forEach(ter => {
    const id = ter[0];
    if (id in dict) {
      dict[id] = dict[id] + 1;
    } else {
      dict[id] = 1;
    }
  });
  Object.entries(dict).forEach(ter => {
    if (ter[1] > dominant[1]) {
      dominant = ter;
    }
  });
  return dominant;
};
