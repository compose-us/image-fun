type GetHintFromWord = (word: string, amountOfHintChars?: number) => string;

const getHintFromWord: GetHintFromWord = (
  word,
  amountOfHintChars = Math.floor(word.length / 3)
) => {
  const chars = word.split("");
  let indices = chars.map((_, idx) => idx);
  let hint = chars.map(() => ".");
  for (let i = 0; i < amountOfHintChars; i++) {
    const selectedIndex = indices[Math.floor(Math.random() * indices.length)];
    hint[selectedIndex] = chars[selectedIndex];
    indices = indices.filter(index => index !== selectedIndex);
  }
  return hint.join("");
};

export default getHintFromWord;
