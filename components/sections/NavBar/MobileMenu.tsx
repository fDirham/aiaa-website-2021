import React, { useState } from "react";
import { navItem } from "utilities/types";
import styles from "./MobileMenu.module.scss";

type MobileMenuProps = {
  navList: navItem[];
};

export default function MobileMenu(props: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.textHamburger} onClick={() => setOpen(!open)}>
        🚀
      </div>
      {!!open && (
        <div className={styles.list}>
          <ul>
            {props.navList.length &&
              props.navList.map((item) => {
                return (
                  <li key={item.id}>
                    <a onClick={() => setOpen(false)} href={`#${item.id}`}>
                      {item.label}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}
