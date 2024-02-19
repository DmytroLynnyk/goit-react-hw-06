import css from './searchbox.module.css';

export const SearchBox = ({ inputValue, setInputValue }) => {
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={inputValue}
        onChange={evt => setInputValue(evt.target.value)}
      />
    </div>
  );
};
