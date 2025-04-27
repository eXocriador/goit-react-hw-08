import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import EditContactModal from "../EditContactModal/EditContactModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import css from "./ContactItem.module.css";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <li className={css.item}>
        <span>
          {contact.name}: {contact.number}
        </span>
        <div>
          <button className={css.button} onClick={() => setIsEditOpen(true)}>
            Edit
          </button>
          <button
            className={css.buttonDelete}
            onClick={() => setIsConfirmOpen(true)}
          >
            Delete
          </button>
        </div>
      </li>
      {isEditOpen && (
        <EditContactModal
          contact={contact}
          onClose={() => setIsEditOpen(false)}
        />
      )}
      {isConfirmOpen && (
        <ConfirmDeleteModal
          onConfirm={handleDelete}
          onCancel={() => setIsConfirmOpen(false)}
        />
      )}
    </>
  );
};

export default ContactItem;
