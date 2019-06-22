import React from "react";
import getUnsplashImage from "../service/get-unsplash-image";
import useWindowSize from "../hook/use-window-size";
import Image from "./Image";
// import { useDrop } from "react-dnd";

interface FullscreenGridProps {
  words: string[];
}

const FullscreenGrid: React.FC<FullscreenGridProps> = ({ words }) => {
  const [height, width] = useWindowSize();
  // const drops = useDrop();

  const images = [];
  for (let i = 0; i < 6 * 6; i++) {
    const sizeX = Math.ceil(width / 6);
    const sizeY = Math.ceil(height / 6);
    const image = getUnsplashImage({
      height: sizeY,
      keyword: words[Math.floor(Math.random() * words.length)],
      width: sizeX
    });
    images.push(image);
  }

  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "repeat(6, 1fr)",
        overflow: "hidden",
        width: "100%",
        height: "100%"
      }}
    >
      {images.map((image, index) => (
        <Image
          key={image.url}
          x={index % 6}
          y={Math.floor(index / 6)}
          src={image.url}
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  );
};

export default FullscreenGrid;
