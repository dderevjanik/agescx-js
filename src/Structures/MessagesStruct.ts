import ASData from "asdata";

export type MessagesStruct = {
  objectivesId: number;
  hintsId: number;
  victoryId: number;
  lossId: number;
  historyId: number;
  scoutId: number;
  objectivesTxt: string;
  hintsTxt: string;
  victoryTxt: string;
  lossTxt: string;
  historyTxt: string;
  scoutTxt: string;
};

export function readMessages(data: ASData): MessagesStruct {
  return {
    objectivesId: data.getInt32(),
    hintsId: data.getInt32(),
    victoryId: data.getInt32(),
    lossId: data.getInt32(),
    historyId: data.getInt32(),
    scoutId: data.getInt32(),
    objectivesTxt: data.getStr16(),
    hintsTxt: data.getStr16(),
    victoryTxt: data.getStr16(),
    lossTxt: data.getStr16(),
    historyTxt: data.getStr16(),
    scoutTxt: data.getStr16()
  };
}
