import React, { useMemo } from "react";
import { useGameState } from "../../context/game-state-context";
import HintWindow from "../hint-window/hint-window";
import ResetWindow from "../reset-window/reset-window";
import SolutionWindow from "../solution-window/solution-window";
import useWindowSize from "../../hook/use-window-size";
import getUnsplashImage from "../../lib/get-unsplash-image";
import Image from "../image/image";

const Game: React.FC = () => {
  const { compoundWord } = useGameState();

  const [height, width] = useWindowSize();
  const sizeX = Math.ceil(width / 2);
  const sizeY = Math.ceil(height / 2);
  const images = useMemo(() => {
    return compoundWord.map((keyword) =>
      getUnsplashImage({
        height: sizeY,
        keyword: keyword,
        width: sizeX,
      })
    );
  }, [sizeX, sizeY, compoundWord]);

  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <SolutionWindow />
          <HintWindow />
        </div>
        <ResetWindow />
      </div>
      <div style={{ display: "flex" }}>
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
    </React.Fragment>
  );
};

export default Game;
