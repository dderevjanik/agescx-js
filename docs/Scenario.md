# Scenario

## Table of Contents

Scenario object:

- [Cinematics](#cinematics)
- [Goals](#goals)
- [Header](#header)
- [Image](#image)
- [Messages](#messages)
    - [Message](#message)
- [Players](#players)
    - [Units](#units)
- [Setup](#setup)
- [Tiles](#tiles)
- [Triggers](#triggers)
    - [Conditions](#conditions)
    - [Effects](#effects)
- [Version](#version)
- [Debug](#debug)

## Cinematics

| Name              | Type              | Desc              |
|-------------------|-------------------|-------------------|
| defeat            | string            | filename          |
| intro             | string            | filename          |
| victory           | string            | filename          |

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

| Name              | Type              | Desc              |
|-------------------|-------------------|-------------------|
| hints             | Message           |                   |
| history           | Message           |                   |
| loss              | Message           |                   |
| objectives        | Message           |                   |
| scout             | Message           |                   |
| victory           | Message           |                   |

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

| Name              | Type                        | Desc                  |
|-------------------|-----------------------------|-----------------------|
| active            | number                      | ? is active           |
| age               | number                      | start age             |
| aiName            | string                      | start age             |
| aiSource          | string                      | source code of AI     |
| aiType            | number                      | type of AI            |
| alliedVict        | number                      | allied victory        |
| civ               | number                      | civilization          |
| color             | number                      | player color          |
| constName         | string                      | const name            |
| diplomacy         | Array of number             | stance to players     |
| disBuildings      | Array of number             | ids to dis. build.    |
| disTechs          | Array of number             | ids to dis. build.    |
| disUnits          | Array of number             | ids to dis. build.    |
| food              | number                      | starting food         |
| gold              | number                      | starting gold         |
| human             | number                      | ? is human            |
| name              | string                      | player name           |
| nameId            | number                      | string id for name    |
| ore               | number                      | starting ore          |
| population        | number                      | max population        |
| startCam          | \[number, number\]          | starting camera       |
| stone             | number                      | starting stone        |
| units             | Array of [units](#units)    | units                 |

### Units

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
| startCam          | \[number, number]\          | starting camera x, y  |
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

| Name              | Type                          | Desc                  |
|-------------------|-------------------------------|-----------------------|


## Debug