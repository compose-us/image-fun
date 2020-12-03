import React from "react";
import styles from "./splash.module.css";
import Button from "../button/button";
import logo from "../../images/logo.png";
import getUnsplashImage from "../../lib/get-unsplash-image";

const Splash = () => {
  const backgroundImage = getUnsplashImage({
    width: 980,
    height: 1020,
    keyword: "background",
  });
  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `url("${backgroundImage.url}")`,
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
          <Button to="/guide" label={"How to Play"} />
        </div>
      </div>
      <footer>developed by compose.us</footer>
    </div>
  );
};

export default Splash;
