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
        <a href="/" className={styles.logoLink}>
          <Image src="/Logo.svg" alt="Logo" width={50} height={50} />
          <h2>Elio Gerges</h2>
        </a>
      </div>
      <nav className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="/portfolio">
              <span className={styles.redText}>1. </span>Portfolio
            </a>
          </li>
          <li>
            <a href="/experience">
              <span className={styles.redText}>2. </span>Experience
            </a>
          </li>
          <li>
            <a href="/blog">
              <span className={styles.redText}>3. </span>Blog
            </a>
          </li>
          <li>
            <a href="/contact">
              <span className={styles.redText}>4. </span>Let's Connect
            </a>
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
