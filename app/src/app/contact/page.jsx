import React from "react";
import ContactForm from "../components/ContactForm";
import styles from "../styles/Contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
