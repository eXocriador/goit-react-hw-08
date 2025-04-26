// src/pages/ContactsPage.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectLoading } from "../../redux/contacts/selectors";
import {
  fetchContacts,
  deleteContact,
  addContact,
  updateContact
} from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Modal, Box, Typography } from "@mui/material";
import toast from "react-hot-toast";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(deleteContact(id)).then(() =>
        toast.success("Contact deleted successfully!")
      );
    }
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setModalOpen(true);
  };

  const handleUpdate = (values) => {
    dispatch(updateContact(values)).then(() => {
      toast.success("Contact updated successfully!");
      setModalOpen(false);
      setEditingContact(null);
    });
  };

  const handleAdd = (values) => {
    dispatch(addContact(values)).then(() =>
      toast.success("Contact added successfully!")
    );
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setEditingContact(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contacts</h1>
      <ContactForm onSubmit={handleAdd} />
      <SearchBox />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ContactList
          contacts={contacts}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box className={styles.modalBox}>
          {editingContact && (
            <>
              <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                Edit Contact
              </Typography>
              <ContactForm
                initialValues={editingContact}
                onSubmit={handleUpdate}
              />
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ContactsPage;
