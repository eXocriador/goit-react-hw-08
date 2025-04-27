import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import css from "./EditContactModal.module.css";

const EditContactModal = ({ contact, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContact({ id: contact.id, name, number }));
    onClose();
  };

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <h3>Edit Contact</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className={css.input}
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <div className={css.actions}>
            <button className={css.button} type="submit">
              Save
            </button>
            <button className={css.button} type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContactModal;
