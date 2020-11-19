import getHintFromWord from "./get-hint-from-word";

type GetHintFromWords = (...words: string[]) => string[];

const getHintFromWords: GetHintFromWords = (...words) => {
  // const word = words[Math.floor(Math.random() * words.length)];
  const word1 = words[0];
  const word2 = words[1];
  return [getHintFromWord(word1), getHintFromWord(word2)];
};

export default getHintFromWords;
