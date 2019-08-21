type GetHintFromWord = (word: string, amountOfHintChars?: number) => string;

const getHintFromWord: GetHintFromWord = (
  word,
  amountOfHintChars = Math.floor(word.length / 3)
) => {
  const chars = word.split("");
  const hintChars = chars.slice(0, amountOfHintChars).join("");
  const rest = Array.from({
    length: chars.length - amountOfHintChars
  })
    .map(() => ".")
    .join("");
  return `${hintChars}${rest}`;
};

export default getHintFromWord;
