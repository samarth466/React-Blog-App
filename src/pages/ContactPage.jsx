import { useState } from "react";
import styles from "./ContactPage.module.css";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section>
      <h1>Contact Us</h1>

      <p>
        Have a question, suggestion, or idea for a blog post?
        We'd love to hear from you!
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            rows="6"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>

      {submitted && (
        <p className={styles.success} role="status">
          Your form was submitted successfully.
          This is a demonstration, so no message was sent.
        </p>
      )}
    </section>
  );
}

export default ContactPage;