"use client";

import React from "react";
import Terminal from "./components/Terminal";
import Finder from "./components/Finder";
import AboutMe from "./components/AboutMe";
import BlogCarousel from "./components/BlogCarousel";
import styles from "./styles/Home.module.css";
import Carousel from "./components/Carousel";

import blogData from "./data/blogs.json";

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
      <div className={styles.skills}>
        <BlogCarousel blogs={blogData} />
      </div>
    </div>
  );
};

export default Home;
