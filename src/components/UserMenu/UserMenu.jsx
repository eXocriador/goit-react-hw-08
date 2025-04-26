import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.menu}>
      <p className={styles.email}>{email}</p>
      <button onClick={handleLogout} className={styles.button}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
