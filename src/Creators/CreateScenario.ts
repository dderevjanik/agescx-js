import IScenario from './../Interfaces/IScenario';
import createPlayer from './createPlayer';
import createMessage from './createMessage';
import createHeader from './CreateHeader';

const createScenario = (): IScenario => ({
    header: createHeader(),
    version: '1.22',
    players: [
        createPlayer(), // GAIA
        createPlayer(), // Player 1
        createPlayer(), // Player 2
        createPlayer(), // Player 3
        createPlayer(), // Player 4
        createPlayer(), // Player 5
        createPlayer(), // Player 6
        createPlayer(), // Player 7
        createPlayer(), // Player 8
    ],
    messages: {
        objectives: createMessage(),
        hints: createMessage(),
        victory: createMessage(),
        loss: createMessage(),
        history: createMessage(),
        scout: createMessage()
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
    triggersOrd: [],
    decompressTime: 0
});

export default createScenario;
