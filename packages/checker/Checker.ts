import { ScenarioStruct } from "../io/Structures/ScenarioStruct";
import { UnitStruct } from "../io/Structures/UnitStruct";
import { ConditionStruct } from "../io/Structures/ConditionStruct";
import { EffectStruct } from "../io/Structures/EffectStruct";
import { getAllUnits, getAllUnitIds, getAllEffects, getAllConditions } from "../helpers/Helpers";

export const checkScenario = (scenario: ScenarioStruct) => {
  const allUnits = getAllUnits(scenario);
  const allConditions = getAllConditions(scenario);
  const allEffects = getAllEffects(scenario);
  const unitIds = getAllUnitIds(scenario);

  // Check for garisson IDs
  const notExistsGarissonIds: UnitStruct[] = [];
  const notCorrectUnitCoords: UnitStruct[] = [];
  const notCorrectUnitIds: UnitStruct[] = [];
  allUnits.forEach(unit => {
    // Check for unit ID
    if (unit.id < 0 && unit.id >= scenario.compressedHeader.nextUnitId) {
      notCorrectUnitIds.push(unit);
    }
    // Check for garisson ID
    if (unit.garissonId > -1 && !unitIds.includes(unit.garissonId)) {
      notExistsGarissonIds.push(unit);
    }
    // Check for unit coords
    if (unit.x < 0 || unit.x > scenario.map.width || unit.y < 0 || unit.y >= scenario.map.height) {
      notCorrectUnitCoords.push(unit);
    }
  });

  const notExistingTriggerId: EffectStruct[] = [];
  const notExistsEffectUnitId: EffectStruct[] = [];
  allEffects.forEach(effect => {
    // Check for Effect's unit Id
    if (effect.unitId > -1 && !unitIds.includes(effect.unitId)) {
      notExistsEffectUnitId.push(effect);
    }
    // Check for Effect's unit Ids
    if (effect.unitIDs.length > 0) {
      effect.unitIDs.forEach(id => {
        if (id > -1 && !unitIds.includes(id)) {
          notExistsEffectUnitId.push(effect);
        }
      });
    }
    // Check for trigger's Id
    if (effect.triggerId > -1 && effect.triggerId > scenario.triggersCount - 1) {
      notExistingTriggerId.push(effect);
    }
  });

  // Check for Condition's unit Id
  const notExistsConditionUnitId: ConditionStruct[] = [];
  allConditions.forEach(condition => {
    // Check for condition's unit Id
    if (condition.unitId > -1 && !unitIds.includes(condition.unitId)) {
      notExistsConditionUnitId.push(condition);
    }
  });

  return {
    notCorrectUnitIds,
    notExistsGarissonIds,
    notExistsEffectUnitId,
    notExistsConditionUnitId,
    notExistingTriggerId,
    notCorrectUnitCoords
  };
};
