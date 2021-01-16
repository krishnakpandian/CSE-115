import './SearchBar.css';

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <div className='SearchBar control'>
      <input
        className='input is-info'
        type='text'
        placeholder='search location'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;