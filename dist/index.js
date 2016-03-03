(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReadScenario_1 = __webpack_require__(2);
	var FileUtils_1 = __webpack_require__(33);
	/**
	 * Read uploaded scenario
	 * @desc this function works only in web browser enviroment
	 * @param {ArrayBuffer} path - path to file
	 * @return {Scenario}
	 */
	exports.readScenario = function (arrayBuffer) {
	    return ReadScenario_1.default(FileUtils_1.createASDataView(arrayBuffer));
	};
	/**
	 * Read scenario from a path
	 * @desc this function works only in NodeJS enviroment
	 * @param {string} path - path to file
	 * @param {boolean} debug - turn on/off console logs
	 * @return {Scenario}
	 */
	exports.readScenarioFile = function (path) {
	    var fs = __webpack_require__(35);
	    var file = fs.readFileSync(path);
	    return ReadScenario_1.default(FileUtils_1.createASDataView(file.buffer));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    readScenario: exports.readScenario,
	    readScenarioFile: exports.readScenarioFile
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Reader = __webpack_require__(3);
	var Debug_1 = __webpack_require__(25);
	var CreateScenario_1 = __webpack_require__(26);
	var readScenario = function (data) {
	    var scenario = CreateScenario_1.default();
	    var allPlayers = scenario.players.slice(0, 9);
	    var startTime = new Date().getTime();
	    Debug_1.default("AgeScx: starting reading scenario");
	    // unpcompressed header
	    Reader.readHeader(scenario, data);
	    Debug_1.default("AgeScx: header loaded, version = " + scenario.header.version);
	    data.inflate(scenario.header.size + 8); // inflate data
	    scenario.setup.nextId = data.getUint32(); // next unit Id
	    scenario.version = data.getFloat32().toFixed(2); // compressed data version
	    Debug_1.default("AgeScx: Compressed data version = " + scenario.version);
	    // player ascii names (max. 256 chars)
	    allPlayers.forEach(function (player) {
	        player.name = data.getChar(256);
	    });
	    data.skip(7 * 256); // skip non-playable players
	    // player string name Id
	    allPlayers.forEach(function (player) {
	        player.nameId = data.getInt32();
	    });
	    data.skip(7 * 4); // skip non-playable players
	    Reader.readPlayerData1(scenario, data);
	    Debug_1.default("AgeScx: Player Data #1 - Basic Info");
	    data.skip(4); // unknown, @todo finish
	    data.skip(4); // unknonw, @todo finish
	    data.skip(1); // separator
	    scenario.setup.filename = data.getStr16();
	    // messages section
	    Reader.readMessages(scenario, data);
	    Debug_1.default("AgeScx: Messages");
	    Reader.readCinematics(scenario, data);
	    Debug_1.default("AgeScx: Cinematics");
	    Reader.readImage(scenario, data);
	    Debug_1.default("AgeScx: Background Image, included = " + scenario.image.included);
	    Reader.readPlayerData2(scenario, data);
	    Debug_1.default("AgeScx: Player Data #2 - AI section");
	    data.skip(16 * 24); // unused resources
	    data.skip(4); // another separator
	    // scenario goals
	    Reader.readGoals(scenario, data);
	    Debug_1.default("AgeScx: Scenario Goals");
	    Reader.readDiplomacy(scenario, data);
	    Debug_1.default("AgeScx: Diplomacy");
	    data.skip(11520); // unused space
	    data.skip(4); // separator
	    data.skip(16 * 4); // allied victory, ignored
	    Reader.readDisabled(scenario, data);
	    Debug_1.default("AgeScx: Disables");
	    data.skip(8); // unused
	    scenario.setup.allTech = data.getInt32();
	    allPlayers.forEach(function (player) {
	        player.age = data.getInt32();
	    });
	    data.skip(7 * 4); // for another players
	    data.skip(4); // separator
	    scenario.setup.startCam = [data.getInt32(), data.getInt32()];
	    scenario.setup.aiType = data.getUint32();
	    scenario.setup.width = data.getUint32();
	    scenario.setup.height = data.getUint32();
	    Debug_1.default("AgeScx: Scenario setup");
	    Reader.readTiles(scenario, data);
	    Debug_1.default("AgeScx: Scenario tiles, count = " + scenario.tiles.length);
	    data.skip(4); // number of units section
	    Reader.readPlayerData3(scenario, data);
	    Debug_1.default("AgeScx: Player Data #3 - Resources");
	    Reader.readUnits(scenario, data);
	    Debug_1.default("AgeScx: Scenario Units");
	    data.skip(4); // number of players, again
	    Reader.readPlayerData4(scenario, data);
	    Debug_1.default("AgeScx: Player Data #4 - Advanced");
	    data.skip(8); // unknown, 1.6
	    data.skip(1); // unknown
	    Reader.readTriggers(scenario, data);
	    Debug_1.default("AgeScx: Triggers, count = " + scenario.triggers.length);
	    Debug_1.default(scenario);
	    Debug_1.default("Agescx: Scenario loaded, time = " + (new Date().getTime() - startTime) + "ms");
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = readScenario;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Cinematics_1 = __webpack_require__(4);
	exports.readCinematics = Cinematics_1.readCinematics;
	var Condition_1 = __webpack_require__(5);
	exports.readCondition = Condition_1.readCondition;
	var Diplomacy_1 = __webpack_require__(7);
	exports.readDiplomacy = Diplomacy_1.readDiplomacy;
	var Disabled_1 = __webpack_require__(8);
	exports.readDisabled = Disabled_1.readDisabled;
	var Effect_1 = __webpack_require__(9);
	exports.readEffect = Effect_1.readEffect;
	var Goals_1 = __webpack_require__(11);
	exports.readGoals = Goals_1.readGoals;
	var Header_1 = __webpack_require__(12);
	exports.readHeader = Header_1.readHeader;
	var Image_1 = __webpack_require__(13);
	exports.readImage = Image_1.readImage;
	var Messages_1 = __webpack_require__(14);
	exports.readMessages = Messages_1.readMessages;
	var PlayerData1_1 = __webpack_require__(15);
	exports.readPlayerData1 = PlayerData1_1.readPlayerData1;
	var PlayerData2_1 = __webpack_require__(16);
	exports.readPlayerData2 = PlayerData2_1.readPlayerData2;
	var PlayerData3_1 = __webpack_require__(17);
	exports.readPlayerData3 = PlayerData3_1.readPlayerData3;
	var PlayerData4_1 = __webpack_require__(18);
	exports.readPlayerData4 = PlayerData4_1.readPlayerData4;
	var Tile_1 = __webpack_require__(19);
	exports.readTile = Tile_1.readTile;
	var Tiles_1 = __webpack_require__(20);
	exports.readTiles = Tiles_1.readTiles;
	var Trigger_1 = __webpack_require__(21);
	exports.readTrigger = Trigger_1.readTrigger;
	var Triggers_1 = __webpack_require__(22);
	exports.readTriggers = Triggers_1.readTriggers;
	var Unit_1 = __webpack_require__(23);
	exports.readUnit = Unit_1.readUnit;
	var Units_1 = __webpack_require__(24);
	exports.readUnits = Units_1.readUnits;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	exports.readCinematics = function (scenario, data) {
	    var cinematics = scenario.cinematics;
	    cinematics.intro = data.getStr16();
	    cinematics.defeat = data.getStr16();
	    cinematics.victory = data.getStr16();
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var CreateCondition_1 = __webpack_require__(6);
	exports.readCondition = function (data) {
	    var condition = CreateCondition_1.default();
	    condition.type = data.getInt32();
	    condition.check = data.getInt32();
	    condition.amount = data.getInt32();
	    condition.resource = data.getInt32();
	    condition.unitObject = data.getInt32();
	    condition.unitId = data.getInt32();
	    condition.unitName = data.getInt32();
	    condition.source = data.getInt32();
	    condition.tech = data.getInt32();
	    condition.timer = data.getInt32();
	    condition.unknown = data.getInt32();
	    condition.area = [
	        data.getInt32(), data.getInt32(),
	        data.getInt32(), data.getInt32()
	    ];
	    condition.unitGroup = data.getInt32();
	    condition.unitType = data.getInt32();
	    condition.aiSignal = data.getInt32();
	    return condition;
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var createCondition = function () { return ({
	    type: 0,
	    check: 0,
	    amount: 0,
	    resource: 0,
	    unitObject: 0,
	    unitId: 0,
	    unitName: 0,
	    source: 0,
	    tech: 0,
	    timer: 0,
	    unknown: 0,
	    area: [0, 0, 0, 0],
	    unitGroup: 0,
	    unitType: 0,
	    aiSignal: 0
	}); };
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = createCondition;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	exports.readDiplomacy = function (scenario, data) {
	    var playablePlayers = scenario.players.slice(1, 9);
	    playablePlayers.forEach(function (player) {
	        for (var i = 0; i < 8; i++) {
	            player.diplomacy.push(data.getInt32());
	        }
	        data.skip(8 * 4); // skip diplomacy to other players
	    });
	    data.skip(8 * 16 * 4); // skip other players
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	exports.readDisabled = function (scenario, data) {
	    var playablePlayers = scenario.players.slice(1, 9);
	    data.skip(16 * 4); // techs count
	    playablePlayers.forEach(function (player) {
	        for (var i = 0; i < 30; i++) {
	            player.disTechs.push(data.getInt32());
	        }
	    });
	    data.skip(4 * 8 * 30); // skip for another players
	    // @todo extra tech for 1.30 version
	    data.skip(16 * 4); // units count
	    playablePlayers.forEach(function (player) {
	        for (var i = 0; i < 30; i++) {
	            player.disUnits.push(data.getInt32());
	        }
	    });
	    data.skip(4 * 8 * 30); // for another players
	    // @todo extra units for 1.30 version
	    data.skip(16 * 4); // buildings count
	    playablePlayers.forEach(function (player) {
	        for (var i = 0; i < 20; i++) {
	            player.disBuildings.push(data.getInt32());
	        }
	    });
	    data.skip(4 * 8 * 20); // for another players
	    // @todo extra buildings for 1.30 version
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var CreateEffect_1 = __webpack_require__(10);
	exports.readEffect = function (data) {
	    var effect = CreateEffect_1.default();
	    effect.type = data.getInt32();
	    effect.check = data.getInt32();
	    effect.aiGoal = data.getInt32();
	    effect.amount = data.getInt32();
	    effect.resource = data.getInt32();
	    effect.diplomacy = data.getInt32();
	    var unitsCount = data.getInt32();
	    effect.unitId = data.getInt32();
	    effect.unitName = data.getInt32();
	    effect.source = data.getInt32();
	    effect.target = data.getInt32();
	    effect.tech = data.getInt32();
	    effect.instrId = data.getInt32();
	    effect.soundId = data.getInt32();
	    effect.instrTime = data.getInt32();
	    effect.triggerId = data.getInt32();
	    effect.location = [
	        data.getInt32(), data.getInt32()
	    ];
	    effect.area = [
	        data.getInt32(), data.getInt32(),
	        data.getInt32(), data.getInt32()
	    ];
	    effect.unitGroup = data.getInt32();
	    effect.unitType = data.getInt32();
	    effect.instrPanel = data.getInt32(); // @Todo: InstrOrd?
	    effect.instrText = data.getStr32();
	    effect.soundFile = data.getStr32();
	    for (var i = 0; i < unitsCount; i++) {
	        effect.unitIds.push(data.getInt32());
	    }
	    return effect;
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	var createEffect = function () { return ({
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
	    soundId: 0,
	}); };
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = createEffect;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	exports.readGoals = function (scenario, data) {
	    var goals = scenario.goals;
	    goals.conquest = data.getInt32();
	    goals.unk1 = data.getInt32();
	    goals.relics = data.getInt32();
	    goals.unk2 = data.getInt32();
	    goals.exploration = data.getInt32();
	    goals.unk3 = data.getInt32();
	    goals.all = data.getInt32();
	    goals.mode = data.getInt32();
	    goals.score = data.getInt32();
	    goals.time = data.getInt32();
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	exports.readHeader = function (scenario, data) {
	    var header = scenario.header;
	    header.version = data.getChar(4); // scenario version
	    header.size = data.getUint32(); // size of headerer, excluding version and this
	    header.unknown1 = data.getUint32(); // ? unknown
	    header.lastSave = data.getUint32(); // last save game timestamp
	    header.instructions = data.getStr32(); // instructions before a start
	    header.unknown2 = data.getInt32(); // ? unknown
	    header.players = data.getInt32();
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	exports.readImage = function (scenario, data) {
	    var image = scenario.image;
	    image.filename = data.getStr16();
	    image.included = data.getInt32();
	    image.width = data.getInt32();
	    image.height = data.getInt32();
	    image.exists = data.getInt16();
	    if ((image.exists === -1) || (image.exists === 2)) {
	    }
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	exports.readMessages = function (scenario, data) {
	    var messages = scenario.messages;
	    messages.objectives.id = data.getInt32();
	    messages.hints.id = data.getInt32();
	    messages.victory.id = data.getInt32();
	    messages.loss.id = data.getInt32();
	    messages.history.id = data.getInt32();
	    messages.scout.id = data.getInt32(); // 1.22>
	    messages.objectives.text = data.getStr16();
	    messages.hints.text = data.getStr16();
	    messages.victory.text = data.getStr16();
	    messages.loss.text = data.getStr16();
	    messages.history.text = data.getStr16();
	    messages.scout.text = data.getStr16(); // 1.22>
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	exports.readPlayerData1 = function (scenario, data) {
	    var allPlayers = scenario.players;
	    allPlayers.forEach(function (player) {
	        player.active = data.getUint32(); // is active
	        player.human = data.getUint32(); // is human
	        player.civ = data.getInt32(); // player civilization
	        player.unk1 = data.getUint32(); // ? unknown
	    });
	    data.skip(7 * 16); // skip non-playable players
	};


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	exports.readPlayerData2 = function (scenario, data) {
	    var playablePlayers = scenario.players.slice(1, 9);
	    for (var i = 0; i < 16; i++) {
	        data.getStr16();
	        data.getStr16();
	    }
	    // ai name
	    playablePlayers.forEach(function (player) {
	        player.aiName = data.getStr16();
	    });
	    for (var i = 0; i < 8; i++) {
	        data.getStr16();
	    }
	    // ai source
	    playablePlayers.forEach(function (player) {
	        data.skip(8); // unknowns 2 & 3
	        player.aiSource = data.getStr32();
	    });
	    for (var i = 0; i < 8; i++) {
	        data.skip(8);
	        data.getStr32();
	    }
	    // ai type
	    playablePlayers.forEach(function (player) {
	        player.aiType = data.getInt8();
	    });
	    data.skip(8); // skip non-playable players
	    data.skip(4); // separator
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	exports.readPlayerData3 = function (scenario, data) {
	    var playablePlayers = scenario.players.slice(1, 9);
	    playablePlayers.forEach(function (player) {
	        player.food = data.getFloat32();
	        player.wood = data.getFloat32();
	        player.gold = data.getFloat32();
	        player.stone = data.getFloat32();
	        player.ore = data.getFloat32();
	        data.skip(4); // padding
	        player.population = data.getFloat32();
	    });
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	exports.readPlayerData4 = function (scenario, data) {
	    var playablePlayers = scenario.players.slice(1, 9);
	    playablePlayers.forEach(function (player) {
	        player.constName = data.getStr16();
	        player.startCam = [
	            data.getFloat32(),
	            data.getFloat32()
	        ];
	        data.skip(4); // skip duplicated camera X and camera Y
	        data.skip(1); // skip allyVictory, duplicated
	        var numOfDipl = data.getUint16();
	        data.skip(numOfDipl * 1);
	        data.skip(9 * 4); // player / diplomacy
	        player.color = data.getUint32();
	        player.unk2 = data.getFloat32();
	        player.unk3 = data.getUint16();
	        if (player.unk2 === 2.0) {
	            data.skip(8 * 1);
	        }
	        data.skip(player.unk3 * 44);
	        data.skip(7 * 1);
	        data.skip(4);
	    });
	};


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	exports.readTile = function (data) { return ({
	    type: data.getUint8(),
	    level: data.getUint8(),
	    unk1: data.getUint8()
	}); };


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Tile_1 = __webpack_require__(19);
	exports.readTiles = function (scenario, data) {
	    var count = scenario.setup.width * scenario.setup.height;
	    for (var i = 0; i < count; i++) {
	        scenario.tiles.push(Tile_1.readTile(data));
	    }
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Effect_1 = __webpack_require__(9);
	var Condition_1 = __webpack_require__(5);
	exports.readTrigger = function (scenario, data) {
	    var trigger = {
	        enable: data.getUint32(),
	        loop: data.getInt8(),
	        strId: data.getInt32(),
	        desc: data.getInt8(),
	        descOrd: data.getUint32(),
	        timeStart: data.getUint32(),
	        text: data.getStr32(),
	        name: data.getStr32(),
	        effects: [],
	        effectsOrd: [],
	        conditions: [],
	        conditionsOrd: []
	    };
	    var effectsCount = data.getUint32();
	    for (var i = 0; i < effectsCount; i++) {
	        trigger.effects.push(Effect_1.readEffect(data));
	    }
	    for (var i = 0; i < effectsCount; i++) {
	        trigger.effectsOrd.push(data.getInt32());
	    }
	    var conditionsCount = data.getUint32();
	    for (var i = 0; i < conditionsCount; i++) {
	        trigger.conditions.push(Condition_1.readCondition(data));
	    }
	    for (var i = 0; i < conditionsCount; i++) {
	        trigger.conditionsOrd.push(data.getInt32());
	    }
	    return trigger;
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Trigger_1 = __webpack_require__(21);
	exports.readTriggers = function (scenario, data) {
	    var count = data.getUint32();
	    for (var i = 0; i < count; i++) {
	        scenario.triggers.push(Trigger_1.readTrigger(scenario, data));
	    }
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	exports.readUnit = function (data) { return ({
	    x: data.getFloat32(),
	    y: data.getFloat32(),
	    unk1: data.getFloat32(),
	    id: data.getUint32(),
	    type: data.getUint16(),
	    unk2: data.getInt8(),
	    angle: data.getFloat32(),
	    frame: data.getUint16(),
	    inId: data.getInt32()
	}); };


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Debug_1 = __webpack_require__(25);
	var Unit_1 = __webpack_require__(23);
	exports.readUnits = function (scenario, data) {
	    var allPlayers = scenario.players;
	    allPlayers.forEach(function (player, index) {
	        var numOfUnits = data.getUint32();
	        Debug_1.default("AgeScx: Player #" + index + " num. of units = " + numOfUnits);
	        for (var i = 0; i < numOfUnits; i++) {
	            player.units.push(Unit_1.readUnit(data));
	        }
	    });
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	var isDev = (NODE_ENV === 'development');
	var debug = function (text) {
	    return (isDev) ? console.log(text) : undefined;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = debug;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var createPlayer_1 = __webpack_require__(27);
	var createMessage_1 = __webpack_require__(31);
	var CreateHeader_1 = __webpack_require__(32);
	var createScenario = function () { return ({
	    header: CreateHeader_1.default(),
	    version: '1.22',
	    players: [
	        createPlayer_1.default(),
	        createPlayer_1.default(),
	        createPlayer_1.default(),
	        createPlayer_1.default(),
	        createPlayer_1.default(),
	        createPlayer_1.default(),
	        createPlayer_1.default(),
	        createPlayer_1.default(),
	        createPlayer_1.default(),
	    ],
	    messages: {
	        objectives: createMessage_1.default(),
	        hints: createMessage_1.default(),
	        victory: createMessage_1.default(),
	        loss: createMessage_1.default(),
	        history: createMessage_1.default(),
	        scout: createMessage_1.default()
	    },
	    cinematics: {
	        intro: '',
	        defeat: '',
	        victory: ''
	    },
	    image: {
	        filename: '',
	        included: 0,
	        width: 0,
	        height: 0,
	        exists: 0,
	        raw: ''
	    },
	    goals: {
	        conquest: 0,
	        relics: 0,
	        exploration: 0,
	        all: 0,
	        mode: 0,
	        score: 0,
	        time: 0,
	        unk1: 0,
	        unk2: 0,
	        unk3: 0
	    },
	    setup: {
	        allTech: 0,
	        aiType: 0,
	        startCam: [0, 0],
	        height: 0,
	        width: 0,
	        nextId: 0,
	        filename: ''
	    },
	    tiles: [],
	    triggers: [],
	    triggersOrd: []
	}); };
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = createScenario;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var eCivilization_1 = __webpack_require__(28);
	var ePlayerColor_1 = __webpack_require__(29);
	var eAge_1 = __webpack_require__(30);
	var createPlayer = function () { return ({
	    name: '',
	    nameId: 0,
	    constName: '',
	    active: 0,
	    human: 0,
	    civ: eCivilization_1.default.Britons,
	    unk1: 0,
	    unk2: 0,
	    unk3: 0,
	    aiName: '',
	    aiSource: '',
	    aiType: 0,
	    age: eAge_1.default.None,
	    population: 100,
	    color: ePlayerColor_1.default.Gray,
	    food: 0,
	    wood: 0,
	    gold: 0,
	    stone: 0,
	    ore: 0,
	    diplomacy: [],
	    alliedVict: 0,
	    startCam: [0, 0],
	    disTechs: [],
	    disBuildings: [],
	    disUnits: [],
	    units: []
	}); };
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = createPlayer;


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	var eCivilization;
	(function (eCivilization) {
	    eCivilization[eCivilization["Britons"] = 0] = "Britons";
	    eCivilization[eCivilization["Franks"] = 1] = "Franks";
	    eCivilization[eCivilization["Goths"] = 3] = "Goths";
	    eCivilization[eCivilization["Teutons"] = 4] = "Teutons";
	    eCivilization[eCivilization["Japanese"] = 5] = "Japanese";
	    eCivilization[eCivilization["Chinese"] = 6] = "Chinese";
	    eCivilization[eCivilization["Byzantines"] = 7] = "Byzantines";
	    eCivilization[eCivilization["Persians"] = 8] = "Persians";
	    eCivilization[eCivilization["Saracens"] = 9] = "Saracens";
	    eCivilization[eCivilization["Turks"] = 10] = "Turks";
	    eCivilization[eCivilization["Vikings"] = 11] = "Vikings";
	    eCivilization[eCivilization["Mongols"] = 12] = "Mongols";
	    eCivilization[eCivilization["Celts"] = 13] = "Celts";
	    eCivilization[eCivilization["Spanish"] = 14] = "Spanish";
	    eCivilization[eCivilization["Aztecs"] = 15] = "Aztecs";
	    eCivilization[eCivilization["Mayans"] = 16] = "Mayans";
	    eCivilization[eCivilization["Huns"] = 17] = "Huns";
	    eCivilization[eCivilization["Koreans"] = 18] = "Koreans"; // The Conquerors
	})(eCivilization || (eCivilization = {}));
	;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = eCivilization;


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	var ePlayerColor;
	(function (ePlayerColor) {
	    ePlayerColor[ePlayerColor["Blue"] = 0] = "Blue";
	    ePlayerColor[ePlayerColor["Red"] = 1] = "Red";
	    ePlayerColor[ePlayerColor["Green"] = 2] = "Green";
	    ePlayerColor[ePlayerColor["Yellow"] = 3] = "Yellow";
	    ePlayerColor[ePlayerColor["Cyan"] = 4] = "Cyan";
	    ePlayerColor[ePlayerColor["Purple"] = 5] = "Purple";
	    ePlayerColor[ePlayerColor["Gray"] = 6] = "Gray";
	    ePlayerColor[ePlayerColor["Orange"] = 7] = "Orange";
	})(ePlayerColor || (ePlayerColor = {}));
	;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ePlayerColor;


/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	var eAge;
	(function (eAge) {
	    eAge[eAge["None"] = -1] = "None";
	    eAge[eAge["Dark"] = 0] = "Dark";
	    eAge[eAge["Feudal"] = 1] = "Feudal";
	    eAge[eAge["Castle"] = 2] = "Castle";
	    eAge[eAge["Imperial"] = 3] = "Imperial";
	    eAge[eAge["PostImperial"] = 4] = "PostImperial";
	})(eAge || (eAge = {}));
	;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = eAge;


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	var createMessage = function () { return ({
	    id: 0,
	    text: ''
	}); };
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = createMessage;


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	var createHeader = function (version) {
	    if (version === void 0) { version = '1.21'; }
	    return ({
	        version: '',
	        size: 0,
	        lastSave: 20,
	        instructions: '',
	        players: 8,
	        unknown1: 2,
	        unknown2: 0,
	    });
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = createHeader;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var asdata_1 = __webpack_require__(34);
	/**
	 * Create ASDataView from buffer
	 * @param {ArrayBuffer} arrayBuffer - file buffer
	 * @retunr {ASData}
	 */
	exports.createASDataView = function (arrayBuffer) {
	    return new asdata_1.default(arrayBuffer);
	};


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * AgeScx Data view
	 * supports reading and writing primitive types
	 * offset is automaticly moved forward about size of 'DataType'
	 */
	var ASData = (function () {
	    /**
	     * @param {ArrayBuffer} arrayBuffer - arrayBuffer from file
	     * @param {number} offset - starting offset = 0
	     */
	    function ASData(arrayBuffer, offset) {
	        var _this = this;
	        if (offset === void 0) { offset = 0; }
	        this._offset = 0; // offset in binary file
	        this._data = null; // will be initialized in constructor
	        /**
	         * get Unsigned 8-bit integer
	         * @return {number} Unsigned 8-bit integer
	         */
	        this.getUint8 = function () { return _this._getPrimitive(_this._data.getUint8, 1); };
	        /**
	         * get Signed 8-bit integer
	         * @return {number} Signed 8-bit integer
	         */
	        this.getInt8 = function () { return _this._getPrimitive(_this._data.getInt8, 1); };
	        /**
	         * get Unsigned 16-bit integer
	         * @return {number} Unsigned 16-bit integer
	         */
	        this.getUint16 = function () { return _this._getPrimitive(_this._data.getUint16, 2); };
	        /**
	         * get Signed 16-bit integer
	         * @return {number} Signed 16-bit integer
	         */
	        this.getInt16 = function () { return _this._getPrimitive(_this._data.getInt16, 2); };
	        /**
	         * get Unsigned 32-bit integer
	         * @return {number} Unsigned 32-bit integer
	         */
	        this.getUint32 = function () { return _this._getPrimitive(_this._data.getUint32, 4); };
	        /**
	         * get Signed 32-bit integer
	         * @return {number} Signed 32-bit integer
	         */
	        this.getInt32 = function () { return _this._getPrimitive(_this._data.getInt32, 4); };
	        /**
	         * get 32-bit float
	         * @return {number} 32-bit float
	         */
	        this.getFloat32 = function () { return _this._getPrimitive(_this._data.getFloat32, 4); };
	        /**
	         * get 64-bit float
	         * @return {number} 64-bit float
	         */
	        this.getFloat64 = function () { return _this._getPrimitive(_this._data.getFloat64, 8); };
	        this._getPrimitive = function (method, size) {
	            _this._offset += size;
	            return (method.bind(_this._data))(_this._offset - size, true);
	        };
	        this._offset = offset;
	        this._data = new DataView(arrayBuffer, 0);
	    }
	    /**
	     * will inflate dataview
	     * @param {number} offset - from which offset
	     */
	    ASData.prototype.inflate = function (offset) {
	        if (offset === void 0) { offset = 0; }
	        var toInflate = new Uint8Array(this._data.buffer.slice(offset));
	        var inflated = pako.inflate(toInflate, { raw: true });
	        this._data = new DataView(inflated.buffer);
	        this._offset = 0; // restart position
	    };
	    /**
	     * Create new ASReader from sliced one
	     * @param {number} start - starting offset
	     * @param {number} end - ending offset
	     * @return {ASReader}
	     */
	    ASData.prototype.slice = function (start, end) {
	        return new ASData(this._data.buffer.slice(start, end));
	    };
	    /**
	     * skip number of bytes
	     * @param {number} size - in bytes
	     * @return {number} new offset
	     */
	    ASData.prototype.skip = function (size) {
	        return (this._offset += size);
	    };
	    /**
	     * set offset
	     * @param {number} offset - new offset
	     */
	    ASData.prototype.setOffset = function (offset) {
	        this._offset = offset;
	    };
	    /**
	     * get current offset
	     * @return {number} current offset
	     */
	    ASData.prototype.getOffset = function () {
	        return this._offset;
	    };
	    /**
	     * get char(s)
	     * @param {number} length - number of chars to read
	     * @return {string} result as string
	     */
	    ASData.prototype.getChar = function (length) {
	        if (length === void 0) { length = 1; }
	        // @TODO support for Unicode chars
	        var result = '';
	        for (var i = 0; i < length; i++) {
	            result += String.fromCharCode(this.getInt8());
	        }
	        return result;
	    };
	    /**
	     * get null-terminated string
	     * @param {number} maxSize - maximum size of c-string
	     * @return {string} result string
	     */
	    ASData.prototype.getCStr = function (maxSize) {
	        if (maxSize === void 0) { maxSize = 65535; }
	        var result = '', i = 0, char = '';
	        while (i < maxSize) {
	            if ((char = this.getChar()) === '\0') {
	                break;
	            }
	            result += char;
	        }
	        return result;
	    };
	    /**
	     * get string with 16-bit length
	     * @return {string} result
	     */
	    ASData.prototype.getStr16 = function () {
	        var result = '', i = 0, length = this.getUint16();
	        while (i < length) {
	            result += this.getChar();
	            i++;
	        }
	        return result;
	    };
	    /**
	     * get string with 32-bit length
	     * @return {string} result
	     */
	    ASData.prototype.getStr32 = function () {
	        var result = '', i = 0, length = this.getUint32();
	        while (i < length) {
	            result += this.getChar();
	            i++;
	        }
	        return result;
	    };
	    return ASData;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ASData;


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ }
/******/ ])));