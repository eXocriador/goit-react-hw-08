import css from "./ConfirmDeleteModal.module.css";

const ConfirmDeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <h3>Are you sure you want to delete this contact?</h3>
        <div className={css.actions}>
          <button className={css.button} onClick={onConfirm}>
            Yes
          </button>
          <button className={css.button} onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
