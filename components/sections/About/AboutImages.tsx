import React, { useEffect, useState } from "react";
import styles from "./AboutImages.module.scss";
import Image from "next/image";
import imgJplSign from "public/images/jpl_tour_1.jpeg";
import imgJplInside from "public/images/jpl_tour_2.jpg";
import { imgData } from "utilities/types";

export default function AboutImages() {
  const [imgList, setImgList] = useState<imgData[]>([]);
  useEffect(() => {
    setImgList([
      { alt: "jpl-sign", src: imgJplSign },
      { alt: "jpl-center", src: imgJplInside },
    ]);
  }, []);

  return (
    <div className={styles.container}>
      {imgList.length &&
        imgList.map((imgData) => {
          return (
            <div key={imgData.alt} className={`${styles.imgContainer}`}>
              <div className={`${styles.imgContainerWrapper}`}>
                <Image
                  src={imgData.src}
                  layout={"fill"}
                  objectFit={"cover"}
                  objectPosition={"left top"}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
