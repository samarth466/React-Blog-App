import Navigation from "./Navigation";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img
          src={logo}
          alt="Logo"
          className={styles.logo}
          width="52"
          height="52"
        />

        <h1>The Creative Corner</h1>
      </div>

      <Navigation />
    </header>
  );
}

export default Header;