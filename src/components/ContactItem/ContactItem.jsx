import PropTypes from "prop-types";
import styles from "./ContactItem.module.css";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ContactItem = ({ contact, onDelete, onEdit }) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{contact.name}</span>
      <span className={styles.number}>{contact.number}</span>
      <div className={styles.actions}>
        <IconButton color="primary" onClick={() => onEdit(contact)}>
          <EditIcon />
        </IconButton>
        <IconButton color="error" onClick={() => onDelete(contact.id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default ContactItem;
