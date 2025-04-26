import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.link}>
        Log In
      </NavLink>
    </nav>
  );
};

export default AuthNav;
