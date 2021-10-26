import React, { useState } from "react";
import styles from "./HeroText.module.scss";

export default function HeroText() {
  const [contactText, setContactText] = useState<string>();
  return (
    <div className={styles.container}>
      <img src={"aiaa-logo.png"} className={styles.imgContainerLogo} />
      <h1 className={styles.textTitle}>
        American Institute of Aeronautics and Astronautics @ UCSD
      </h1>
      <p className={styles.textDescription}>
        The premier networking and social club for aerospace enthusiasts
      </p>
      <div className={styles.containerLinks}>
        <div className={styles.containerNetworks}>
          <div className={styles.containerSocial}>
            <img
              src={"ig-logo.png"}
              className={styles.imgContainerSocialLogo}
            />
            <a
              className={styles.textSocialLink}
              href="https://www.instagram.com/ucsdaiaa/"
              target="blank"
            >
              @aiaa.ucsd
            </a>
          </div>
          <div className={styles.containerSocial}>
            <img
              src={"discord-logo.png"}
              className={styles.imgContainerSocialLogo}
            />
            <a
              className={styles.textSocialLink}
              href="https://discord.gg/jpHmEWz"
              target="blank"
            >
              discord
            </a>
          </div>
        </div>
        <a
          className={styles.textSocialLink}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdxOkgPKbxlbyzd67oFrUZQKSFn6Y4dUycmmHv52hCLexv6sA/viewform"
          target="blank"
        >
          Subscribe to our newsletter to keep up to date!
        </a>
        <a
          className={styles.textContact}
          href="mailto:aiaaucsd@ucsd.edu"
          target="blank"
          onMouseEnter={() => setContactText("aiaaucsd@ucsd.edu")}
          onMouseLeave={() => setContactText(undefined)}
        >
          {contactText || "Contact Us"}
        </a>
      </div>
    </div>
  );
}
