import ICondition from './../Interfaces/ICondition';
import CreateCondition from './../Creators/CreateCondition';
import ASData from 'asdata';

export const readCondition = (data: ASData): ICondition => {
    const condition: ICondition = CreateCondition();

    condition.type = data.getInt32();
    condition.check = data.getInt32();
    condition.amount = data.getInt32();
    condition.resource = data.getInt32();
    condition.unitObject = data.getInt32();
    condition.unitId = data.getInt32();
    condition.unitName = data.getInt32();
    condition.source = data.getInt32();
    condition.tech = data.getInt32();
    condition.timer = data.getInt32();
    condition.unknown = data.getInt32();
    condition.area = [
        data.getInt32(), data.getInt32(),
        data.getInt32(), data.getInt32()
    ];
    condition.unitGroup = data.getInt32();
    condition.unitType = data.getInt32();
    condition.aiSignal = data.getInt32();

    return condition;
};
