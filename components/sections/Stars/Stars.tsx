import { useEffect, useRef, useState } from "react";
import styles from "./Stars.module.scss";

type thisProps = {
  className?: any;
};
const numStaticStars = 40;
const numDynamicStars = 30;
const supernovaResetMs = 6000; // Sync with css duration
export default function Stars({ className }: thisProps) {
  const [staticStars, setStaticStars] = useState<any[]>([]);
  const [superNovas, setSuperNovas] = useState<any[]>([]);
  const supernovaTimer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    resetStars();
    resetSupernovas();
    supernovaTimer.current = setInterval(() => {
      resetSupernovas();
    }, supernovaResetMs);

    return () => {
      if (supernovaTimer.current) clearInterval(supernovaTimer.current);
    };
  }, []);

  function randomStarPlacement() {
    const randomTop = Math.random() * 100 + "vh";
    const randomLeft = Math.random() * 100 + "vw";
    const randomSize = Math.random() * 10 + 1 + "px";
    const possibleColors = ["#edc1b4", "#ede7b4", "#b4cded", "white"];
    const randomColor =
      possibleColors[Math.floor(Math.random() * possibleColors.length)];
    const styleProp = {
      top: randomTop,
      left: randomLeft,
      height: randomSize,
      width: randomSize,
      backgroundColor: randomColor,
    };
    return styleProp;
  }
  function resetStars() {
    const toReturn = [];
    for (let i = 0; i < numStaticStars; i++) {
      let className = `${styles.star}`;

      const styleProp = randomStarPlacement();
      toReturn.push(
        <div className={className} style={styleProp} key={`star_${i}`}></div>
      );
    }
    setStaticStars(toReturn);
  }

  function resetSupernovas() {
    const toReturn = [];
    for (let i = 0; i < numDynamicStars; i++) {
      let className = `${styles.star}`;
      const styleProp = randomStarPlacement();

      const randomAnim = Math.random() * 3;
      if (randomAnim < 1) className += ` ${styles.starAnimated1}`;
      else if (randomAnim < 2) className += ` ${styles.starAnimated2}`;
      else className += ` ${styles.starAnimated3}`;

      toReturn.push(
        <div
          className={className}
          style={styleProp}
          key={`super_nova_${i}`}
        ></div>
      );
    }
    setSuperNovas(toReturn);
  }

  return (
    <div className={styles.stars + " " + className}>
      {staticStars}
      {superNovas}
    </div>
  );
}
