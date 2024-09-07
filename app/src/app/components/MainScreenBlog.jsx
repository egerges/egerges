"use client";

import React from "react";
import styles from "../styles/MainScreenBlog.module.css";

const MainScreenBlog = ({ blog = {} }) => {
  return (
    <div className={styles.blogContainer}>
      <img
        src={blog?.imageUrl}
        alt={blog?.title}
        className={styles.blogImage}
      />
      <div className={styles.blogInfo}>
        <h2>{blog?.title}</h2>
        <p>{blog?.description}</p>
      </div>
    </div>
  );
};

export default MainScreenBlog;
