import PropTypes from "prop-types";
import { List, ListItem, IconButton, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <List className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id} className={styles.contactItem}>
          <Box className={styles.contactActions}>
            <IconButton
              type="button"
              onClick={() => onEdit(id)}
              className={styles.editButton}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              type="button"
              onClick={() => onDelete(id)}
              className={styles.deleteButton}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography className={styles.contactName}>{name}</Typography>
          <Typography className={styles.contactNumber}>{number}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default ContactList;
