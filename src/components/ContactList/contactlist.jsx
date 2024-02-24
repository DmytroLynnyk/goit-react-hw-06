import { useSelector } from 'react-redux';
import { Contact } from '../Contact/contact';
import css from './contactlist.module.css';

export const ContactList = () => {
  const users = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filters.name);

  const filterUsers = users.filter(user =>
    user.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filterUsers.map(user => (
        <li key={user.id} className={css.contactItem}>
          <Contact user={user} />
        </li>
      ))}
    </ul>
  );
};
