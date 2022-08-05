import { FaUserAltSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getFilter, getItems } from 'redux/contactsSlice';
import { List } from './Contactlist.styled';

const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  let rendered = filter === '' ? contacts : filteredContacts();

  return (
    <List>
      {rendered.map(({ id, name, number }) => (
        <li key={id} id={id}>
          {name}: {number}
          <button
            type="button"
            onClick={e =>
              dispatch(deleteContact(e.currentTarget.parentNode.id))
            }
          >
            <FaUserAltSlash size={20} color={'red'} />
          </button>
        </li>
      ))}
    </List>
  );
};

export default ContactList;
