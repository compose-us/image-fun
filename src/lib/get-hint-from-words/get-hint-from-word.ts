type GetHintFromWord = (word: string) => string;

const getHintFromWord: GetHintFromWord = word => {
  const chars = word.split("");
  const amountOfHintChars = Math.ceil(chars.length / 3);
  const hintChars = chars.slice(0, amountOfHintChars).join("");
  const rest = Array.from({
    length: chars.length - amountOfHintChars
  })
    .map(() => ".")
    .join("");
  return `${hintChars}${rest}`;
};

export default getHintFromWord;
