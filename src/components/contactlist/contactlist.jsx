import { Contact } from '../contact/contact';
import css from './contactlist.module.css';

export const ContactList = ({ users, deletUser }) => {
  return (
    <ul className={css.contactList}>
      {users.map(user => (
        <li key={user.id} className={css.contactItem}>
          <Contact user={user} deletUser={deletUser} />
        </li>
      ))}
    </ul>
  );
};
