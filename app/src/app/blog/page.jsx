"use client";

import React, { useState } from "react";
import ToggleButton from "../components/ToggleButton";
import BlogCard from "../components/BlogCard";
import blogData from "../data/blogs.json";
import styles from "../styles/Blog.module.css";

const BlogPage = () => {
  const [sortedBlogs, setSortedBlogs] = useState(blogData);

  const handleToggle = (option) => {
    let sorted = [...blogData];
    if (option === "recent") {
      sorted = sorted.sort(
        (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
      );
    } else if (option === "featured") {
      sorted = sorted.sort(
        (a, b) => (b.favourite ? 1 : 0) - (a.favourite ? 1 : 0)
      );
    }
    setSortedBlogs(sorted);
  };

  return (
    <div className={styles.container}>
      {/* Toggle between Recent and Featured */}
      <ToggleButton onToggle={handleToggle} />

      {/* Blog List */}
      <div className={styles.blogList}>
        {sortedBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
