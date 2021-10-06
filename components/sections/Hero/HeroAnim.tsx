import React, { useEffect, useRef, useState } from "react";
import styles from "./HeroAnim.module.scss";
import Image from "next/image";
import imgEarth from "public/earth.png";
import imgRocket from "public/rocket.png";
import imgPlane from "public/plane.png";

const meteorSize = 40;
const meteorDistance = 110;
export default function HeroAnim() {
  const earthRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState<{ x: number; y: number }>();

  useEffect(() => {
    function handleResize() {
      resetCenter();
    }
    window.addEventListener("resize", handleResize);

    resetCenter();
  }, [earthRef]);

  function resetCenter() {
    if (!earthRef.current) return;
    const { x, y, width, height } = earthRef.current.getBoundingClientRect();
    const centerX = x + width / 2;
    const centerY = y + height / 2;
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
          <Image
            src={imgRocket}
            layout={"fill"}
            objectFit={"scale-down"}
            objectPosition={"left top"}
          />
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
          <Image
            src={imgPlane}
            layout={"fill"}
            objectFit={"scale-down"}
            objectPosition={"left top"}
          />
        </div>
      )}
      <div className={styles.imgContainerEarth} ref={earthRef}>
        <Image
          src={imgEarth}
          layout={"fill"}
          objectFit={"scale-down"}
          objectPosition={"left top"}
        />
      </div>
    </div>
  );
}
