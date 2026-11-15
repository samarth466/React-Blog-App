import { useContext } from "react";
import { NavLink } from "react-router";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Header.module.css";

function Navigation() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={styles.navigation}
      aria-label="Main navigation"
    >
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/posts">
        Blog Posts
      </NavLink>

      <NavLink to="/about">
        About
      </NavLink>

      <NavLink to="/contact">
        Contact
      </NavLink>

      <button
        type="button"
        className={styles.themeButton}
        onClick={toggleTheme}
      >
        {theme === "light"
          ? "☾ Dark Mode"
          : "☀ Light Mode"}
      </button>
    </nav>
  );
}

export default Navigation;