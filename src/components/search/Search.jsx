import styles from './search.module.scss';

const Search = ({ debouncedChangeHandler }) => {
  return (
    <div className={styles.coin__search__container}>
      <form>
        <input
          className={styles.coin__input}
          type="text"
          placeholder="Search"
          onChange={debouncedChangeHandler}
        />
      </form>
    </div>
  );
};

export default Search;
