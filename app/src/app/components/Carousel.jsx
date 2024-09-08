"use client"; // Ensure this file is rendered only on the client

import React from "react";
import styles from "../styles/Carousel.module.css";

const techImages = {
  carouselOne: [
    "/tech-stack/react.png",
    "/tech-stack/vue.png",
    "/tech-stack/node.png",
    "/tech-stack/next.png",
    "/tech-stack/ts.png",
    "/tech-stack/go.png",
  ],
  carouselTwo: [
    "/tech-stack/flutter.png",
    "/tech-stack/docker.png",
    "/tech-stack/aws.png",
    "/tech-stack/mongo.png",
    "/tech-stack/postgres.png",
    "/tech-stack/mysql.png",
    "/tech-stack/confluence.png",
  ],
  carouselThree: [
    "/tech-stack/js.png",
    "/tech-stack/html5.png",
    "/tech-stack/css3.png",
    "/tech-stack/github.png",
    "/tech-stack/java.png",
    "/tech-stack/jira.png",
    "/tech-stack/git.png",
  ],
};

const Carousel = () => {
  return (
    <div className={styles.carouselContainer}>
      {/* Carousel 1 (left to right) */}
      <div
        className={`${styles.carousel} ${styles.leftToRight}`}
        style={{ animationDuration: "100s" }}
      >
        {[
          ...techImages.carouselOne,
          ...techImages.carouselOne,
          ...techImages.carouselOne,
          ...techImages.carouselOne,
          ...techImages.carouselOne,
          ...techImages.carouselOne,
          ...techImages.carouselOne,
          ...techImages.carouselOne,
          ...techImages.carouselOne,
          ...techImages.carouselOne,
        ].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Technology ${index + 1}`}
            className={styles.techImage}
          />
        ))}
      </div>

      {/* Carousel 2 (right to left) */}
      <div
        className={`${styles.carousel} ${styles.rightToLeft}`}
        style={{ animationDuration: "100s" }}
      >
        {[
          ...techImages.carouselTwo,
          ...techImages.carouselTwo,
          ...techImages.carouselTwo,
          ...techImages.carouselTwo,
          ...techImages.carouselTwo,
          ...techImages.carouselTwo,
          ...techImages.carouselTwo,
          ...techImages.carouselTwo,
          ...techImages.carouselTwo,
          ...techImages.carouselTwo,
        ].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Technology ${index + 1}`}
            className={styles.techImage}
          />
        ))}
      </div>

      {/* Carousel 3 (left to right) */}
      <div
        className={`${styles.carousel} ${styles.leftToRight}`}
        style={{ animationDuration: "100s" }}
      >
        {[
          ...techImages.carouselThree,
          ...techImages.carouselThree,
          ...techImages.carouselThree,
          ...techImages.carouselThree,
          ...techImages.carouselThree,
          ...techImages.carouselThree,
          ...techImages.carouselThree,
          ...techImages.carouselThree,
          ...techImages.carouselThree,
          ...techImages.carouselThree,
        ].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Technology ${index + 1}`}
            className={styles.techImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
