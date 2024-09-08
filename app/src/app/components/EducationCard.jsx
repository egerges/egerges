"use client";

import React from "react";
import styles from "../styles/EducationCard.module.css";

const EducationCard = ({ education }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.year}>
        <span>{education.startDate}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.degree}>
          {education.degree} -{" "}
          <span className={styles.institution}>{education.institution}</span>
        </h3>
        <p>
          {education.startDate} - {education.endDate}
        </p>
        <ul className={styles.educationDescription}>
          {education.description.split(". ").map((item, index) => (
            <li key={index}>{item};</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationCard;
