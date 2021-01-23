import './SearchButton.css';

const SearchButton = ({ buttonClick }) => {
  return (
    <div className='SearchButton'>
      <button className="button is-primary is-medium is-outlined" onClick={() => buttonClick()}>Search</button>
    </div>
  );
};

export default SearchButton;