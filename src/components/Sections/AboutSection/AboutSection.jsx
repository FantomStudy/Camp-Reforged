import React from "react";
import styles from "./AboutSection.module.css";
import { motion } from "motion/react";

const animationVar = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, delay: custom * 0.25 },
  }),
};
const animationGrid = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default function AboutSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.25, once: true }}
      className={styles.section}
    >
      <motion.h2 variants={animationVar} custom={1} className={styles.head}>
        <span className={`${styles.big} primary-text`}>MORE</span> than just a
        Summer Camp!
      </motion.h2>
      <motion.p variants={animationVar} custom={2} className={styles.descript}>
        A safe and enriching environment for youth to discover their passions,
        build lifelong friendships, and develop essential life skills.
      </motion.p>
      <motion.img
        variants={animationVar}
        custom={3}
        src="camera.svg"
        alt=""
        className={styles.camImg}
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className={styles.grid}
      >
        <motion.img
          variants={animationGrid}
          custom={1}
          className={`${styles.galleryItem} ${styles.first}`}
          src="https://i8.photo.2gis.com/images/branch/0/30258560047096848_dff9.jpg"
          alt=""
        />
        <motion.img
          variants={animationGrid}
          custom={2}
          className={`${styles.galleryItem} ${styles.second}`}
          src="https://cdnstatic.rg.ru/uploads/images/2023/06/20/117p_new_verh_deti_4d8_77f.jpg"
          alt=""
        />
        <motion.img
          variants={animationGrid}
          custom={3}
          className={`${styles.galleryItem} ${styles.third}`}
          src="https://p1.zoon.ru/preview/1L9u7g2GJsqPOLYGtd71bw/2400x1500x85/1/9/0/original_5d355f739b0dc632667ac12c_64ca0db96ef252.79912748.jpg"
          alt=""
        />
        <motion.img
          variants={animationGrid}
          custom={4}
          className={`${styles.galleryItem} ${styles.fourth}`}
          src="https://gosekspertiza.tatarstan.ru/file/news/4363_n1981726_big.jpg"
          alt=""
        />
      </motion.div>
    </motion.section>
  );
}
