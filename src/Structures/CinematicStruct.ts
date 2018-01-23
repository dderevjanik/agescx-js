import ASData from "asdata";

export type CinematicStruct = {
  intro: string;
  defeat: string;
  victory: string;
};

export function readCinematic(data: ASData) {
  return {
    intro: data.getStr16(),
    defeat: data.getStr16(),
    victory: data.getStr16()
  };
}
