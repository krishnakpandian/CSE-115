import React from 'react';
import './SearchBar.css';

interface props {
  keyword: any,
  setKeyword: any,
  buttonClick: any
}

const SearchBar: React.FC<props> = ({ keyword, setKeyword, buttonClick }: props) => {
  return (
    <div className='SearchBar'>
      <div className='field has-addons'>
        <div className='control is-expanded is-fullwidth'>
          <input
            className='input is-primary is-medium is-rounded'
            type='text'
            placeholder='search location'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className='control'>
          <button className="button is-primary is-medium is-outlined ButtonMargin" onClick={() => buttonClick()}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;