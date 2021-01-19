import './SearchButton.css';

const SearchButton = ({ buttonClick }) => {
  return (
    <div className='SearchButton'>
      <button className="button is-primary" onClick={() => buttonClick()}>Search</button>
    </div>
  );
};

export default SearchButton;