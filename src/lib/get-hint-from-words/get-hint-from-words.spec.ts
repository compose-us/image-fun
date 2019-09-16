import getHintFromWords from "./get-hint-from-words";

describe("getHintFromWords", () => {
  it("should have the same amount of chars as one of the two words", () => {
    const first = "first";
    const second = "second";
    const hint = getHintFromWords(first, second);
    expect(hint.length === first.length || hint.length === second.length).toBe(
      true
    );
  });

  it("should select one of the two words as hint", () => {
    const first = "first";
    const second = "second";
    const firstResult = getHintFromWords(first, second);
    for (let i = 0; i < 100; i++) {
      const secondResult = getHintFromWords(first, second);
      if (firstResult.length !== secondResult.length) return;
    }
    // if it did not find another value within 100 tries, this will probably
    // fail as well...
    expect(getHintFromWords(first, second).length).not.toEqual(
      firstResult.length
    );
  });
});
