import ContactItem from "../ContactItem/ContactItem";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onEdit={() => onEdit(contact)}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
