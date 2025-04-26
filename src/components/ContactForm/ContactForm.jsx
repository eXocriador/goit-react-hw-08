import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addContact, updateContact } from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";

const ContactForm = ({ editing, setEditing }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setNumber(editing.number);
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing) {
      dispatch(updateContact({ id: editing.id, name, number }));
      setEditing(null);
    } else {
      dispatch(addContact({ name, number }));
    }

    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Number:
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>
        {editing ? "Update Contact" : "Add Contact"}
      </button>
    </form>
  );
};

export default ContactForm;
