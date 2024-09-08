"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      console.error("Failed to send the message");
    }
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactForm}>
        <h2>Let's connect</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.sendButton}>
            Send Message
          </button>
        </form>
        {submitted && (
          <p className={styles.successMessage}>Message sent successfully!</p>
        )}
      </div>

      <div className={styles.contactInfo}>
        <h2>
          Got a cool project, need some code magic, or want to hire me? Let's
          Chat!
        </h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 198 West 21st Street,
            Suite 721 New York, NY 10016
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} /> +1 123 2355 98
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> info@yourdomain.com
          </li>
          <li>
            <FontAwesomeIcon icon={faGlobe} /> yoursite.com
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMedium} /> Medium
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
