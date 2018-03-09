import { ScenarioStruct } from '../io/structures/ScenarioStruct';
import { UnitStruct } from '../io/Structures/UnitStruct';
import { ConditionStruct } from '../io/Structures/ConditionStruct';
import { EffectStruct } from '../io/Structures/EffectStruct';
import { TriggerStruct } from '../io/Structures/TriggerStruct';

export const check = (scenario: ScenarioStruct) => {
  const allUnits = scenario.units.sections.reduce((acc, section) => [...acc, ...section.units], [] as UnitStruct[]);
  const allConditions = scenario.triggers.reduce(
    (acc, trigger) => [...acc, ...trigger.conditions],
    [] as ConditionStruct[]
  );
  const allEffects = scenario.triggers.reduce((acc, trigger) => [...acc, ...trigger.effects], [] as EffectStruct[]);

  const unitIds = allUnits.reduce((acc, unit) => [...acc, unit.id], [] as number[]);

  // Check for garisson IDs
  const notExistsGarissonIds: UnitStruct[] = [];
  const notCorrectUnitCoords: UnitStruct[] = [];
  allUnits.forEach(unit => {
    if (unit.garissonId > -1 && !unitIds.includes(unit.garissonId)) {
      notExistsGarissonIds.push(unit);
    }
    if (unit.x < 0 || unit.x > scenario.map.width || unit.y < 0 || unit.y >= scenario.map.height) {
      // TODO: make a test
      notCorrectUnitCoords.push(unit);
    }
  });

  const notExistingTriggerId: EffectStruct[] = [];
  const notExistsEffectUnitId: EffectStruct[] = [];
  allEffects.forEach(effect => {
    // Check for Effect's unit id
    if (effect.unitId > -1 && !unitIds.includes(effect.unitId)) {
      notExistsEffectUnitId.push(effect);
    }
    // Check for Effect's unit ids
    if (effect.unitIDs.length > 0) {
      effect.unitIDs.forEach(id => {
        if (id > -1 && !unitIds.includes(id)) {
          notExistsEffectUnitId.push(effect);
        }
      });
    }
    // Check for trigger id
    if (effect.triggerId > -1 && effect.triggerId > scenario.triggersCount - 1) {
      notExistingTriggerId.push(effect);
    }
  });

  // Check for Condition's unit id
  const notExistsConditionUnitId: ConditionStruct[] = [];
  allConditions.forEach(condition => {
    if (condition.unitId > -1 && !unitIds.includes(condition.unitId)) {
      notExistsConditionUnitId.push(condition);
    }
  });

  console.log(
    notExistsGarissonIds,
    notExistsEffectUnitId,
    notExistsConditionUnitId,
    notExistingTriggerId,
    notCorrectUnitCoords
  );
};
