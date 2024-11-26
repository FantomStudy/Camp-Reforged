import React, { useEffect } from "react";
import styles from "./HeroSection.module.css";
import { useMotionValue, useTransform, motion, animate } from "motion/react";

const animationVar = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, delay: custom * 0.25 },
  }),
  exit: {
    opacity: 1,
    y: -100,
  },
};

export default function HeroSection() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 24, { duration: 2.4 });
    return () => animation.stop();
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true }}
      className={styles.section}
    >
      <div className={styles.textblock}>
        <motion.h1 variants={animationVar} custom={1}>
          SUMMER <br />
          <span style={{ fontWeight: 400 }}>
            CAMP’
            <motion.span style={{ color: "#f55535" }}>{rounded}</motion.span>
          </span>
        </motion.h1>
        <motion.p variants={animationVar} custom={2}>
          Don’t miss your chance for unforgettable adventures!
        </motion.p>
        <motion.button
          variants={animationVar}
          custom={3}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.button}
        >
          Join us!
        </motion.button>
      </div>
      <motion.img
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        src="camp.svg"
        alt=""
        className={styles.hero}
      />
      <motion.img
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        src="mask.svg"
        alt=""
        className={styles.mask}
      />
    </motion.section>
  );
}
