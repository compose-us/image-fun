type GetHintFromWord = (word: string, maxChars?: number) => string;

const getHintFromWord: GetHintFromWord = (word, maxChars = 3) => {
  const chars = word.split("");
  const amountOfHintChars = Math.ceil(chars.length / maxChars);
  const hintChars = chars.slice(0, amountOfHintChars).join("");
  const rest = Array.from({
    length: chars.length - amountOfHintChars
  })
    .map(() => ".")
    .join("");
  return `${hintChars}${rest}`;
};

export default getHintFromWord;
