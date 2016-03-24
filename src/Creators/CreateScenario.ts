import IScenario from './../Interfaces/IScenario';
import createPlayer from './CreatePlayer';
import createGoals from './CreateGoals';
import createSetup from './CreateSetup';
import createMessage from './CreateMessage';
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
    goals: createGoals(),
    setup: createSetup(),
    tiles: [],
    triggers: [],
    triggersOrd: [],
    debug: {
        version: '',
        startTime: 0,
        endTime: 0,
        environment: '',
        decompressTime: 0
    }
});

export default createScenario;
