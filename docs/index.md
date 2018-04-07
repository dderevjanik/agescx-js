# AgeScxJS

Age of empires 2 scenario de/compress module for node and browser

![BigLogo](http://dderevjanik.github.io/agescx/img/aoe2-mediavel-small.jpg)

## About

Set of tools and utilities to work with `.scx` files.

The main reason, why was this project created, is lack of functionality, which AoE2 in-game editor
offers. You can't access scenario programmatically via some API. Also, scripts
(triggers) in AoE2 are pretty useless, because you have to handle a thousands of
them when you're creating a big scenario with RPG element. But after some
time, triggers become more-like spaghetti code. That means you're not sure, which trigger is
not needed, you have to click through all of them to find out. AgeScxJS doesn't solve this
problem, but you can use Javascript to create your own script language. You can
also generate scenarios programmatically (mazes, convert bitmap images,
random, etc...). With AgeScxJS you can build your own web application for
editing/converting or viewing scenarios. There's no restrictions what you can
do with those tools.

## Tools

AgeScx comes with set of different tools:

- **IO:** read / write scenarios
- **Checker:** check for errors/warning in scenario
- **Diff:** differences between two scenarios
- **Converter:** convert scenario to `.json`, `.xml` or `.yaml`
- **Data:** useful data
- **Stats:** scenario stats in human-readable format

## Age of Empires 2 - Data to download

- [Age](./data/Age.md)
- [AIType](./data/AIType.md)
- [Architecture](./data/Architecture.md)
- [Civilization](./data/Civilization.md)
- [Condition](./data/Condition.md)
- [DifficultyLevel](./data/DifficultyLevel.md)
- [Effect](./data/Effect.md)
- [GameExtension](./data/GameExtension.md)
- [Player](./data/Player.md)
- [PlayerColor](./data/PlayerColor.md)
- [Resource](./data/Resource.md)
- [ScenarioSize](./data/ScenarioSize.md)
- [Tech](./data/Tech.md);
- [Terrain](./data/Terrain.md)
- [Unit](./data/Unit.md)
- [UnitGroup](./data/UnitGroup.md)
