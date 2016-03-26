# Scenario

## Table of Contents

Scenario object (alph. ordered):

- [Cinematics](#cinematics) movies
- [Debug](#debug) informations for developers
- [Goals](#goals) scenario goals
- [Header](#header) timestamp, basic info, scenario objectives
- [Image](#image) background image
- [Messages](#messages) objectives, hints, scout etc.
    - [Message](#message) specific message
- [Players](#players) list of players
    - [Player](#player) informatiom about player
        - [Disabled](#disabled) list of disabled units, techs and buildings
        - [Units](#units) list of units
            - [Unit](#unit) information about unit
- [Setup](#setup) map size, global goals
- [Tiles](#tiles) list of tiles
    - [Tile](#tile) informatiom about tile
- [Triggers](#triggers)  list of triggers
    - [Trigger](#trigger) information about trigger
        - [Condition](#condition) informatiom about condition
        - [Effect](#effect) informatiom about effect
- [Version](#version) scenario version

## Cinematics

| Name              | Type              | Desc              |
|-------------------|-------------------|-------------------|
| defeat            | string            | filename          |
| intro             | string            | filename          |
| victory           | string            | filename          |

## Debug

| Name              | Type                          | Desc                              |
|-------------------|-------------------------------|-----------------------------------|
| decompressTime    | number                        | decompression time                |
| startTime         | number                        | starting date of decompression    |
| endTime           | number                        | ending date of decompresion       |
| version           | string                        | agescx version                    |
| environment       | string                        | web or node                       |

## Goals

| Name              | Type              | Desc              |
|-------------------|-------------------|-------------------|
| all               | number            | all goals         |
| conquest          | number            | ? is conquest     |
| exploration       | number            | perecent of expl. |
| mode              | number            | goal mode         |
| relics            | number            | numb. of relics   |
| score             | number            | numb. of score    |
| time              | number            | time              |

(*) are all goals checked ?

## Header

| Name              | Type              | Desc                      |
|-------------------|-------------------|---------------------------|
| instructions      | string            | scenario instructions     |
| lastSave          | number            | timestamp                 |
| players           | number            | num. of playable players  |
| size              | number            | header size               |

(*) playable players in scenario

## Image

| Name              | Type              | Desc              |
|-------------------|-------------------|-------------------|
| exists            | number            | exists before(*)  |
| filename          | string            | filename          |
| height            | number            | image height      |
| included          | number            | ? is included     |
| raw               | number            | image in bytes    |
| width             | number            | image width       |

(*) 1 = exists before, 0 = doesn't

## Messages

| Name              | Type                | Desc              |
|-------------------|---------------------|-------------------|
| hints             | [Message](#message) |                   |
| history           | [Message](#message) |                   |
| loss              | [Message](#message) |                   |
| objectives        | [Message](#message) |                   |
| scout             | [Message](#message) |                   |
| victory           | [Message](#message) |                   |

### Message

| Name              | Type              | Desc              |
|-------------------|-------------------|-------------------|
| id                | number            | string id         |
| text              | string            | txt to display    |

## Players

Players property is array of [Players](#player)

| Name              | Type                         | Desc              |
|-------------------|------------------------------|-------------------|
|                   | Array of [Player](#player)   | 9 Players         |

### Player

| Name              | Type                        | Desc                                        |
|-------------------|-----------------------------|---------------------------------------------|
| active            | number                      | ? is active                                 |
| age               | number                      | start age                                   |
| aiName            | string                      | ai name                                     |
| aiSource          | string                      | source code of AI                           |
| aiType            | number                      | [enum.aitype](enums/AiTypes.md)             |
| alliedVict        | number                      | allied victory                              |
| civ               | number                      | [enum.civilization](enums/Civilizations.md) |
| color             | number                      | [enum.playerColor](enums/PlayerColors.md)   |
| constName         | string                      | const name                                  |
| diplomacy         | Array of number             | stance to players                           |
| disabled          | [Disabled](#disabled)       |                                             |
| food              | number                      | starting food                               |
| gold              | number                      | starting gold                               |
| human             | number                      | ? is human                                  |
| name              | string                      | player name                                 |
| nameId            | number                      | string id for name                          |
| ore               | number                      | starting ore                                |
| population        | number                      | max population                              |
| startCam          | \[number, number\]          | starting camera                             |
| stone             | number                      | starting stone                              |
| units             | Array of [units](#units)    | units                                       |

#### Disabled

| Name              | Type                        | Desc                  |
|-------------------|-----------------------------|-----------------------|
| buildings         | Array of number             | ids of dis. build.    |
| techs             | Array of number             | ids of dis. techs.    |
| units             | Array of number             | ids of dis. units.    |

#### Units

| Name              | Type                        | Desc                  |
|-------------------|-----------------------------|-----------------------|
| id                | number                      | unit id               |
| inId              | number                      | is garissoned in id   |
| type              | number                      | unit type             |
| x                 | number                      | x position            |
| y                 | number                      | y position            |
| angle             | number                      | angle                 |
| frame             | number                      | frame                 |

## Setup

| Name              | Type                        | Desc                  |
|-------------------|-----------------------------|-----------------------|
| aiType            | number                      | ai type for scenario  |
| allTech           | number                      | all techs available   |
| filename          | string                      | unit type             |
| height            | number                      | scenario height       |
| nextId            | number                      | next unit id          |
| startCam          | \[number, number\]          | starting camera x, y  |
| width             | number                      | scenario width        |

## Tiles

| Name              | Type                         | Desc              |
|-------------------|------------------------------|-------------------|
|                   | Array of [Tile](#tile)       | tiles             |

### Tile

| Name              | Type                        | Desc                  |
|-------------------|-----------------------------|-----------------------|
| type              | number                      | tile type             |
| level             | number                      | height level          |

## Triggers

| Name              | Type                          | Desc                  |
|-------------------|-------------------------------|-----------------------|
|                   | Array of [Trigger](#trigger)  |                       |

### Trigger

| Name              | Type                              | Desc                                  |
|-------------------|-----------------------------------|---------------------------------------|
| conditions        | Array of [Condition](#condition)  | list of conditions                    |
| conditionsOrd     | Array of number                   | conditions order                      |
| desc              | number                            | ? description                         |
| descOrd           | number                            | description order on object.          |
| effects           | Array of [Effect](#effect)        | list of effects                       |
| effectsOrd        | Array of number                   | effects order                         |
| enable            | number                            | ? enabled                             |
| loop              | number                            | ? loop                                |
| name              | string                            | trigger name                          |
| strId             | number                            | trigger string id                     |
| text              | string                            | description to display                |
| timeStart         | number                            | time before start                     |

#### Condition

| Name              | Type                              | Desc                          |
|-------------------|-----------------------------------|-------------------------------|
| aiSignal          | number                            | AI Signal                     |
| area              | \[number, number, number, number\]| affected area                 |
| amount            | number                            | amount of resources           |
| check             | number                            | ? is checked                  |
| resource          | number                            | resource                      |
| source            | number                            | source player                 |
| tech              | number                            | technology                    |
| timer             | number                            | how much time                 |
| type              | number                            | effect type                   |
| unitId            | number                            | unit id                       |
| unitGroup         | number                            | unit group                    |
| unitName          | number                            | unit name                     |
| unitObject        | number                            | unit object                   |
| unitType          | number                            | unit type                     |

#### Effect

| Name              | Type                              | Desc                             |
|-------------------|-----------------------------------|----------------------------------|
| aiGoal            | number                            | activate AI goal                 |
| area              | \[number, number, number, number\]| affected area                    |
| check             | number                            | ? is checked                     |
| diplomacy         | number                            | diplomacy stance to change       |
| instrId           | number                            | instruction string id            |
| instrPanel        | number                            | instruction order                |
| instrText         | number                            | instruction text                 |
| instrTime         | number                            | how long display a text          |
| location          | \[number, number\]                | location                         |
| resource          | number                            | resource type                    |
| source            | number                            | source player                    |
| soundId           | number                            | string id of sound               |
| soundFile         | number                            | path to sound file               |
| target            | number                            | target player                    |
| tech              | number                            | research tech by id              |
| triggerId         | number                            | de/activate trigger id           |
| type              | number                            | [enum.effect](enums/effects.md)  |
| unitId            | number                            | selected unit id                 |
| unitGroup         | number                            | unit group                       |
| unitName          | number                            | unit name                        |
| unitType          | number                            | unit type                        |
| unitIds           | Array of number                   | selected unit ids                |
