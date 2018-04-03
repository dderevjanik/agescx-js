import { ScenarioStruct } from "../io/Structures/ScenarioStruct";
import { getAllUnits, getAllUnitIds } from "../helpers/Helpers";
import { UnitStruct } from "../io/Structures/UnitStruct";

export const checkUnits = (scenario: ScenarioStruct) => {
  const allUnits = getAllUnits(scenario);
  const allUnitIds = getAllUnitIds(scenario);

  const notExistsGarissonIds: UnitStruct[] = [];
  const notCorrectUnitCoords: UnitStruct[] = [];
  const notCorrectUnitIds: UnitStruct[] = [];
  const sameId: UnitStruct[] = [];
  allUnits.forEach(unit => {
    // Check for unit ID
    if (unit.id < 0 && unit.id >= scenario.compressedHeader.nextUnitId) {
      notCorrectUnitIds.push(unit);
    }

    // Check for garisson ID
    if (unit.garissonId > -1 && !allUnitIds.includes(unit.garissonId)) {
      notExistsGarissonIds.push(unit);
    }

    // Check for unit coords
    if (unit.x < 0 || unit.x > scenario.map.width || unit.y < 0 || unit.y >= scenario.map.height) {
      notCorrectUnitCoords.push(unit);
    }

    // Check if two or more units have same Id
    const sameIds = allUnits.filter(u => u.id === unit.id);
    if (sameIds.length > 1) {
      sameId.push(unit);
    }
  });
  return [notExistsGarissonIds, notCorrectUnitCoords, notCorrectUnitIds, sameId];
};
