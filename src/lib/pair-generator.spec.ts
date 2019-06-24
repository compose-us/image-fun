import pairResolver from "./pair-resolver";

describe("pair-resolver", () => {
  it("does not raise an exception when called", () => {
    expect(pairResolver).not.toThrow();
  });

  it("returns a pair of non-empty strings", () => {
    const result = pairResolver();
    expect(result[0]).not.toBe("");
    expect(result[1]).not.toBe("");
  });
});
