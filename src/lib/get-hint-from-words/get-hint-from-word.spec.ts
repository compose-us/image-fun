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
    expect(hint.length).toBe(word.length);
  });

  it("distributes the dots throughout the word", () => {
    const word = "word";
    const maxChars = word.length / 3;
    const hintChars = getHintFromWord(word).split("");
    console.log(hintChars);
    for (let c of hintChars) {
      expect(hintChars.filter(w => w === c).length).toBeLessThanOrEqual(
        Math.floor(word.length / maxChars)
      );
      expect(hintChars.filter(w => w === ".").length).toBeGreaterThanOrEqual(
        word.length - Math.ceil(word.length / maxChars)
      );
    }
  });
});
