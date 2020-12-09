import getUnsplashImage from "../get-unsplash-image";

const retrieveImages = (compoundWord: [string, string]) => {
  const height = window.innerHeight;
  const width = window.innerWidth;

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
