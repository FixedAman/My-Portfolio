import styles from "./Contact.module.css";
import emailIcon from "../../../assets/contact/emailIcon.png";
import githubIcon from "../../../assets/contact/githubIcon.png";
import linkedinIcon from "../../../assets/contact/linkedinIcon.png";
const Contact = () => {
  return (

    
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <h2>amanmahish73@gmail.com</h2>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/FixedAman">github.com/FixedAman</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <h2>linkedin.com/Aman Mahish</h2>
        </li>
      </ul>
    </footer>
  );
};
export default Contact;
