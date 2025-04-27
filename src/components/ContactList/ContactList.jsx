import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import ContactItem from "../ContactItem/ContactItem";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
