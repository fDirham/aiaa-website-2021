import React, { useEffect, useState } from "react";
import styles from "./EventsImages.module.scss";
import Image from "next/image";
import imgLaunch from "public/images/launch_1.jpeg";
import imgJplFactory from "public/images/jpl_tour_3.jpeg";
import imgRobotThing from "public/images/jpl_tour_4.jpeg";
import { imgData } from "utilities/types";

export default function EventsImages() {
  const [imgList, setImgList] = useState<imgData[]>([]);
  useEffect(() => {
    setImgList([
      { alt: "jpl", src: imgJplFactory },
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
