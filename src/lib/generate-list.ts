const generateList = (words: string[], num: number) => {
  const maxAmountPerWord = Math.floor(num / words.length);
  let freeSpace = new Array(num).fill(1).map((i, idx) => i * idx);
  let keywords = new Array(num);
  for (let word of words) {
    for (let i = 0; i < maxAmountPerWord; i++) {
      const selectedIndex =
        freeSpace[Math.floor(Math.random() * freeSpace.length)];
      keywords[selectedIndex] = word;
      freeSpace = freeSpace.filter(index => index !== selectedIndex);
    }
  }
  // assert freeSpace.length < words.length
  freeSpace.forEach((remainingIndex, index) => {
    keywords[remainingIndex] = words[index];
  });
  return keywords;
};

export default generateList;
