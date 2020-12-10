import { default as fallbackGetWindowSize } from "../../service/get-window-size";
import { default as fallbackGetUnsplashImage } from "../get-unsplash-image";

const retrieveImages = (
  compoundWord: [string, string],
  getWindowSize = fallbackGetWindowSize,
  getUnsplashImage = fallbackGetUnsplashImage
) => {
  const [height, width] = getWindowSize();

  const sizeX = width > 600 ? Math.ceil(width / 2) : width;
  const sizeY = Math.ceil(height / 2);

  return compoundWord.map((keyword) =>
    getUnsplashImage({
      height: sizeY,
      keyword: keyword,
      width: sizeX,
    })
  );
};

export default retrieveImages;
