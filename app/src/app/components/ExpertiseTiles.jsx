"use client";

import React from "react";
import styles from "../styles/ExpertiseTiles.module.css";
import expertiseData from "../data/expertise.json";

const ExpertiseTiles = () => {
  return (
    <div className={styles.expertiseContainer}>
      {expertiseData.map((item, index) => (
        <div key={index} className={styles.tile}>
          <img src={item.icon} alt={item.title} className={styles.icon} />
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpertiseTiles;
