import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Modal from "../Modal/Modal";
import styles from "./ContactList.module.css";

const ContactList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const [modalData, setModalData] = useState(null);

  const handleDeleteClick = (id, name) => {
    setModalData({ id, name });
  };

  const confirmDelete = () => {
    dispatch(deleteContact(modalData.id));
    setModalData(null);
  };

  const cancelDelete = () => {
    setModalData(null);
  };

  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}{" "}
            <button onClick={() => onEdit({ id, name, number })}>Edit</button>
            <button onClick={() => handleDeleteClick(id, name)}>Delete</button>
          </li>
        ))}
      </ul>

      {modalData && (
        <Modal
          show={true}
          onClose={cancelDelete}
          title={`Delete "${modalData.name}"?`}
        >
          <div className={styles.confirmButtons}>
            <button
              className={`${styles.confirmButton} ${styles.confirmYes}`}
              onClick={confirmDelete}
            >
              Yes
            </button>
            <button
              className={`${styles.confirmButton} ${styles.confirmNo}`}
              onClick={cancelDelete}
            >
              No
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ContactList;
