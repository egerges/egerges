"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        <a href="/">
          <Image src="/Logo.svg" alt="Logo" width={50} height={50} />
        </a>
      </div>
      <nav className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#portfolio">1. Portfolio</a>
          </li>
          <li>
            <a href="#experience">2. Experience</a>
          </li>
          <li>
            <a href="/blog">3. Blog</a>
          </li>
          <li>
            <a href="#contact">4. Let's Connect</a>
          </li>
        </ul>
      </nav>
      <div className={styles.menuButton} onClick={toggleMenu}>
        <div className={styles.menuIcon}></div>
        <div className={styles.menuIcon}></div>
        <div className={styles.menuIcon}></div>
      </div>
    </header>
  );
};

export default NavBar;
