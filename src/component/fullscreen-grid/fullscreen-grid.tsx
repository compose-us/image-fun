import React, { useMemo } from "react";
import generateList from "../../lib/generate-list/generate-list";
import getUnsplashImage from "../../lib/get-unsplash-image/get-unsplash-image";
import useWindowSize from "../../hook/use-window-size";
import Image from "../image";

import style from "./fullscreen-grid.module.css";

interface FullscreenGridProps {
  onClick: () => void;
  solving: boolean;
  words: string[];
}

const FullscreenGrid: React.FC<FullscreenGridProps> = ({
  onClick,
  solving = false,
  words,
}) => {
  const [height, width] = useWindowSize();
  const sizeX = Math.ceil(width / 6);
  const sizeY = Math.ceil(height / 6);

  const images = useMemo(() => {
    const keywordList = generateList(words, 6 * 6);
    return keywordList.map((keyword) =>
      getUnsplashImage({
        height: sizeY,
        keyword: keyword,
        width: sizeX,
      })
    );
  }, [sizeX, sizeY, words]);

  return (
    <div
      className={`${style.root} ${solving ? style.solving : style.general}`}
      onClick={onClick}
      style={{
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "repeat(6, 1fr)",
        overflow: "hidden",
        position: "absolute",
        width: "100%",
        height: "100%",
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
