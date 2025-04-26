import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
