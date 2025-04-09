import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Modal from "../Modal/Modal";
import { toast } from "react-hot-toast";

const ContactList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const [modalData, setModalData] = useState(null);

  const handleDelete = (id, name) => {
    setModalData({ id, name });
  };

  const confirmDelete = () => {
    dispatch(deleteContact(modalData.id))
      .unwrap()
      .then(() =>
        toast.success(`${modalData.name} deleted`, { position: "top-right" })
      )
      .catch(() =>
        toast.error("Failed to delete contact", { position: "top-right" })
      );
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
            {name}: {number}
            <button onClick={() => onEdit({ id, name, number })}>Edit</button>
            <button onClick={() => handleDelete(id, name)}>Delete</button>
          </li>
        ))}
      </ul>
      {modalData && (
        <Modal
          message={`Delete ${modalData.name}?`}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </>
  );
};

export default ContactList;
