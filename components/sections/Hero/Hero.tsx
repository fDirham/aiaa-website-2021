import React from "react";
import styles from "./Hero.module.scss";
import Stars from "./Stars";
import HeroText from "./HeroText";
import HeroAnim from "./HeroAnim";

export default function Hero() {
  return (
    <div className={styles.container} id="hero">
      <div className={styles.containerContent}>
        <HeroText />
        <HeroAnim />
      </div>
      <Stars />
    </div>
  );
}
