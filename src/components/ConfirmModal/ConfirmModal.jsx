import { useEffect } from "react";
import styles from "./ConfirmModal.module.css";
import clsx from "clsx";

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onCancel]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <p>{message}</p>
        <div className={styles.buttons}>
          <button
            className={clsx(styles.button, styles.confirm)}
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className={clsx(styles.button, styles.cancel)}
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
