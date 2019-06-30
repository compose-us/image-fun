const generateList = (words: string[], num: number) => {
  let keywords = [];
  for (let i = 0; i < num; i++) {
    keywords.push(words[Math.floor(Math.random() * words.length)]);
  }
  return keywords;
};

export default generateList;