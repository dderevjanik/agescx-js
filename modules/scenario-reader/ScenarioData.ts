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
		nextId: 0,
		version: 1.22,
		filename: "",
		players: [
			{name: "", nameId:0, 
				active: 1, human: 0, civ: 0, unk1: 0}, // gaia
			{name: "", nameId:0, 
				active: 1, human: 1, civ: 0, unk1: 0}, // player 1
			{name: "", nameId:0, 
				active: 1, human: 0, civ: 0, unk1: 0}, // player 2 
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // player 3
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // player 4
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // player 5
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // player 6
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // player 7
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // player 8
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // ::player 9
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // ::player 10
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // ::player 11
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // ::player 12
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // ::player 13
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // ::player 14
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // ::player 15
			{name: "", nameId:0, 
				active: 0, human: 0, civ: 0, unk1: 0}, // ::player 16
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
		}
	}
	
	public write = (data: ASDataView) => {
		
	}
	
	public read = (data: ASDataView) => {
		// unpcompressed header
		var head = this.header;
		head.version = <string> data.getChar(4).join("");	// scenario version
		head.size = <number> data.getUint32()[0];			// size of header, excluding version and this
		head.unknown1 = <number> data.getUint32()[0];		// ? unknown
		head.lastSave = <number> data.getUint32()[0];		// last save game timestamp
		head.instructions = <string> data.getStr32()[0];	// instructions before a start
		head.unknown2 = <number> data.getInt32()[0];		// ? unknown
		head.players = <number> data.getInt32()[0];			// number of players
		data.inflate(head.size + 8);
		
		// compressed data start here
		var body = this.data;
		var playablePlayers = this.data.players.slice(1, 9);  	// playable players 1-8
		var allPlayers = this.data.players.slice(0, 9); 		// GAIA included
		
		body.nextId = <number> data.getUint32()[0];		// next unit Id
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
		
		body.filename = <string> data.getStr16()[0];
		
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
		body.image.exists = <number> data.getInt32()[0];
		if (body.image.exists == -1 || body.image.exists == 2){
			// @todo finish
		}
		console.log(this);
	}
}