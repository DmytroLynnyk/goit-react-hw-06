import { useDispatch, useSelector } from 'react-redux';
import css from './searchbox.module.css';
import { changeFilter } from '../../redux/store';

export const SearchBox = () => {
  const dispatch = useDispatch();
  // const query = useSelector(state => state.filters);
  // console.log(query);
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        // value={query}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};
