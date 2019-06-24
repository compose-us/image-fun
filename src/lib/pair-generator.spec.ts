import pairGenerator from "./pair-generator";

describe("pair-generator", () => {
  it("does not raise an exception when called", () => {
    expect(pairGenerator).not.toThrow();
  });

  it("returns a pair of non-empty strings", () => {
    const result = pairGenerator();
    expect(result[0]).not.toBe("");
    expect(result[1]).not.toBe("");
  });

  it("should select different elements when called often enough", () => {
    const firstResult = pairGenerator();
    for (let i = 0; i < 100; i++) {
      const result = pairGenerator();
      if (result[0] !== firstResult[0] || result[1] !== firstResult[1]) return;
    }
    // if it did not find another value within 100 tries, this will probably
    // fail as well...
    expect(pairGenerator()).not.toEqual(firstResult);
  });
});
