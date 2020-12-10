import getHintFromWords from "./get-hint-from-words";

describe("getHintFromWords", () => {
  it("should have the same amount of chars as one of the two words", () => {
    const first = "first";
    const second = "second";
    const hint = getHintFromWords(first, second);
    expect(hint[0].length).toBe(first.length);
    expect(hint[1].length).toBe(second.length);
  });

  it("selects hints from both words", () => {
    const first = "first";
    const second = "second";
    const hints = getHintFromWords(first, second);
    expect(hints.length).toBe(2);
  });
});
