"use client"; // Ensure this file is only rendered on the client

import React, { useState } from "react";
import styles from "../styles/Finder.module.css";

const Finder = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const numPages = 2; // Let's assume we have two images for now

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/Elio_Gerges_Resume.pdf"; // Path to your image file in the public folder
    link.download = "Elio_Gerges_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const goToPreviousPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className={styles.finder}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.windowControl}></div>
        <div className={styles.windowControl}></div>
        <div className={styles.windowControl}></div>
      </div>

      {/* Sidebar and content */}
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <ul>
            <li className={styles.favoriteListItem}>Favorites</li>
            <li className={styles.subListItem}>AirDrop</li>
            <li className={styles.subListItem}>Recents</li>
            <li className={styles.subListItem}>Applications</li>
            <li className={styles.subListItem}>Desktop</li>
            <li className={styles.subListItem}>Documents</li>
            <li className={styles.subListItem}>Downloads</li>
          </ul>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.file}>
            <div className={styles.fileIcon}></div>
            <div className={styles.fileDetails}>
              <p>Elio's Resume</p>
              <button
                onClick={handleDownload}
                className={styles.downloadButton}
              >
                Download
              </button>
            </div>
          </div>

          {/* Image Preview with Hover Pagination */}
          <div className={styles.previewContainer}>
            <div className={styles.preview}>
              {/* Mock document images */}
              <img
                src={`/files/Elio_Gerges_Resume_${pageNumber}.jpg`}
                alt={`Resume Page ${pageNumber}`}
                className={styles.previewImage}
              />
            </div>

            {/* Pagination */}
            <div className={styles.pagination}>
              <button onClick={goToPreviousPage} disabled={pageNumber === 1}>
                &lt;
              </button>
              <span>
                {pageNumber} of {numPages}
              </span>
              <button onClick={goToNextPage} disabled={pageNumber === numPages}>
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finder;
