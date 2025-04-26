import { Modal as MuiModal, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = ({ open, onClose, children }) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box className={styles.modal}>{children}</Box>
    </MuiModal>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
