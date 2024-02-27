import { useSelector } from 'react-redux';
import { Contact } from '../Contact/contact';
import css from './contactlist.module.css';
import { getFilters, getUsers } from '../../redux/selectors';

export const ContactList = () => {
  const users = useSelector(getUsers);
  const filters = useSelector(getFilters);

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
