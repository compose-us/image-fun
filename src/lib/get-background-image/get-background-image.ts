import getUnsplashImage from "../get-unsplash-image";

const getBackgroundImage = ([height, width]: number[]) => {
  return getUnsplashImage({
    width: width,
    height: height,
    keyword: "background",
  });
};

export default getBackgroundImage;
