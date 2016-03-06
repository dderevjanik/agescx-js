import IPlayer from './IPlayer';
import IImage from './IImage';
import ITile from './ITile';
import ITrigger from './ITrigger';
import IHeader from './IHeader';
import IGoals from './IGoals';
import ICinematics from './ICinematics';
import IMessages from './IMessages';

interface IScenario {
    header: IHeader;
    version: string;
    players: Array<IPlayer>;
    messages: IMessages;
    cinematics: ICinematics;
    image: IImage;
    goals: IGoals;
    setup: {
        allTech: number;
        aiType: number;
        startCam: Array<number>;
        height: number;
        width: number;
        nextId: number;
        filename: string
    };
    tiles: Array<ITile>;
    triggers: Array<ITrigger>;
    triggersOrd: Array<number>;
    decompressTime: number; // @todo Add debug section for time, chunks and othr.
};

export default IScenario;