import { useSelector } from 'react-redux';
import { Contact } from '../contact/contact';
import css from './contactlist.module.css';
import { getContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(user => (
        <li key={user.id} className={css.contactItem}>
          <Contact user={user} deletUser={deletUser} />
        </li>
      ))}
    </ul>
  );
};
