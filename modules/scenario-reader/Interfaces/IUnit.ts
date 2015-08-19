interface IUnit {
	id: number,			// unit scenario ID
	inId: number,		// in which unit ID is unit garissoned
	type: number,		// unit type, check enums.UnitType
	x: number,			// x position in scenario
	y: number,			// y position in scenario
	angle: number,		// unit angle
	frame: number,		// unit frame
	unk1?: number,
	unk2?: number,
}