import React, { useEffect, useRef, useState } from "react";
import styles from "./HeroAnim.module.scss";
import imgEarth from "public/earth.png";
import imgRocket from "public/rocket.png";
import imgPlane from "public/plane.png";

const meteorSize = 40;
const meteorDistance = 110;
export default function HeroAnim() {
  const earthRef = useRef<HTMLImageElement>(null);
  const [center, setCenter] = useState<{ x: number; y: number }>();

  useEffect(() => {
    function handleScreenChange() {
      resetCenter();
    }
    window.addEventListener("resize", handleScreenChange);
    window.addEventListener("scroll", handleScreenChange);

    resetCenter();

    return () => {
      window.removeEventListener("resize", handleScreenChange);
      window.removeEventListener("scroll", handleScreenChange);
    };
  }, [earthRef]);

  function resetCenter() {
    if (!earthRef.current) return;
    const { x, y, width, height } = earthRef.current.getBoundingClientRect();
    const centerX = x + window.scrollX + width / 2;
    const centerY = y + window.scrollY + height / 2;
    if (center && center.x === centerX && center.y === centerY) return;
    setCenter({ x: centerX, y: centerY });
  }

  return (
    <div className={styles.container}>
      {center && (
        <div
          className={`${styles.meteor} ${styles.rocket}`}
          style={{
            height: `${meteorSize}px`,
            width: `${meteorSize}px`,
            left: `${center.x - meteorSize / 2}px`,
            top: `${center.y - (meteorDistance + meteorSize * 2)}px`,
            transformOrigin: `center ${meteorDistance + meteorSize * 2}px`,
          }}
        >
          <img src={"rocket.png"} className={styles.imgContainer} />
        </div>
      )}
      {center && (
        <div
          className={`${styles.meteor} ${styles.plane}`}
          style={{
            left: `${center.x - meteorSize / 2}px`,
            top: `${center.y - (meteorDistance + meteorSize)}px`,
            transformOrigin: `center ${meteorDistance + meteorSize}px`,
          }}
        >
          <img src={"plane.png"} className={styles.imgContainer} />
        </div>
      )}
      <img
        src={"earth.png"}
        className={styles.imgContainerEarth}
        ref={earthRef}
      />
    </div>
  );
}
