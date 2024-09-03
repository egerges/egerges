"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/Terminal.module.css";

const Terminal = () => {
  const [text, setText] = useState("");

  const now = new Date();
  const dateString = now.toDateString();
  const timeString = now.toLocaleTimeString();

  const getCurrentDate = () => {
    return `Laast login: ${dateString} ${timeString}`;
  };

  const terminalText = [
    `Laast login: ${dateString} ${timeString}\n`,
    "\n",
    "developer@eliogerges.com Application %: ./greeting.sh\n",
    "Hello, World!\n",
    "My name is Elio Gerges, a software engineer!\n",
    "Welcome to my web portfolio...\n",
    "\n",
    "developer@eliogerges.com Application %: ./instruction.sh\n",
    "Scroll for more...\n",
  ];

  useEffect(() => {
    let currentIndex = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      // Ensure the character is added correctly
      if (charIndex < terminalText[currentIndex].length - 1) {
        setText((prev) => prev + terminalText[currentIndex][charIndex]);
        charIndex++;
      } else if (charIndex === terminalText[currentIndex].length - 1) {
        if (currentIndex === terminalText.length - 1) {
          clearInterval(typingInterval);
        } else {
          setText((prev) => prev + terminalText[currentIndex][charIndex]);
          charIndex = 0;
          currentIndex++;
        }
      } else {
        // All strings have been processed, clear the interval
        clearInterval(typingInterval);
      }
    }, 35);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <span className={styles.dot} style={{ background: "#FF5F56" }}></span>
        <span className={styles.dot} style={{ background: "#FFBD2E" }}></span>
        <span className={styles.dot} style={{ background: "#27C93F" }}></span>
      </div>
      <div className={styles.body}>
        <pre>{text}</pre>
      </div>
    </div>
  );
};

export default Terminal;
