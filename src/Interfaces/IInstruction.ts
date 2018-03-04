interface IInstruction {
  strId: string; // string id
  order: number; // position on screen
  text: string; // text to display
  delay: number; // how much time
}

export default IInstruction;
