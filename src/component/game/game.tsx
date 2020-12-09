import React, { useMemo } from "react";
import { useGameState } from "../../context/game-state-context/game-state-context";
import HintButton from "../hint-button/hint-button";
import SolutionButton from "../solution-button/solution-button";
import Image from "../image/image";
import retrieveImages from "../../lib/retrieve-images/retrieve-images";
import Button from "../button/button";

const Game: React.FC = () => {
  const { compoundWord } = useGameState();

  const images = useMemo(() => {
    return retrieveImages(compoundWord);
  }, [compoundWord]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            width={image.width * 0.8}
            height={image.height * 0.8}
          />
        ))}
      </div>
      <div>
        <SolutionButton />
        <HintButton />
      </div>
      <Button to={"/"} label={"Exit"} />
    </div>
  );
};

export default Game;
