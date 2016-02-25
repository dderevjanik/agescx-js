import IEffect from './../Interfaces/IEffect';
import CreateEffect from './../Creators/CreateEffect';
import ASDataview from './../ASDataview';

export const readEffect = (data: ASDataview): IEffect => {
    const effect: IEffect = CreateEffect();

    effect.type = data.getInt32()[0];
    effect.check = data.getInt32()[0];
    effect.aiGoal = data.getInt32()[0];
    effect.amount = data.getInt32()[0];
    effect.resource = data.getInt32()[0];
    effect.diplomacy = data.getInt32()[0];

    const unitsCount = data.getInt32()[0];

    effect.unitId = data.getInt32()[0];
    effect.unitName = data.getInt32()[0];
    effect.source = data.getInt32()[0];
    effect.target = data.getInt32()[0];
    effect.tech = data.getInt32()[0];
    effect.instrId = data.getInt32()[0];
    effect.soundId = data.getInt32()[0];
    effect.instrTime = data.getInt32()[0];
    effect.triggerId = data.getInt32()[0];
    effect.location = [data.getInt32()[0], data.getInt32()[0]];
    effect.area = [data.getInt32()[0], data.getInt32()[0],
        data.getInt32()[0], data.getInt32()[0]];
    effect.unitGroup = data.getInt32()[0];
    effect.unitType = data.getInt32()[0];
    effect.instrPanel = data.getInt32()[0]; // @Todo: InstrOrd?
    effect.instrText = data.getStr32()[0];
    effect.soundFile = data.getStr32()[0];

    for(let i: number = 0; i < unitsCount; i++) {
        effect.unitIds.push(data.getInt32()[0]);
    }

    return effect;
};
