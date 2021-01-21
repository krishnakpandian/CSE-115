import { useState } from 'react';
import { request } from '../request';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import Radius from './filters/Radius';
import People from './filters/People';
import './Search.css';

const Search = () => {
  const [input, setInput] = useState('');
  const [radius, setRadius] = useState(10);
  const [people, setPeople] = useState(1);

  // live update of search bar
  const updateInput = (input) => {
    setInput(input);
  }

  // live update of radius
  const updateRadius = (radius) => {
    setRadius(parseInt(radius));
  }

  // live update of number of people
  const updatePeople = (people) => {
    setPeople(parseInt(people));
  }

  const buttonClick = () => {
    // for testing, delete later
    console.log("Searched: " + input);
    console.log("Radius: " + radius);
    console.log("People: " + people);

    if (input === '') {
      console.log("blank search");
    } else {
      request(input, radius, people).then(res => {
        console.log(res);
      });
      setInput('');
    }
  }

  return (
    <div className="Search">
      <div className='Inputs'>
        <SearchBar
          keyword={input}
          setKeyword={updateInput}
        />
        <SearchButton
          buttonClick={buttonClick}
        />
      </div>
      <div className='Filters'>
        <Radius
          currentRad={radius}
          setCurrentRad={updateRadius}
        />
        <People
          currentPeop={people}
          setCurrentPeop={updatePeople}
        />
      </div>
    </div>
  );
};

export default Search;