"use client";

import React from "react";
import styles from "../styles/ExperienceCard.module.css";

const ExperienceCard = ({ experience }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.year}>
        <span>{experience.year}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.jobTitle}>
          {experience.jobTitle} -{" "}
          <span className={styles.company}>{experience.company}</span>
        </h3>
        <p>
          {experience.startDate} - {experience.endDate}
        </p>
        <ul className={styles.jobDescription}>
          {experience.description.split(". ").map((item, index) => (
            <li>{item};</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
