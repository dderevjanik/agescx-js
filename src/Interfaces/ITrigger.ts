import ICondition from './ICondition';
import IEffect from './IEffect';

interface ITrigger {
	name: string,		// trigger name
	strId: number,		// name string Id

	enable: number,		// is enabled
	loop: number,		// is looping
	timeStart: number,	// time before start

	desc: number,		// is objective
	descOrd: number,	// objective order in instructions
	text: string,		// objective text

    effects: Array<IEffect>,      // effects
    effectsOrd: Array<number>,    // effects order

    conditions: Array<ICondition>,// conditions
    conditionsOrd: Array<number>  // conditions order
};

export default ITrigger;
