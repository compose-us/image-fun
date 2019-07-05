import getUnsplashImage from "./get-unsplash-image";

describe("get-unsplash-image", () => {
  it("generates an url field", () => {
    expect(
      getUnsplashImage({ height: 1, width: 1, keyword: "test" }).url
    ).not.toEqual("");
  });
});
