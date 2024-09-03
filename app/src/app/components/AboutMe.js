import React from "react";
import Image from "next/image";
import styles from "../styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.container}>
        <div className={styles.profileImage}>
          <Image src="/Elio.svg" alt="Elio Gerges" width={400} height={400} />
        </div>
        <div className={styles.textContent}>
          <p className={styles.terminalCommand}>
            <span className={styles.email}>developer@eliogerges.com</span>{" "}
            Application %: whoami --verbose
          </p>
          <p className={styles.aboutText}>
            I am a Software Engineer with expertise in JavaScript (ES6+), React,
            TypeScript, Node.js, Go, and other modern technologies. My passion
            lies in developing scalable, maintainable software solutions, with a
            strong emphasis on performance optimization and responsive design. I
            have a proven track record of delivering high-quality applications,
            both in frontend and backend development.
          </p>
          <a href="#learn-more" className={styles.learnMore}>
            Learn more..
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
