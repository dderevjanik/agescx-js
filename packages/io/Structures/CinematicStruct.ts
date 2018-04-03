import ASData from "asdata";

export type CinematicStruct = {
  /**
   * Intro video filename
   */
  intro: string;
  /**
   * Defeat video filename
   */
  defeat: string;
  /**
   * Victory video filename
   */
  victory: string;
};

export function readCinematic(data: ASData) {
  return {
    intro: data.getStr16(),
    defeat: data.getStr16(),
    victory: data.getStr16()
  };
}
