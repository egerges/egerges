"use client";

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Elio Gerges - All rights reserved.</p>
      <ul className={styles.socialLinks}>
        <li>
          <a href="#" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
}
