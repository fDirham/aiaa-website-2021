import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { navItem } from "utilities/types";
import styles from "./NavBar.module.scss";
import Image from "next/image";
import logoImg from "public/short-aiaa-logo.png";

const navList: navItem[] = [
  {
    label: "Home",
    id: "hero",
  },
  {
    label: "Events",
    id: "events",
  },
  {
    label: "About",
    id: "about",
  },
  {
    label: "Officers",
    id: "officers",
  },
];

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.imgContainerLogo}>
          <Image
            src={logoImg}
            layout={"fill"}
            objectFit={"scale-down"}
            objectPosition={"center center"}
          />
        </div>
        <ul>
          {navList.length &&
            navList.map((item) => {
              return (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
