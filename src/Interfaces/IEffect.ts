import { point, area } from './../Utils/DataTypes';

interface IEffect {
  type: number; // effect type
  check: number; // check
  aiGoal: number; // ai script goal
  resource: number; // resource id
  amount: number; // amount of resource; attack; hp...
  diplomacy: number; // diplomacy state to change
  tech: number; // tech id to invent
  triggerId: number; // on/off trigger

  source: number; // source player
  target: number; // targetplayer

  location: point; // location
  area: area;

  unitId: number; // selected unit id
  unitName: number; // unit name
  unitGroup: number; // unit group
  unitType: number; // unit type
  unitIds: Array<number>; // selected unit ids

  instrId: number; // instruction string Id
  instrPanel: number; // instuction order
  instrText: string; // text to display
  instrTime: number; // how long display a text

  soundFile: string; // path to sound file
  soundId: number; // string Id of sound
}

export default IEffect;
