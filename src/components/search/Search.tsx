import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import './Search.css';

const Search = () => {
  const [input, setInput] = useState('');

  // live update of search bar
  const updateInput = async (input) => {
    setInput(input);
  }

  const buttonClick = () => {
    console.log("You searched: " + input);
    setInput('');
  }

  return (
    <div className="Search">
      <SearchBar
        keyword={input}
        setKeyword={updateInput}
      />
      <SearchButton
        buttonClick={buttonClick}
      />
    </div>
  );
};

export default Search;