import React from "react";
import styles from "./Officers.module.scss";
import OfficersList from "./OfficersList";

export default function Officers() {
  return (
    <div className={styles.container} id="officers">
      <div className={styles.containerContent}>
        <h2>Officers</h2>
        <OfficersList />
      </div>
    </div>
  );
}
