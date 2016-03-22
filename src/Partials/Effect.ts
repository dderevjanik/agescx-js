import IEffect from './../Interfaces/IEffect';
import {readStructures} from './../Utils/RWUtils';
import CreateEffect from './../Creators/CreateEffect';
import ASData from 'asdata';

export const readEffect = (data: ASData): IEffect => {
    const effect: IEffect = CreateEffect();

    effect.type = data.getInt32();
    effect.check = data.getInt32();
    effect.aiGoal = data.getInt32();
    effect.amount = data.getInt32();
    effect.resource = data.getInt32();
    effect.diplomacy = data.getInt32();

    const unitsCount: number = data.getInt32();

    effect.unitId = data.getInt32();
    effect.unitName = data.getInt32();
    effect.source = data.getInt32();
    effect.target = data.getInt32();
    effect.tech = data.getInt32();
    effect.instrId = data.getInt32();
    effect.soundId = data.getInt32();
    effect.instrTime = data.getInt32();
    effect.triggerId = data.getInt32();
    effect.location = [
        data.getInt32(), data.getInt32()
    ];
    effect.area = [
        data.getInt32(), data.getInt32(),
        data.getInt32(), data.getInt32()
    ];
    effect.unitGroup = data.getInt32();
    effect.unitType = data.getInt32();
    effect.instrPanel = data.getInt32(); // @Todo: InstrOrd?
    effect.instrText = data.getStr32();
    effect.soundFile = data.getStr32();

    effect.unitIds = readStructures(unitsCount, () => data.getInt32());

    return effect;
};

export default {
    readEffect: readEffect
};
