import ICondition from './../Interfaces/ICondition';

const CreateCondition = (): ICondition => ({
	type: 0,
	check: 0,
	amount: 0,
	resource: 0,
	unitObject: 0,
	unitId: 0,
	unitName: 0,
	source: 0,
	tech: 0,
	timer: 0,
	unknown: 0,
	area: [0, 0, 0, 0],
	unitGroup: 0,
    unitType: 0,
	aiSignal: 0
});

export default CreateCondition;
