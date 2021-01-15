import { useState } from 'react';
import SearchBar from './SearchBar';
import './Search.css';

const Search = () => {
  const [input, setInput] = useState('');

  const updateInput = async (input) => {
    console.log(input);
    setInput(input);
  }

  return (
    <div className="Search">
      <SearchBar
        keyword={input}
        setKeyword={updateInput}
      />
    </div>
  );
};

export default Search;