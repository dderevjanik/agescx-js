import IScenario from './../Interfaces/IScenario';
import IMessages from './../Interfaces/IMessages';
import ASDataView from './../ASDataView';

export const readMessages = (scenario: IScenario, data: ASDataView): void => {
    const messages: IMessages = scenario.messages;

    messages.objectives.id = data.getInt32()[0];
    messages.hints.id = data.getInt32()[0];
    messages.victory.id = data.getInt32()[0];
    messages.loss.id = data.getInt32()[0];
    messages.history.id = data.getInt32()[0];
    messages.scout.id = data.getInt32()[0]; // 1.22>

    messages.objectives.text = data.getStr16()[0];
    messages.hints.text = data.getStr16()[0];
    messages.victory.text = data.getStr16()[0];
    messages.loss.text = data.getStr16()[0];
    messages.history.text = data.getStr16()[0];
    messages.scout.text = data.getStr16()[0]; // 1.22>
};
