import React, { useEffect, useState } from "react";
import styles from "./EventsImages.module.scss";
import { imgData } from "utilities/types";

export default function EventsImages() {
  const [imgList, setImgList] = useState<imgData[]>([]);
  useEffect(() => {
    setImgList([
      { alt: "jpl", src: "images/launch_1.jpeg" },
      { alt: "robot", src: "images/jpl_tour_3.jpeg" },
      { alt: "launch", src: "images/jpl_tour_4.jpeg" },
    ]);
  }, []);

  return (
    <div className={styles.container}>
      {imgList.length &&
        imgList.map((imgData) => {
          return (
            <div key={imgData.alt} className={`${styles.imgContainer}`}>
              <img src={imgData.src} className={`${styles.img}`} />
            </div>
          );
        })}
    </div>
  );
}
