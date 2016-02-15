interface IPlayer {
	name: string,			// player in-game name
	nameId: number,			// string Id for name
	constName?: string,		// for internal purpuose
	
	active: boolean,			// is player active
	human: boolean,			// is player human
	
	aiName: string,			// name of AI
	aiSource: string,		// AI Source code
	aiType: number,			// AI type
	
	civ: number,			// civilization
	age: number,			// starting age
	color: number,			// color
	population: number,		// max. population
	
	food: number,			// food
	wood: number,			// wood
	gold: number,			// gold
	stone: number,			// stone
	ore: number,			// ore, unused
	
	diplomacy: Array<number>,		// diplomacy with others
	alliedVict?: number,			// is allied victory
	startCam?: [number, number],	// starting camera
	
	disTechs: Array<number>,		// disabled techs
	disBuildings: Array<number>,	// disabled buildings
	disUnits: Array<number>,		// disabled units

	unk1?: number,
	unk2?: number,
	unk3?: number,
	
};

export default IPlayer;
