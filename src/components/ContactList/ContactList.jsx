import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          {name}: {phone}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
