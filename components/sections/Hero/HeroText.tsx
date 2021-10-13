import React, { useEffect, useState } from "react";
import styles from "./HeroText.module.scss";
import Image from "next/image";
import logoImg from "public/aiaa-logo.png";
import igImg from "public/ig-logo.png";
import discordImg from "public/discord-logo.png";

export default function HeroText() {
  const [contactText, setContactText] = useState<string>();
  return (
    <div className={styles.container}>
      <div className={styles.imgContainerLogo}>
        <Image
          src={logoImg}
          layout={"fill"}
          objectFit={"scale-down"}
          objectPosition={"left top"}
          placeholder="blur"
        />
      </div>
      <h1 className={styles.textTitle}>
        American Institute of Aeronautics and Astronautics @ UCSD
      </h1>
      <p className={styles.textDescription}>
        The premier networking and social club for aerospace enthusiasts
      </p>
      <div className={styles.containerLinks}>
        <div className={styles.containerNetworks}>
          <div className={styles.containerSocial}>
            <div className={styles.imgContainerSocialLogo}>
              <Image
                src={igImg}
                layout={"fill"}
                objectFit={"scale-down"}
                objectPosition={"50% 50%"}
                placeholder="blur"
              />
            </div>
            <a
              className={styles.textSocialLink}
              href="https://www.instagram.com/ucsdaiaa/"
              target="blank"
            >
              @aiaa.ucsd
            </a>
          </div>
          <div className={styles.containerSocial}>
            <div className={styles.imgContainerSocialLogo}>
              <Image
                src={discordImg}
                layout={"fill"}
                objectFit={"scale-down"}
                objectPosition={"50% 50%"}
                placeholder="blur"
              />
            </div>
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
