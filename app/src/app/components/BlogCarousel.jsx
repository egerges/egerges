import React, { useState, useEffect } from "react";
import MainScreenBlog from "./MainScreenBlog";
import styles from "../styles/BlogCarousel.module.css";

const BlogCarousel = ({ blogs = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [blogs.length]);

  return (
    <div className={styles.carouselContainer}>
      <MainScreenBlog blog={blogs[currentIndex]} />
    </div>
  );
};

export default BlogCarousel;
