"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/GitHubContributions.module.css";

const GitHubContributions = () => {
  const [contributions, setContributions] = useState({
    pullRequests: 250,
    commits: 54,
    peerReview: 17,
  });

  //   useEffect(() => {
  //     const fetchGitHubData = async () => {
  //       try {
  //         // const response = await fetch(
  //         //   "https://api.github.com/users/egerges/events"
  //         // );
  //         const data = await response.json();

  //         let pullRequests = 250;
  //         let commits = 54;
  //         let peerReview = 17;

  //         // data.forEach((event) => {
  //         //   if (event.type === "PullRequestEvent") pullRequests++;
  //         //   if (event.type === "PushEvent") commits++;
  //         //   if (event.type === "PullRequestReviewEvent") peerReview++;
  //         // });

  //         setContributions({
  //           pullRequests,
  //           commits,
  //           peerReview,
  //         });
  //       } catch (error) {
  //         console.error("Failed to fetch GitHub contributions:", error);
  //       }
  //     };

  //     fetchGitHubData();
  //   }, []);

  return (
    <div className={styles.container}>
      <div className={styles.metricCard}>
        <h3 className={styles.title}>{contributions.pullRequests}+</h3>
        <p className={styles.description}>Pull Requests</p>
      </div>
      <div className={styles.metricCard}>
        <h3 className={styles.title}>{contributions.commits}%</h3>
        <p className={styles.description}>Commits</p>
      </div>
      <div className={styles.metricCard}>
        <h3 className={styles.title}>{contributions.peerReview}%</h3>
        <p className={styles.description}>Peer Review</p>
      </div>
    </div>
  );
};

export default GitHubContributions;
