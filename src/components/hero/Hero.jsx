import React from "react";

import styles from "./Hero.module.css";

import HeroImg from "../../../assets/hero/boy.png";
const Hero = () => {
  return (

    
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aman</h1>
        <p className={styles.description}>
          I'm a full-stack developer using React and NodeJS. Reach out if you'd
          like to learn more!
        </p>
        <a
          href="/Aman_Mahish_Resume.pdf"
          download="Aman_Mahish_Resume.pdf"
          className={styles.contactBtn}
        >
          Dowload CV
        </a>
      </div>
      <img src={HeroImg} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;
