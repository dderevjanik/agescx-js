import IScenario from './../Interfaces/IScenario';
import CreatePlayer from './CreatePlayer';
import CreateTrigger from './CreateTrigger';
import CreateUnit from './CreateUnit';
import CreateMessage from './CreateMessage';
import CreateHeader from './CreateHeader';

const CreateScenario = (): IScenario => ({
    header: CreateHeader(),
    version: 1.22,
    players: [
        CreatePlayer(),
        CreatePlayer(),
        CreatePlayer(),
        CreatePlayer(),
        CreatePlayer(),
        CreatePlayer(),
        CreatePlayer(),
        CreatePlayer(),
        CreatePlayer(),
    ],
    messages: {
        objectives: CreateMessage(),
        hints: CreateMessage(),
        victory: CreateMessage(),
        loss: CreateMessage(),
        history: CreateMessage(),
        scout: CreateMessage()
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
        filename: ""
    },
    tiles: [],
    triggers: []
});

export default CreateScenario;
