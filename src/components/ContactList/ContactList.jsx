import PropTypes from "prop-types";
import List from "@mui/material/List";

import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <List className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <div>{name}</div>
          <div>{number}</div>
          <button type="button" onClick={() => onEdit({ id, name, number })}>
            ✏️
          </button>
          <button type="button" onClick={() => onDelete(id)}>
            🗑️
          </button>
        </li>
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
