"use client";

import React from "react";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import styles from "../styles/ExperienceTimeline.module.css";
import experienceData from "../data/experiences.json"; // Assuming the experience data is here.
import educationData from "../data/education.json"; // Assuming the education data is here.

const ExperienceTimeline = () => {
  // Combine experiences and education, then sort by start date (most recent first)
  const combinedData = [
    ...experienceData.map((experience) => ({
      ...experience,
      type: "experience",
    })),
    ...educationData.map((education) => ({
      ...education,
      type: "education",
    })),
  ];

  // Sort by start date (most recent first)
  const sortedData = combinedData.sort((a, b) => {
    const dateA = new Date(a.endDate || a.startDate).getTime();
    const dateB = new Date(b.endDate || b.startDate).getTime();
    return dateB - dateA;
  });

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        {sortedData.map((item, index) =>
          item.type === "experience" ? (
            <ExperienceCard key={index} experience={item} />
          ) : (
            <EducationCard key={index} education={item} />
          )
        )}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
