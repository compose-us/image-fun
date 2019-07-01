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
});
