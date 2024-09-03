"use client";

import React from "react";
import NavBar from "./components/NavBar";
import Terminal from "./components/Terminal";
import Waves from "./components/Waves";
import AboutMe from "./components/AboutMe";
import SkillsShowcase from "./components/SkillsShowcase";
import ContactForm from "./components/ContactForm";
import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.terminalContainer}>
        <Terminal />
      </div>
      <div className={styles.profile}>
        <AboutMe />
      </div>
      <div className={styles.skills}>
        <SkillsShowcase />
      </div>
      <div className={styles.contact}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
