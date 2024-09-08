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
            Hey, I’m Elio Gerges—full-stack dev with a love for building sleek,
            high-performance apps using Go, TypeScript, and Flutter. From
            crafting cross-platform experiences to optimizing cloud
            integrations, I keep it cutting-edge. Dive into my blog, check out
            my projects, and explore what I’m up to!
          </p>
          {/* <a href="#learn-more" className={styles.learnMore}>
            Learn more..
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
