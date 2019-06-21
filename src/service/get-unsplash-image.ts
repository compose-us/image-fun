import uuid from "uuid";

const getUnsplashImage = ({ height, keyword, width }: { height: number; keyword: string; width: number }) => {
  return {
    height,
    keyword,
    url: `https://source.unsplash.com/random/${width}x${height}?${keyword},${uuid.v4()}`,
    width
  };
};

export default getUnsplashImage;
