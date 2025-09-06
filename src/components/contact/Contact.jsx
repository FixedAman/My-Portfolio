import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt="Email icon" />
          <h2>amanmahish73@gmail.com</h2>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/FixedAman">github.com/FixedAman</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn icon" />
          <h2>linkedin.com/Aman Mahish</h2>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
