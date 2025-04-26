import PropTypes from "prop-types";
import { Modal as MuiModal, Box, Typography, Button } from "@mui/material";
import styles from "./ModalConfirm.module.css";

const ModalConfirm = ({ open, onClose, onConfirm, contactName }) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box className={styles.modal}>
        <Typography variant="h6" className={styles.title}>
          Confirm Deletion
        </Typography>
        <Typography className={styles.text}>
          Are you sure you want to delete <strong>{contactName}</strong>?
        </Typography>
        <Box className={styles.actions}>
          <Button
            variant="contained"
            color="error"
            onClick={onConfirm}
            className={styles.button}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            onClick={onClose}
            className={styles.button}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </MuiModal>
  );
};

ModalConfirm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  contactName: PropTypes.string
};

export default ModalConfirm;
