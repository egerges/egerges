"use client";

import React from "react";
import GitHubContributions from "../components/GitHubContributions";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ExpertiseTiles from "../components/ExpertiseTiles";
import styles from "../styles/Experience.module.css";

const ExperiencePage = () => {
  return (
    <div className={styles.container}>
      {/* GitHub Contributions Section */}
      <h2 className={styles.sectionTitle}>GitHub Contributions</h2>
      <GitHubContributions />

      {/* Experience Timeline Section */}
      <h2 className={styles.sectionTitle}>Work Experience</h2>
      <ExperienceTimeline />

      {/* Areas of Expertise Section */}
      <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
      <ExpertiseTiles />
    </div>
  );
};

export default ExperiencePage;
