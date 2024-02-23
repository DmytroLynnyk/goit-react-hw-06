import css from './contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const Contact = ({ user: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contactItem}>
      <div className={css.userInfo}>
        <p className={css.userName}>
          <IoMdPerson className={css.contactIcon} />
          {name}
        </p>
        <p className={css.userPhone}>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button type="button" onClick={handleDelete} className={css.deleteBtn}>
        Delete
      </button>
    </div>
  );
};
