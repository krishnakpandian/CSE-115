import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import './Search.css';
import { request } from '../request';

const Search = () => {
  const [input, setInput] = useState('');

  // live update of search bar
  const updateInput = async (input) => {
    setInput(input);
  }

  const buttonClick = () => {
    console.log("You searched: " + input);
    setInput('');
    // Below is example use of the function
    request("San Jose", 300, 2).then(res => {
      // Takes about five-ten seconds
      console.log(res);
    });
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