import React, { useState } from "react";
import { officerData } from "utilities/types";
import styles from "./OfficersBlock.module.scss";
import Image from "next/image";

type OfficersBlockProps = {
  officerData: officerData;
};
export default function OfficersBlock({ officerData }: OfficersBlockProps) {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.imgContainer}>
          <Image
            src={officerData.imgSrc}
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"left top"}
            placeholder="blur"
          />
        </div>
        <p className={styles.textPosition}>{officerData.position}</p>
        <p className={styles.textName}>{officerData.name}</p>
        <p className={styles.textPronouns}>{officerData.pronouns}</p>
        <a className={styles.textEmail} href={`mailto:${officerData.email}`}>
          {officerData.email}
        </a>
      </div>
    </div>
  );
}
