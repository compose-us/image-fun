const captureInput = (state: string, value: string, index: number) => {
  return state.slice(0, index) + value + state.slice(index + 1);
};

export default captureInput;
