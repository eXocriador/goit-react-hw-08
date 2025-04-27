import { Modal, Box, Button } from "@mui/material";
import styles from "./ModalConfirm.module.css";

const ModalConfirm = ({ open, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className={styles.modal}>
        <h2>Confirm deletion</h2>
        <div className={styles.buttonGroup}>
          <Button variant="contained" color="error" onClick={onConfirm}>
            Delete
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalConfirm;
