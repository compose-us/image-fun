import React from "react";
import getBackgroundImage from "../../lib/get-background-image/get-background-image";

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
    const backgroundImage = getBackgroundImage([
      window.innerHeight,
      window.innerWidth,
    ]);
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
