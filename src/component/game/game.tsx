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
  // TODO: if the width is less than 600, the layout should wrap
  const sizeX = (width > 600) ? Math.ceil(width / 2): width;
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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <Image
            key={image.url}
            x={index % 2}
            y={Math.floor(index / 2)}
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
