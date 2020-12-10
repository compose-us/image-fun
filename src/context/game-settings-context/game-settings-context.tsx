import React from "react";
import getUnsplashImage from "../../lib/get-unsplash-image";

/** Context **/
interface GameSettingsContextProps {
  backgroundImage: string;
}

const defaultValues: GameSettingsContextProps = {
  backgroundImage: "background-image.png",
};

const GameSettingsContext = React.createContext<GameSettingsContextProps>(
  defaultValues
);

/** Provider **/
interface GameSettingsProviderProps {
  children: React.ReactNode;
  defaultValues?: GameSettingsContextProps;
}

export const GameSettingsProvider: React.FC<GameSettingsProviderProps> = ({
  children,
}) => {
  const [state, setState] = React.useState<GameSettingsContextProps>({
    backgroundImage: defaultValues.backgroundImage,
  });

  React.useEffect(() => {
    const backgroundImage = getUnsplashImage({
      width: window.innerWidth,
      height: window.innerHeight,
      keyword: "background",
    });
    setState({ backgroundImage: backgroundImage.url });
  }, []);

  return (
    <GameSettingsContext.Provider value={state}>
      {children}
    </GameSettingsContext.Provider>
  );
};

/** Hook **/
export const useGameSettings = () => {
  return React.useContext(GameSettingsContext);
};
