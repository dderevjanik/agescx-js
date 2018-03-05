import { ScenarioStruct } from '../io/IO';
import { Age } from '../data/Age';
import { Civilization } from '../data/Civilization';
import chalk from 'chalk';

const { green, yellow } = chalk;

export const printStats = (scenario: ScenarioStruct) => {
  console.log(`${green('Filename:')} ${scenario.compressedHeader.originalFilename}`);
  console.log(`${green('Size:')} ${scenario.map.width} x ${scenario.map.height}`);
  console.log(`${green('Players:')} ${scenario.header.players}`);
  const activePlayerIndexes: number[] = [];
  scenario.compressedHeader.playersData.forEach((player, index) => {
    const playerName = scenario.compressedHeader.playerNames[index].trim();
    if (player.active) {
      if (player.human) {
        console.log(`- [${index}] ${yellow('Player')}`);
      } else {
        console.log(`- [${index}] ${playerName}`);
      }
    }
  });
};
