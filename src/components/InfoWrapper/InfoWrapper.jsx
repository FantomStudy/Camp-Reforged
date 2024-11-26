import React from "react";
import styles from "./InfoWrapper.module.css";
import { MInfoWrapperItem } from "./InfoWrapperItem";
import { motion } from "motion/react";

const wrapAnimate = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.25 },
  }),
};

export default function InfoWrapper() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 1, once: true }}
      className={styles.wrapper}
    >
      <MInfoWrapperItem
        variants={wrapAnimate}
        custom={1}
        count={23}
        desc="Lorem ipsum dolor "
      />
      <MInfoWrapperItem
        variants={wrapAnimate}
        custom={2}
        count={8}
        desc="At quis suspendisse mauris."
      />
      <MInfoWrapperItem
        variants={wrapAnimate}
        custom={3}
        count={11}
        desc="Sit amet, consectetur adipiscing elit."
      />
    </motion.div>
  );
}
