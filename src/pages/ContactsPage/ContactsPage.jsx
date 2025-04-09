import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Modal from "../../components/Modal/Modal";

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
      <h2>Your Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList onEdit={setEditingContact} />

      <Modal
        show={!!editingContact}
        title="Edit Contact"
        onClose={() => setEditingContact(null)}
      >
        <ContactForm editing={editingContact} setEditing={setEditingContact} />
      </Modal>
    </div>
  );
};

export default ContactsPage;
