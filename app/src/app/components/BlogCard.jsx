import React from "react";
import styles from "../styles/BlogCard.module.css";

const BlogCard = ({ blog }) => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.blogContent}>
        <h3>
          <a href={blog.url} target="_blank" rel="noopener noreferrer">
            {blog.title}
          </a>
        </h3>
        <p>{blog.description}</p>
        <div className={styles.blogMeta}>
          <span>{blog.author}</span>|
          <span>
            {new Date(blog.publishedDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <div className={styles.tagCloud}>
          {blog.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.blogImage}>
        <img src={blog.imageUrl} alt={blog.title} />
      </div>
    </div>
  );
};

export default BlogCard;
