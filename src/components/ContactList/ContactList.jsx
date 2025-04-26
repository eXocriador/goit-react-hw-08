import PropTypes from "prop-types";
import { List, ListItem, IconButton, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <List className={styles.list}>
      {contacts.map((contact) => (
        <ListItem key={contact.id} className={styles.item}>
          <Box className={styles.infoBox}>
            <Typography variant="subtitle1" className={styles.name}>
              {contact.name}
            </Typography>
            <Typography variant="body2" className={styles.number}>
              {contact.number}
            </Typography>
          </Box>
          <Box className={styles.buttonsBox}>
            <IconButton
              aria-label="edit"
              onClick={() => onEdit(contact)}
              className={styles.iconButton}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => onDelete(contact.id)}
              className={styles.iconButton}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default ContactList;
