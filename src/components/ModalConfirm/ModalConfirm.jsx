import React from "react";
import { Modal, Box, Button } from "@mui/material";
import styles from "./ModalConfirm.module.css";

function ModalConfirm({ open, onClose, onConfirm }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className={styles.modalBox}>
        <div className={styles.message}>
          Are you sure you want to delete this contact?
        </div>
        <div className={styles.buttons}>
          <Button type="button" variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="button"
            variant="contained"
            color="error"
            onClick={onConfirm}
          >
            Confirm
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
export default ModalConfirm;
