import getUnsplashImage from ".";

describe("get-unsplash-image", () => {
  it("generates an url string", () => {
    expect(
      getUnsplashImage({ height: 1, width: 1, keyword: "test" }).url
    ).not.toEqual("");
  });

  it("does not change the input fields", () => {
    const height = Math.floor(Math.random() * 1000);
    const keyword = "test";
    const width = Math.floor(Math.random() * 1000);
    const result = getUnsplashImage({ height, width, keyword });
    expect(result.height).toBe(height);
    expect(result.keyword).toBe(keyword);
    expect(result.width).toBe(width);
  });

  it("uses uuid", () => {
    const uuidRe = /[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/;
    const url = getUnsplashImage({ height: 123, width: 456, keyword: "test" })
      .url;
    const expected = "https://source.unsplash.com/random/456x123?test";

    expect(url.indexOf(expected)).toBe(0);
    expect(uuidRe.test(url)).toBe(true);
  });
});
