"use client";

import { motion } from "framer-motion";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <motion.div
        className={styles.commitMessage}
        whileHover={{ color: "#FA3737" }}
      >
        {project.commitMessage}
      </motion.div>
    </motion.div>
  );
}
