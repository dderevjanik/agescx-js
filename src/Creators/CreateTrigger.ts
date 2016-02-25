import ITrigger from './../Interfaces/ITrigger';

const CreateTrigger = (): ITrigger => ({
	name: "",
	strId: 0,

	enable: 0,
	loop: 0,
	timeStart: 0,

	desc: 0,
	descOrd: 0,
	text: "",

    effects: [],
    effectsOrd: [],
    conditions: [],
    conditionsOrd: []
});

export default CreateTrigger;
