import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { navItem } from "utilities/types";
import styles from "./NavBar.module.scss";

const navList: navItem[] = [
  {
    label: "Main",
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
  const router = useRouter();
  useEffect(() => {
    console.log(router);
  }, [router]);
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
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
