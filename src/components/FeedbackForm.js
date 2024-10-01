import styles from './Forms.module.css';

export default function FeedbackForm() {
  return (
    <form className={styles.form}>
      <h2>Provide Feedback</h2>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Feedback</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
}