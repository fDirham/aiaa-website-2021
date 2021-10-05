import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import logoImg from "public/aiaa-logo.png";
import igImg from "public/ig-logo.png";
import discordImg from "public/discord-logo.png";
import Stars from "./Stars";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.containerText}>
          <div className={styles.containerLogo}>
            <Image
              src={logoImg}
              layout={"fill"}
              objectFit={"scale-down"}
              objectPosition={"left top"}
            />
          </div>
          <div className={styles.textTitle}>
            American Institute of Aeronautics and Astronautics @ UCSD
          </div>
          <p className={styles.textDescription}>
            The premier networking and social club for aerospace enthusiasts
          </p>
          <div className={styles.containerLinks}>
            <div className={styles.containerNetworks}>
              <div className={styles.containerSocial}>
                <div className={styles.containerSocialLogo}>
                  <Image
                    src={igImg}
                    layout={"fill"}
                    objectFit={"scale-down"}
                    objectPosition={"50% 50%"}
                  />
                </div>
                <a className={styles.textSocialLink} href="google.com">
                  @aiaa.ucsd
                </a>
              </div>
              <div className={styles.containerSocial}>
                <div className={styles.containerSocialLogo}>
                  <Image
                    src={discordImg}
                    layout={"fill"}
                    objectFit={"scale-down"}
                    objectPosition={"50% 50%"}
                  />
                </div>
                <a className={styles.textSocialLink} href="google.com">
                  discord
                </a>
              </div>
            </div>
            <a className={styles.textSocialLink} href="google.com">
              Subscribe to our newsletter to keep up to date!
            </a>
          </div>
        </div>
        <div className={styles.containerAnim}></div>
      </div>
      <Stars />
    </div>
  );
}
