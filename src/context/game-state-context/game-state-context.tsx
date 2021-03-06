import React, { useCallback, useState } from "react";
import pairGenerator from "../../lib/pair-generator";

/** Context **/
type GameStateContextProps = {
  showHint: ActiveHint;
  showSolver: ActiveSolver;
  compoundWord: CompoundWord;
};

interface GameStateContextApi extends GameStateContextProps {
  toggleHint: () => void;
  toggleSolver: () => void;
  resetCompoundWord: () => void;
}

const defaultErrorMessage = `Error: Context not initialized ${Date.now()}`;

const defaultValues: GameStateContextApi = {
  showHint: false,
  showSolver: false,
  compoundWord: pairGenerator(),
  toggleHint: () => {
    throw Error(defaultErrorMessage);
  },
  toggleSolver: () => {
    throw Error(defaultErrorMessage);
  },
  resetCompoundWord: () => {
    throw Error(defaultErrorMessage);
  },
};

const GameStateContext = React.createContext<GameStateContextApi>(
  defaultValues
);

/** Provider **/
interface GameStateProviderProps {
  children: React.ReactNode;
  defaultValues?: GameStateContextApi;
}

export const GameStateProvider: React.FC<GameStateProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<GameStateContextProps>({
    showHint: defaultValues.showHint,
    showSolver: defaultValues.showSolver,
    compoundWord: defaultValues.compoundWord,
  });

  const toggleHint = useCallback(() => {
    setState((oldState) => ({
      ...oldState,
      showHint: !oldState.showHint,
    }));
  }, [setState]);

  const toggleSolver = useCallback(() => {
    setState((oldState) => ({
      ...oldState,
      showSolver: !oldState.showSolver,
    }));
  }, [setState]);

  const resetCompoundWord = useCallback(() => {
    const newCompoundWord = pairGenerator();
    setState((oldState) => ({
      ...oldState,
      compoundWord: newCompoundWord,
    }));
  }, [setState]);

  return (
    <GameStateContext.Provider
      value={{
        showHint: state.showHint,
        showSolver: state.showSolver,
        compoundWord: state.compoundWord,
        toggleHint,
        toggleSolver,
        resetCompoundWord,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

/** Hook **/
export const useGameState = () => {
  return React.useContext(GameStateContext);
};
