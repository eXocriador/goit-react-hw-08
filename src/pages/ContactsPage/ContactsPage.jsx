import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Modal from "../../components/Modal/Modal";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <Modal
        show={!!editingContact}
        title="Edit Contact"
        onClose={() => setEditingContact(null)}
      >
        <ContactForm editing={editingContact} setEditing={setEditingContact} />
      </Modal>
      <h2>Your Contacts</h2>
      <Filter />
      <ContactList onEdit={setEditingContact} />

      {editingContact && (
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <h3>Edit Contact</h3>
            <ContactForm
              editing={editingContact}
              setEditing={setEditingContact}
            />
            <button onClick={() => setEditingContact(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsPage;
