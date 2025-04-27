import { useState, useEffect } from "react";
import { Modal, Box, Button, TextField } from "@mui/material";
import styles from "./EditContactModal.module.css";

const EditContactModal = ({ open, handleClose, contact, onSave }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    if (contact) {
      setName(contact.name || "");
      setNumber(contact.number || "");
    }
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contact || !contact.id) return; // перевіряємо чи є id

    onSave({ id: contact.id, name, number });
    handleClose(); // закриваємо модалку після збереження
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={styles.modal}>
        <h2>Edit Contact</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <div className={styles.buttonGroup}>
            <Button variant="outlined" color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default EditContactModal;
