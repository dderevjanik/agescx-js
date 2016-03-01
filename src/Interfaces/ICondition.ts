interface ICondition {
    type: number;       // condition type
    check: number;      // checked
    amount: number;     // amount of resource
    resource: number;   // resource id
    unitObject: number; // unit Object
    unitId: number;     // unit Id
    unitName: number;   // unit Name
    source: number;     // source player
    tech: number;       // technology id
    timer: number;      // how much time
    unknown: number;
    area: [number, number, // area
        number, number];
    unitGroup: number;
    unitType: number;
    aiSignal: number;      // ai signal
};

export default ICondition;
