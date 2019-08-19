import getHintFromWord from "./get-hint-from-word";

type GetHintFromWords = (...words: string[]) => string;

const getHintFromWords: GetHintFromWords = (...words) => {
  const word = words[Math.floor(Math.random() * words.length)];
  return getHintFromWord(word);
};

export default getHintFromWords;
