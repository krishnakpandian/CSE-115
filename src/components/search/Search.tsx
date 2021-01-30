import { useState } from 'react';
import { request } from '../Request/request';
import SearchBar from './SearchBar';
import Radius from './Filters/Radius';
import People from './Filters/People';
import './Search.css';

const Search = params => {
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
    if (input === '') {
      console.log("blank search");
    } else {
      request(input, radius, people).then(res => {
        console.log(res);
        params.setData(res);
        setInput(res.address);
      });
    }
  }

  return (
    <div className="Search">
      <div className='Inputs'>
        <SearchBar
          keyword={input}
          setKeyword={updateInput}
          buttonClick={buttonClick}
        />
      </div>
      <div className='Inputs'>
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