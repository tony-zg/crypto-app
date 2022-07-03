import './search.css';

const Search = ({ debouncedChangeHandler }) => {
  return (
    <div className="coin-search">
      <form>
        <input
          className="coin-input btn"
          type="text"
          placeholder="Search"
          onChange={debouncedChangeHandler}
        />
      </form>
    </div>
  );
};

export default Search;
