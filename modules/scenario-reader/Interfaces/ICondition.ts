interface ICondition {
	type: number,			// condition type
	check: number,			// checked
	timer: number,			// how much time
	source: number,			// source player
	
	amount: number,			// amount of resource
	resource: number,		// resource id
	tech: number,			// technology id
	aiSignal: number,		// ai signal
	
	unitObject: number,		// unit Object
	unitId: number,			// unit Id
	unitName: number,		// unit Name
	area: [number, number,	// area
		number, number],
	
	unknown: number,
}