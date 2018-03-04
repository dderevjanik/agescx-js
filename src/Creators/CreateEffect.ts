import IEffect from './../Interfaces/IEffect';

const createEffect = (): IEffect => ({
  type: 0,
  check: 0,
  aiGoal: 0,
  resource: 0,
  amount: 0,
  diplomacy: 0,
  tech: 0,
  triggerId: 0,

  source: 0,
  target: 0,

  location: [0, 0],
  area: [0, 0, 0, 0],

  unitId: 0,
  unitName: 0,
  unitGroup: 0,
  unitType: 0,
  unitIds: [],

  instrId: 0,
  instrPanel: 0,
  instrText: '',
  instrTime: 0,

  soundFile: '',
  soundId: 0
});

export default createEffect;
