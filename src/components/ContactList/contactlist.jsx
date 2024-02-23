import { useSelector } from 'react-redux';
import { Contact } from '../Contact/contact';
import css from './contactlist.module.css';

export const ContactList = () => {
  const users = useSelector(state => state.contacts.items);

  return (
    <ul className={css.contactList}>
      {users.map(user => (
        <li key={user.id} className={css.contactItem}>
          <Contact user={user} />
        </li>
      ))}
    </ul>
  );
};
