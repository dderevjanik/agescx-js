import IScenario from './../Interfaces/IScenario';
import IMessages from './../Interfaces/IMessages';
import ASData from 'asdata';

export const readMessages = (scenario: IScenario, data: ASData): void => {
    const messages: IMessages = scenario.messages;

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

export default {
    readMessages: readMessages
};
