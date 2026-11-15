import { Link } from "react-router";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <Link to="/about">About Us</Link>
        {" | "}
        <Link to="/contact">Contact Us</Link>
      </p>

      <p>
        © {new Date().getFullYear()} The Creative Corner.
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;