import { useDispatch, useSelector } from 'react-redux';
import css from './searchbox.module.css';
import { changeFilter } from '../../redux/store';

export const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};
