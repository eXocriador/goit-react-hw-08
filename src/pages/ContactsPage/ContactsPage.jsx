import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addContact,
  deleteContact,
  fetchContacts
} from "../../redux/contacts/operations";
import {
  selectFilteredContacts,
  selectIsLoading
} from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { CircularProgress } from "@mui/material";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (data) => {
    dispatch(addContact(data));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEditContact = (id) => {
    console.log("Editing contact with id:", id);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contacts</h1>

      <div className={styles.formWrapper}>
        <ContactForm onSubmit={handleAddContact} />
      </div>

      <div className={styles.searchWrapper}>
        <SearchBox />
      </div>

      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px"
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <ContactList
          contacts={contacts}
          onDelete={handleDeleteContact}
          onEdit={handleEditContact}
        />
      )}
    </div>
  );
};

export default ContactsPage;
