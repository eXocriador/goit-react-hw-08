import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <List className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id} className={styles.contactItem}>
          <Box className={styles.contactText}>
            <Typography className={styles.contactName}>{name}</Typography>
            <Typography className={styles.contactNumber}>{number}</Typography>
          </Box>
          <Box className={styles.contactActions}>
            <IconButton
              className={styles.editButton}
              onClick={() => onEdit(id)}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              className={styles.deleteButton}
              onClick={() => onDelete(id)}
            >
              <DeleteIcon fontSize="small" />
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
