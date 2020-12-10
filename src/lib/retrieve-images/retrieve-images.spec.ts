import retrieveImages from "./retrieve-images";

type mock = () => [number, number];

const bigScreenMock: mock = () => [1080, 1920];
const mobileScreenMock: mock = () => [846, 412];
const unsplashImageMock: (props: {
  height: number;
  keyword: string;
  width: number;
}) => { width: number; keyword: string; url: string; height: number } = (
  props
) => {
  return {
    ...props,
    url: "http://compose.us/mock",
  };
};

describe("retrieve-images", () => {
  it("test big screen", () => {
    const actual = retrieveImages(
      ["first", "second"],
      bigScreenMock,
      unsplashImageMock
    );
    expect(actual).toEqual([
      {
        height: 540,
        width: 960,
        keyword: "first",
        url: "http://compose.us/mock",
      },
      {
        height: 540,
        width: 960,
        keyword: "second",
        url: "http://compose.us/mock",
      },
    ]);
  });

  it("test mobile screen", () => {
    const actual = retrieveImages(
      ["first", "second"],
      mobileScreenMock,
      unsplashImageMock
    );
    expect(actual).toEqual([
      {
        height: 423,
        width: 412,
        keyword: "first",
        url: "http://compose.us/mock",
      },
      {
        height: 423,
        width: 412,
        keyword: "second",
        url: "http://compose.us/mock",
      },
    ]);
  });
});
