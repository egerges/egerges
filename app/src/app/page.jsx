"use client";

import React from "react";
import NavBar from "./components/NavBar";
import Terminal from "./components/Terminal";
import Finder from "./components/Finder";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import styles from "./styles/Home.module.css";
import Carousel from "./components/Carousel";

const Home = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.terminalContainer}>
        <Terminal />
      </div>
      <div className={styles.profile}>
        <AboutMe />
      </div>
      <div className={styles.profile}>
        <Finder />
      </div>
      <div className={styles.skills}>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
