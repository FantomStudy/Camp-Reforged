import React, { forwardRef } from "react";
import styles from "./InfoWrapper.module.css";
import { motion } from "motion/react";

export const InfoWrapperItem = forwardRef(({ count, desc }, ref) => {
  return (
    <div ref={ref} className={styles.item}>
      <h1 className={styles.count}>{count}</h1>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
});

export const MInfoWrapperItem = motion.create(InfoWrapperItem);
