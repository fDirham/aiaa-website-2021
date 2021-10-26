import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { navItem } from "utilities/types";
import styles from "./NavBar.module.scss";
import useDeviceType from "hooks/useDeviceType";
import MobileMenu from "./MobileMenu";

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
  const device = useDeviceType();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(device === "mobile");
  }, [device]);

  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        {isMobile ? (
          <MobileMenu navList={navList} />
        ) : (
          <>
            <img
              src={"short-aiaa-logo.png"}
              className={styles.imgContainerLogo}
            />
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
          </>
        )}
      </div>
    </div>
  );
}
