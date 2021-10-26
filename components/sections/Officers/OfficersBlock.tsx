import React, { useState } from "react";
import { officerData } from "utilities/types";
import styles from "./OfficersBlock.module.scss";

type OfficersBlockProps = {
  officerData: officerData;
};
export default function OfficersBlock({ officerData }: OfficersBlockProps) {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <img src={officerData.imgSrc} className={styles.imgContainer} />
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
