"use client";

import React from "react";
import styles from "../styles/MainScreenBlog.module.css";

const MainScreenBlog = ({ blog = {}, isEven }) => {
  return (
    <div className={`${styles.blogContainer} ${isEven ? styles.reverse : ""}`}>
      <div className={styles.blogInfo}>
        <h2 className={styles.blogTitle}>{blog?.title}</h2>
        <p className={styles.blogDescription}>{blog?.description}</p>
        <a href={blog?.url} target="_blank" rel="noopener noreferrer">
          <button className={styles.viewPostButton}>View Post</button>
        </a>
      </div>
      <img
        src={blog?.imageUrl}
        alt={blog?.title}
        className={styles.blogImage}
      />
    </div>
  );
};

export default MainScreenBlog;
