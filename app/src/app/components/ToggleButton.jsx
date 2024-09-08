import React, { useState } from "react";
import styles from "../styles/ToggleButton.module.css";

const ToggleButton = ({ onToggle }) => {
  const [active, setActive] = useState("recent");

  const handleToggle = (option) => {
    setActive(option);
    onToggle(option);
  };

  return (
    <div className={styles.toggleContainer}>
      <button
        className={`${styles.toggleButton} ${
          active === "recent" ? styles.active : ""
        }`}
        onClick={() => handleToggle("recent")}
      >
        Recent
      </button>
      <button
        className={`${styles.toggleButton} ${
          active === "featured" ? styles.active : ""
        }`}
        onClick={() => handleToggle("featured")}
      >
        Featured
      </button>
    </div>
  );
};

export default ToggleButton;
