import css from './contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/store';

export const Contact = ({ user: { id, name, number } }) => {
  const dispatch = useDispatch();

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
      <button
        type="button"
        className={css.deleteBtn}
        onClick={
          // () => {
          //   console.log(id);
          // }
          () => {
            dispatch(deleteUser(id));
          }
        }
      >
        Delete
      </button>
    </div>
  );
};
