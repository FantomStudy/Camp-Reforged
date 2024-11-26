import React from "react";
import styles from "./Header.module.css";
import { motion } from "motion/react";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={"container"}>
        <div className={styles.wrapper}>
          <h2 className={styles.logo}>
            CAMP<span className="primary-text">/</span>
          </h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#">Hello</a>
            </li>
            <li className={styles.item}>
              <a href="#">About</a>
            </li>
            <li className={styles.item}>
              <a href="#">News</a>
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f55535" }}
            whileTap={{ scale: 0.95 }}
            className={styles.button}
          >
            Join us
          </motion.button>
        </div>
      </div>
    </header>
  );
}
