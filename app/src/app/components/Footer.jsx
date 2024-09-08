"use client";

import React, { useState } from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo and description */}
        <div className={styles.aboutMe}>
          <a href="/" className={styles.logo}>
            <img src="/Logo.svg" alt="Logo" />
          </a>
          <p className={styles.description}>
            Crafted with code and creativity. Let’s build something amazing—hit
            me up when you're ready to innovate!
          </p>
        </div>

        {/* Website Links */}
        <div className={styles.siteLinks}>
          <h3>Website Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/experience">Experience</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className={styles.socialLinks}>
          <h3>Social Links</h3>
          <ul>
            <li>
              <a href="https://github.com/egerges" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/elio-gerges" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://medium.com/@elio.gerges2000" target="_blank">
                Medium
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Elio Gerges. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
