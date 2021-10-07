import React from "react";
import styles from "./About.module.scss";
import AboutImages from "./AboutImages";

export default function About() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.containerContent}>
        <h2>About</h2>
        <div className={styles.containerMain}>
          <div className={styles.containerImages}>
            <AboutImages />
          </div>
          <div className={styles.containerText}>
            <p>
              Our goal as a pre-professional student organization is to serve
              our members by providing an inclusive and supportive group that
              emphasizes mentorship, learning, and interconnectivity, and by
              preparing them for a future in aerospace.
            </p>
            <br />
            <p>
              We aim to connect students to a national network of industry and
              academic professionals, hiring managers, and high-profile members
              of the aerospace community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
