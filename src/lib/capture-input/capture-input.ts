const captureInput = (word: string, letter: string, index: number) => {
  return word.slice(0, index) + letter + word.slice(index + 1);
};

export default captureInput;
