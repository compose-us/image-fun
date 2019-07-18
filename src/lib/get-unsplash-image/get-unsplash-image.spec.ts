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
    expect(
      getUnsplashImage({ height: 123, width: 456, keyword: "test" }).url
    ).toEqual(
      "https://source.unsplash.com/random/456x123?test,affeaffe-affe-affe-affe-affeaffeaffe"
    );
  });
});
