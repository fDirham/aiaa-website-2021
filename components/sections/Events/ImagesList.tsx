import React, { useEffect, useState } from "react";
import styles from "./ImagesList.module.scss";
import Image from "next/image";
import imgLaunch from "public/images/launch_1.jpeg";
import imgJplSign from "public/images/jpl_tour_1.jpeg";
import imgRobotThing from "public/images/jpl_tour_4.jpeg";

type imgData = {
  src: any;
  alt: string;
};
export default function ImagesList() {
  const [imgList, setImgList] = useState<imgData[]>([]);
  useEffect(() => {
    setImgList([
      { alt: "jpl", src: imgJplSign },
      { alt: "robot", src: imgRobotThing },
      { alt: "launch", src: imgLaunch },
    ]);
  }, []);

  return (
    <div className={styles.container}>
      {imgList.length &&
        imgList.map((imgData) => {
          return (
            <div key={imgData.alt} className={`${styles.imgContainer}`}>
              <Image
                src={imgData.src}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"left top"}
              />
            </div>
          );
        })}
    </div>
  );
}
