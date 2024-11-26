import React from "react";
import styles from "./Footer.module.css";
import { motion } from "motion/react";
import { easeInOut } from "motion";
import { filter } from "motion/react-client";

const footerAnimate = {
  hidden: {
    y: 200,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.75,
      type: "spring",
    },
  },
};

const socialsAnimate = {
  none: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.75, once: true }}
    >
      <div className="container">
        <motion.div variants={footerAnimate} className={styles.wrapper}>
          <a href="#">
            <img src="camp.svg" alt="" className={styles.logo} />
          </a>
          <div className={styles.column}>
            <h2 className={styles.columnHead}>Contact us</h2>
            <ul className={styles.list}>
              <li>
                <a href="tel:">+7(0000)00-00-00</a>
              </li>
              <li>
                <a href="mailto:">example@example.com</a>
              </li>
              <div className={styles.socialsRow}>
                <motion.a
                  href="#"
                  initial="none"
                  whileHover="hover"
                  whileTap="tap"
                  variants={socialsAnimate}
                >
                  <img src="tg.svg" alt="" className={styles.social} />
                </motion.a>
                <motion.a
                  href="#"
                  initial="none"
                  whileHover="hover"
                  whileTap="tap"
                  variants={socialsAnimate}
                >
                  <img src="inst.svg" alt="" className={styles.social} />
                </motion.a>
                <motion.a
                  href="#"
                  initial="none"
                  whileHover="hover"
                  whileTap="tap"
                  variants={socialsAnimate}
                >
                  <img src="facebook.svg" alt="" className={styles.social} />
                </motion.a>
                <motion.a
                  href="#"
                  initial="none"
                  whileHover="hover"
                  whileTap="tap"
                  variants={socialsAnimate}
                >
                  <img src="pint.svg" alt="" className={styles.social} />
                </motion.a>
              </div>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
