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
});
