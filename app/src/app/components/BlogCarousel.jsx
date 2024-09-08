"use client";

import React from "react";
import MainScreenBlog from "./MainScreenBlog";
import blogData from "../data/blogs.json";
import styles from "../styles/BlogCarousel.module.css";

const BlogCarousel = () => {
  // Filter favourite blogs
  const favouriteBlogs = blogData.filter((blog) => blog.favourite);

  return (
    <div className={styles.carouselContainer}>
      {favouriteBlogs.map((blog, index) => (
        <MainScreenBlog
          key={index}
          blog={blog}
          isEven={index % 2 === 0} // Reverse layout for even-indexed blogs
        />
      ))}
    </div>
  );
};

export default BlogCarousel;
