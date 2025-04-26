import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  fetchContacts
} from "../../redux/contacts/operations";
import {
  selectContacts,
  selectFilteredContacts,
  selectIsLoading
} from "../../redux/contacts/selectors";
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (data) => {
    dispatch(addContact(data));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Contacts</h1>

      <div className={styles.addContactSection}>
        <h2 className={styles.sectionTitle}>Add Contact</h2>
        <ContactForm onSubmit={handleAddContact} />
      </div>

      <div className={styles.listSection}>
        <SearchBox />

        {isLoading ? (
          <Loader />
        ) : (
          <ContactList
            contacts={filteredContacts.length > 0 ? filteredContacts : contacts}
            onDelete={handleDeleteContact}
          />
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
