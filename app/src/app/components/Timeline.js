"use client";

import styles from "../styles/Timeline.module.css";

export default function Timeline({ data }) {
  return (
    <div className={styles.timeline}>
      {data.map((item, index) => (
        <div key={index} className={styles.timelineItem}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
