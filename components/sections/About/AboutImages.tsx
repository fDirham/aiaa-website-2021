import React, { useEffect, useState } from "react";
import styles from "./AboutImages.module.scss";
import { imgData } from "utilities/types";

export default function AboutImages() {
  const [imgList, setImgList] = useState<imgData[]>([]);
  useEffect(() => {
    setImgList([
      { alt: "jpl-sign", src: "images/jpl_tour_1.jpeg" },
      { alt: "jpl-center", src: "images/jpl_tour_2.jpg" },
    ]);
  }, []);

  return (
    <div className={styles.container}>
      {imgList.length &&
        imgList.map((imgData) => {
          return (
            <div key={imgData.alt} className={`${styles.imgContainer}`}>
              <img className={`${styles.img}`} src={imgData.src} />
            </div>
          );
        })}
    </div>
  );
}
