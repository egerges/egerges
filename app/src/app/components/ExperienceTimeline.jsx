"use client";

import React from "react";
import ExperienceCard from "./ExperienceCard";
import styles from "../styles/ExperienceTimeline.module.css";
import experienceData from "../data/experiences.json"; // Assuming the JSON data is here.

const ExperienceTimeline = () => {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
