import getHintFromWord from "./get-hint-from-word";

describe("getHintFromWord", () => {
  it("contains only chars from that word and dots", () => {
    const word = "something";
    const chars = word.split("").sort();
    const hintChars = getHintFromWord(word)
      .split("")
      .filter(c => c !== ".")
      .sort();
    hintChars.forEach(char => {
      expect(chars.find(c => c === char)).not.toBeFalsy();
    });
  });
  it("should have the same amount of chars as one of the two words", () => {
    const word = "word";
    const hint = getHintFromWord(word);
    console.log(hint);
    expect(hint.length).toBe(word.length);
  });
});
