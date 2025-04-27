import { useState, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

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
    onSave({ id: contact.id, name, number });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          boxShadow: 24
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2>Edit Contact</h2>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button variant="contained" color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default EditContactModal;
