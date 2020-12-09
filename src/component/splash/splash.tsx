import React from "react";
import styles from "./splash.module.css";
import logo from "../../images/logo.png";
import Button from "../button/button";
import Footer from "../layout/partial/footer/footer";
import { useGameSettings } from "../../context/game-settings-context/game-settings-context";

interface SplashProps {}

const Splash: React.FC<SplashProps> = () => {
  const { backgroundImage } = useGameSettings();
  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <div className={styles.card}>
          <img src={logo} alt="Image Fun" />
        </div>
        <div className={styles.actions}>
          <Button to="/game" label={"Start Game"} />
          <Button to="/how-to-play" label={"How to Play"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Splash;
