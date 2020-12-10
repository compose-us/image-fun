import React from "react";
import styles from "./how-to-play.module.css";
import logo from "../../images/logo.png";
import Button from "../button/button";
import Footer from "../layout/partial/footer/footer";
import { useGameSettings } from "../../context/game-settings-context/game-settings-context";

interface HowToPlayProps {}

const HowToPlay: React.FC<HowToPlayProps> = () => {
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
      <div className={styles.brand}>
        {/* Disable warning as the game is called "Image Fun" */}
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={logo} alt="Image Fun" width="100%" />
      </div>
      <article>
        <h1>How To Play</h1>
        <p>Find out how well you know your open compound words.</p>
        <section>
          <h2>Objective:</h2>
          <p>
            Start by looking at the two images provided and try to figure out
            which compound word the two images refer to.
          </p>
        </section>
        <section>
          <h2>Game Play</h2>
          <p>
            When you think you know what the compound word is, click on the
            "Solve" button and enter your answer.
          </p>
          <p>
            If you're having trouble figuring it out, click on the "Hint" button
            to see few random letters to help you solve it.
          </p>
        </section>
      </article>
      <Button to={"/"} label="Back" />
      <Footer />
    </div>
  );
};

export default HowToPlay;
