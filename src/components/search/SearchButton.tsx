import './SearchButton.css';

const SearchButton = () => {
  return (
    <div className='SearchButton'>
      <button className="button is-primary" onClick={() => console.log("search button")}>Search</button>
    </div>
  );
};

export default SearchButton;