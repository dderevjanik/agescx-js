import ICondition from './../Interfaces/ICondition';
import CreateCondition from './../Creators/CreateCondition';
import ASDataview from './../ASDataview';

export const readCondition = (data: ASDataview): ICondition => {
    const condition: ICondition = CreateCondition();

    condition.type = data.getInt32()[0];
    condition.check = data.getInt32()[0];
    condition.amount = data.getInt32()[0];
    condition.resource = data.getInt32()[0];
    condition.unitObject = data.getInt32()[0];
    condition.unitId = data.getInt32()[0];
    condition.unitName = data.getInt32()[0];
    condition.source = data.getInt32()[0];
    condition.tech = data.getInt32()[0];
    condition.timer = data.getInt32()[0];
    condition.unknown = data.getInt32()[0];
    condition.area = [data.getInt32()[0], data.getInt32()[0],
        data.getInt32()[0], data.getInt32()[0]];
    condition.unitGroup = data.getInt32()[0];
    condition.unitType = data.getInt32()[0];
    condition.aiSignal = data.getInt32()[0];

    return condition;
};
