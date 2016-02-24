import IMessage from './IMessage';

interface IMessages {
    objectives: IMessage,
    hints: IMessage,
    victory: IMessage,
    loss: IMessage,
    history: IMessage,
    scout: IMessage
};

export default IMessages;
