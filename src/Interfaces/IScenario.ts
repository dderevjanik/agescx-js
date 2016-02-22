import IPlayer from './IPlayer';
import IMessage from './Imessage';
import IImage from './IImage';
import ITile from './ITile';
import IUnit from './IUnit';
import ITrigger from './ITrigger';
import IHeader from './IHeader';

interface IScenario {
    header: IHeader,
    version: number,
    players: Array<IPlayer>,
    messages: {
        objectives: IMessage,
        hints: IMessage,
        victory: IMessage,
        loss: IMessage,
        history: IMessage,
        scout: IMessage
    },
    cinematics: {
        intro: string,
        defeat: string,
        victory: string,
    },
    image: IImage,
    goals: {
        conquest: number,
        relics: number,
        exploration: number,
        mode: number,
        score: number,
        time: number,
        all: number,
        unk1: number,
        unk2: number,
        unk3: number
    },
    setup: {
        allTech: number,
        aiType: number,
        startCam: Array<number>,
        height: number,
        width: number,
        nextId: number,
        filename: string
    }
    tiles: Array<ITile>,
    triggers: Array<ITrigger>
};

export default IScenario;
