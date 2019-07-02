import generateList from "./generate-list";

describe("generate-list", () => {
  it("generates an empty list when num === 0", () => {
    expect(generateList(["hello", "world"], 0)).toEqual([]);
  });

  it("can generate a list with less than the elements", () => {
    const result = generateList(["hello", "world"], 1);
    expect(result.length).toEqual(1);
    expect(result[0] === "hello" || result[0] === "world").toBeTruthy();
  });

  it("generates a list with 'num' amount of elements", () => {
    let num = 6 * 6;
    expect(generateList(["hello", "world"], num).length).toEqual(num);
  });

  it("selects equally", () => {
    const result = generateList(["hello", "world"], 10);
    expect(result.filter(w => w === "hello").length).toBe(5);
    expect(result.filter(w => w === "world").length).toBe(5);
  });

  it("distributes evenly but still randomly", () => {
    const num = 7;
    const words = ["hello", "world", "stuff", "pow"];
    const result = generateList(words, num);
    for (let word of words) {
      expect(result.filter(w => w === word).length).toBeGreaterThanOrEqual(
        Math.floor(num / words.length)
      );
      expect(result.filter(w => w === word).length).toBeLessThanOrEqual(
        Math.ceil(num / words.length)
      );
    }
  });

  it("distributes evenly for different settings", () => {
    const num = 9;
    const words = ["hello", "world", "stuff", "pow"];
    const result = generateList(words, num);
    for (let word of words) {
      expect(result.filter(w => w === word).length).toBeGreaterThanOrEqual(
        Math.floor(num / words.length)
      );
      expect(result.filter(w => w === word).length).toBeLessThanOrEqual(
        Math.ceil(num / words.length)
      );
    }
  });
});
