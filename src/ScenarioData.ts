/// <reference path="ASDataView.ts"/>

class ScenarioData {
	
	public header = {
		version: "1.21",
		size: 0,
		unknown1: 2,
		lastSave: 20,
		instructions: "",
		unknown2: 0,
		players: 8,
	}
	
	public data = {
		version: 1.22,
		players: [
			{	// gaia
				name: "", nameId:0, constName: "",
				active: 1, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0, 
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
			{	// player 1
				name: "", nameId:0, constName: "",
				active: 1, human: 1, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
			{	// player 2
				name: "", nameId:0, constName: "",
				active: 1, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			},  
			{	// player 3
				name: "", nameId:0, constName: "",
				active: 0, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0 ,0],
				disTechs: [], disBuildings: [], disUnits: [],
			},
			{	// player 4
				name: "", nameId:0, constName: "",
				active: 0, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
			{	// player 5
				name: "", nameId:0, constName: "",
				active: 0, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
			{	// player 6
				name: "", nameId:0, constName: "",
				active: 0, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
			{	// player 7
				name: "", nameId:0, constName: "",
				active: 0, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
			{	// player 8
				name: "", nameId:0, constName: "",
				active: 0, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
			{	// ::player 9
				name: "", nameId:0, constName: "",
				active: 0, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
			{	// ::player 10
				name: "", nameId:0, constName: "",
				active: 0, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
			{	// ::player 11
				name: "", nameId:0, constName: "",
				active: 0, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
			{	// ::player 12
				name: "", nameId:0, constName: "",
				active: 0, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
			{	// ::player 13
				name: "", nameId:0, constName: "",
				active: 0, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
			{	// ::player 14
				name: "", nameId:0, constName: "",
				active: 0, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
			{	// ::player 15
				name: "", nameId:0, constName: "",
				active: 0, human: 0, civ: 0, 
				unk1: 0, unk2: 0, unk3: 0,
				aiName: "", aiSource: "", aiType: 0,
				age: 0, population: 100, color: 0, 
				food: 0, wood: 0, gold: 0, stone: 0, ore: 0,
				diplomacy: [], alliedVict: 0, startCam: [0, 0],
				disTechs: [], disBuildings: [], disUnits: [],
			}, 
		],
		messages: {
			objectives: {id: 0, text: ""},
			hints: {id: 0, text: ""},
			victory: {id: 0, text: ""},
			loss: {id: 0, text: ""},
			history: {id: 0, text: ""},
			scout: {id: 0, text: ""}
		},
		cinematics: {
			intro: "",
			defeat: "",
			victory: ""	
		},
		image: {
			filename: "",
			included: 0,
			width: 0,
			height: 0,
			exists: 0,
			raw: ""
		},
		goals: {
			conquest: 0,
			unk1: 0,
			relics: 0,
			unk2: 0,
			exploration: 0,
			unk3: 0,
			all: 0,
			mode: 0,
			score: 0,
			time: 0
		},
		setup: {
			allTech: 0,
			aiType: 0,
			startCam: [0, 0],
			height: 0,
			width: 0,
			nextId: 0,
			filename: "",
		},
		tiles: [],
		units: [
			[], [], [],
			[], [], [],
			[], [], [],
		],
		triggers: []
	}
	
	public write = (data: ASDataView) => {
		
	}
	
	public read = (data: ASDataView) => {
		// unpcompressed header
		const head = this.header;
		head.version = <string> data.getChar(4).join("");	// scenario version
		head.size = <number> data.getUint32()[0];			// size of header, excluding version and this
		head.unknown1 = <number> data.getUint32()[0];		// ? unknown
		head.lastSave = <number> data.getUint32()[0];		// last save game timestamp
		head.instructions = <string> data.getStr32()[0];	// instructions before a start
		head.unknown2 = <number> data.getInt32()[0];		// ? unknown
		head.players = <number> data.getInt32()[0];			// number of players
		data.inflate(head.size + 8);
		
		// compressed data start here
		const body = this.data;
		const playablePlayers = this.data.players.slice(1, 9);  	// playable players 1-8
		const allPlayers = this.data.players.slice(0, 9); 		// GAIA included
		
		body.setup.nextId = <number> data.getUint32()[0];		// next unit Id
		body.version = <number> data.getFloat32()[0];	// compressed data version
		
		// player ascii names (max. 256 chars)
		allPlayers.forEach(function(player){ // ? GAIA LAST
			player.name = <string> data.getChar(256).join("");
		});
		data.skip(7*256) // skip non-playable players
		
		// player string name Id
		allPlayers.forEach(function(player){ // ? GAIA LAST
			player.nameId = <number> data.getInt32()[0];
		});
		data.skip(7*4) // skip non-playable players
		
		// player data#1 section
		allPlayers.forEach(function(player){
			player.active = <number> data.getUint32()[0];	// is active
			player.human = <number> data.getUint32()[0];	// is human
			player.civ = <number> data.getInt32()[0];		// player civilization
			player.unk1 = <number> data.getUint32()[0];		// ? unknown
		});
		data.skip(7*16); // skip non-playable players
		
		data.skip(4); // unknown, @todo finish
		data.skip(4); // unknonw, @todo finish
		data.skip(1); // just separator
		
		body.setup.filename = <string> data.getStr16()[0];
		
		body.messages.objectives.id = <number> data.getInt32()[0];
		body.messages.hints.id = <number> data.getInt32()[0];
		body.messages.victory.id = <number> data.getInt32()[0];
		body.messages.loss.id = <number> data.getInt32()[0];
		body.messages.history.id = <number> data.getInt32()[0];
		body.messages.scout.id = <number> data.getInt32()[0]; // 1.22>
		
		body.messages.objectives.text = <string> data.getStr16()[0];
		body.messages.hints.text = <string> data.getStr16()[0];
		body.messages.victory.text = <string> data.getStr16()[0];
		body.messages.loss.text = <string> data.getStr16()[0];
		body.messages.history.text = <string> data.getStr16()[0];
		body.messages.scout.text = <string> data.getStr16()[0]; // 1.22>

		body.cinematics.intro = <string> data.getStr16()[0];
		body.cinematics.defeat = <string> data.getStr16()[0];
		body.cinematics.victory = <string> data.getStr16()[0];
		
		body.image.filename = <string> data.getStr16()[0];
		body.image.included = <number> data.getInt32()[0];
		body.image.width = <number> data.getInt32()[0];
		body.image.height = <number> data.getInt32()[0];
		body.image.exists = <number> data.getInt16()[0];
		if (body.image.exists == -1 || body.image.exists == 2){
			// @todo finish
		}
		
		// player data #2 section
		body.players.forEach(function(player){
			data.getStr16();
			data.getStr16();
		});
		
		// ai name
		playablePlayers.forEach(function(player){
			player.aiName = data.getStr16()[0];
		});
		for (let i: number = 0; i < 8; i++){
			data.getStr16();
		}
		
		
		// ai source
		playablePlayers.forEach(function(player){
			data.skip(8) // unknowns 2 & 3
			player.aiSource = data.getStr32()[0];
		});
		for (let i: number = 0; i < 8; i++){
			data.skip(8);
			data.getStr32();
		}
		
		// ai type
		playablePlayers.forEach(function(player){
			player.aiType = data.getInt8()[0];
		});
		data.skip(8); // skip non-playable players
		data.skip(4); // separator
		data.skip(16*24); // unused resources
		data.skip(4); // another separator
		
		// scenario goals
		body.goals.conquest = data.getInt32()[0];
		body.goals.unk1 = data.getInt32()[0];
		body.goals.relics = data.getInt32()[0];
		body.goals.unk2 = data.getInt32()[0];
		body.goals.exploration = data.getInt32()[0];
		body.goals.unk3 = data.getInt32()[0];
		body.goals.all = data.getInt32()[0];
		body.goals.mode = data.getInt32()[0];
		body.goals.score = data.getInt32()[0];
		body.goals.time = data.getInt32()[0];
		
		playablePlayers.forEach(function(player){
			player.diplomacy = data.getInt32(8);
			data.skip(8*4);
		});
		data.skip(8*16*4);
		
		data.skip(11520); // unused space
		data.skip(4); //separator
		data.skip(16*4); // allied victory, ignored
		
		// Section: Disabled
		data.skip(16*4); // techs count
		playablePlayers.forEach(function(player){
			player.disTechs = data.getInt32(30);
		})
		data.skip(4*8*30); // skip for another players
		// @todo extra tech for 1.30 version
		
		data.skip(16*4); // units count
		playablePlayers.forEach(function(player){
			player.disUnits = data.getInt32(30);
		});
		data.skip(4*8*30); // for another players
		// @todo extra units for 1.30 version
		
		data.skip(16*4); // buildings count
		playablePlayers.forEach(function(player){
			player.disBuildings = data.getInt32(20);
		});
		data.skip(4*8*20); // for another players
		// @todo extra buildings for 1.30 version		
		
		data.skip(8); // unused
		body.setup.allTech = data.getInt32()[0];
		
		allPlayers.forEach(function(player){
			player.age = data.getInt32()[0];
		});
		data.skip(7*4); // for another players
		
		data.skip(4); // separator
		body.setup.startCam = data.getInt32(2);
		body.setup.aiType = data.getUint32()[0];
		body.setup.width = data.getUint32()[0];
		body.setup.height = data.getUint32()[0];
		
		for(let i: number = 0; i < (body.setup.width * body.setup.height); i++){
			body.tiles.push(data.getUint8(3));
		}
		
		data.skip(4); // number of units section
		
		playablePlayers.forEach(function(player){
			player.food = data.getFloat32()[0];
			player.wood = data.getFloat32()[0];
			player.gold = data.getFloat32()[0];
			player.stone = data.getFloat32()[0];
			player.ore = data.getFloat32()[0];
			data.skip(4); // padding
			player.population = data.getFloat32()[0];	
		});
		
		body.units.forEach(function(playerUnits){
			let numOfUnits: number = data.getUint32()[0];
			for(let i: number = 0; i < numOfUnits; i++){
				playerUnits.push({
					x: data.getFloat32()[0],
					y: data.getFloat32()[0],
					unk1: data.getFloat32()[0],
					id: data.getUint32()[0],
					type: data.getUint16()[0],
					unk2: data.getInt8()[0],
					angle: data.getFloat32()[0],
					frame: data.getUint16()[0],
					inId: data.getInt32()[0],
				});				
			}
		});
		
		data.skip(4); // number of players, again
		
		playablePlayers.forEach(function(player){
			player.constName = data.getStr16()[0];
			player.startCam = [data.getFloat32()[0], data.getFloat32()[0]];
			data.skip(4); // skip duplicated camera X and camera Y
			data.skip(1); // skip allyVictory, duplicated
			let numOfDipl: number = data.getUint16()[0];
			data.skip(numOfDipl*1);
			data.skip(9*4) // player / diplomacy
			player.color = data.getUint32()[0];
			player.unk2 = data.getFloat32()[0];
			player.unk3 = data.getUint16()[0];
			if (player.unk2 === 2.0){
				data.skip(8*1);
			}
			data.skip(player.unk3*44);
			data.skip(7*1);
			data.skip(4);
		});
		
		data.skip(8); // unknown, 1.6
		data.skip(1); // unknown
		
		/*
		let numOfTrigs: number = data.getUint32()[0];
		for (let i: number = 0; i < numOfTrigs; i++){

		}
		*/
		console.log(this);
	}
}
