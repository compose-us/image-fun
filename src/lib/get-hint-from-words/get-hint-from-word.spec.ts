import getHintFromWord from "./get-hint-from-word";

describe("getHintFromWord", () => {
  it("contains only chars from that word and dots", () => {
    const word = "something";
    const chars = word.split("").sort();
    const hintChars = getHintFromWord(word)
      .split("")
      .filter((c) => c !== "*")
      .sort();
    hintChars.forEach((char) => {
      expect(
        chars.find((c) => c.toLowerCase() === char.toLowerCase())
      ).not.toBeFalsy();
    });
  });

  it("should have the same amount of chars as one of the two words", () => {
    const word = "word";
    const hint = getHintFromWord(word);
    expect(hint.length).toBe(word.length);
  });

  it("uses a sensible default value for amountOfHintChars", () => {
    checkAmountOfHintChars("i", 0);
    checkAmountOfHintChars("my", 0);
    checkAmountOfHintChars("the", 1);
    checkAmountOfHintChars("word", 1);
    checkAmountOfHintChars("lists", 1);
    checkAmountOfHintChars("having", 2);
    checkAmountOfHintChars("verylongword", 4);

    function checkAmountOfHintChars(word: string, expectedAmount: number) {
      const hintChars = getHintFromWord(word).split("");
      const amountOfHintChars = hintChars.filter((w) => w !== "*").length;
      expect(amountOfHintChars).toBe(expectedAmount);
    }
  });

  it("distributes the dots throughout the word", () => {
    const word = "thisisalongerword";
    const maxChars = Math.floor(word.length / 3);
    for (let i = 0; i < 100; i++) {
      const hintChars = getHintFromWord(word, maxChars).split("");
      const amountOfHintChars = hintChars.filter((w) => w !== "*").length;
      const amountOfHiddenChars = hintChars.filter((w) => w === "*").length;
      expect(amountOfHintChars).toBe(maxChars);
      expect(amountOfHiddenChars).toBe(word.length - maxChars);
    }
  });

  it("generates random hints", () => {
    const word = "thisisalongerword";
    const maxChars = Math.floor(word.length / 3);
    let lastRun = getHintFromWord(word, maxChars);
    let result: string = "";
    for (let i = 0; i < 100; i++) {
      result = getHintFromWord(word, maxChars);
      if (lastRun !== result) {
        return;
      }
      lastRun = result;
    }
    expect(result).not.toEqual(lastRun);
  });
});
