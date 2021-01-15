import './SearchBar.css';

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <div className='SearchBar'>
      <input
        id='barStyle'
        value={keyword}
        placeholder={"search location"}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;