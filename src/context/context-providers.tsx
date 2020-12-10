import React from "react";
import { GameSettingsProvider } from "./game-settings-context/game-settings-context";
import { GameStateProvider } from "./game-state-context/game-state-context";

interface ContextProvidersProps {
  children: React.ReactNode;
}

export const ContextProviders: React.FC<ContextProvidersProps> = ({
  children,
}) => (
  <React.Fragment>
    <GameSettingsProvider>
      <GameStateProvider>
        <>{children}</>
      </GameStateProvider>
    </GameSettingsProvider>
  </React.Fragment>
);
