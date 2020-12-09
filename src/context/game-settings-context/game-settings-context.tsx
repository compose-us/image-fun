import React from "react";
import getBackgroundImage from "../../lib/get-background-image/get-background-image";

/** Context **/
interface GameSettingsContextProps {
  width: number;
  height: number;
  backgroundImage: string;
}

const defaultValues: GameSettingsContextProps = {
  width: window.innerWidth,
  height: window.innerHeight,
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
    width: defaultValues.width,
    height: defaultValues.height,
    backgroundImage: defaultValues.backgroundImage,
  });

  React.useEffect(() => {
    const backgroundImage = getBackgroundImage([state.height, state.width]);
    setState({
      ...state,
      backgroundImage: backgroundImage.url,
    });
  }, []);

  return (
    <GameSettingsContext.Provider
      value={{
        width: state.width,
        height: state.height,
        backgroundImage: state.backgroundImage,
      }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
};

/** Hook **/
export const useGameSettings = () => {
  return React.useContext(GameSettingsContext);
};
