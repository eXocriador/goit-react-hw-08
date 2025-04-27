import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import styles from "./ContactItem.module.css";

const ContactItem = ({ id, name, number, onEdit, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <p className={styles.contactName}>{name}</p>
        <p className={styles.contactNumber}>{number}</p>
      </div>
      <div className={styles.contactActions}>
        <IconButton
          className={styles.editButton}
          size="small"
          onClick={() => onEdit(id)}
        >
          <Edit fontSize="small" />
        </IconButton>
        <IconButton
          className={styles.deleteButton}
          size="small"
          onClick={() => onDelete(id)}
        >
          <Delete fontSize="small" />
        </IconButton>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ContactItem;
