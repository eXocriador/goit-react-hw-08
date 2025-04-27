import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  updateContact,
  fetchContacts
} from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { selectIsLoading } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import EditContactModal from "../../components/EditContactModal/EditContactModal";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import { CircularProgress } from "@mui/material";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectFilteredContacts);

  const [currentContact, setCurrentContact] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (data) => {
    dispatch(addContact(data));
  };

  const handleEditContact = (contact) => {
    setCurrentContact(contact);
    setIsEditModalOpen(true);
  };

  const handleSaveEditedContact = (updatedData) => {
    const updatedContact = { id: currentContact.id, ...updatedData };
    dispatch(updateContact(updatedContact));
    handleCloseEditModal();
  };

  const handleCloseEditModal = () => {
    setCurrentContact(null);
    setIsEditModalOpen(false);
  };

  const handleDeleteContact = (id) => {
    setContactToDelete(id);
    setIsConfirmModalOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(contactToDelete));
    setIsConfirmModalOpen(false);
    setContactToDelete(null);
  };

  const handleCancelDelete = () => {
    setIsConfirmModalOpen(false);
    setContactToDelete(null);
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
        <div className={styles.loaderWrapper}>
          <CircularProgress />
        </div>
      ) : (
        <ContactList
          contacts={contacts}
          onDelete={handleDeleteContact}
          onEdit={handleEditContact}
        />
      )}

      {isEditModalOpen && (
        <EditContactModal
          open={isEditModalOpen}
          handleClose={handleCloseEditModal}
          contact={currentContact}
          onSave={handleSaveEditedContact}
        />
      )}

      {isConfirmModalOpen && (
        <ModalConfirm
          open={isConfirmModalOpen}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default ContactsPage;
