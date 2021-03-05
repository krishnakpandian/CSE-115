import React, { useState } from 'react';
import { request } from '../Request/request';
import SearchBar from './SearchBar';
import Radius from './filters/Radius';
import People from './filters/People';
import './Search.css';
import {analytics} from '../Signup/firebaseConfig'


const Search = params => {
  // state for user input of search bar
  const [input, setInput] = useState('');

  // state for radius filter
  const [radius, setRadius] = useState(10);

  // state for people filter
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

  // called for a new search when search button clicked
  const buttonClick = (setLoading) => {
    if (input === '') {
      // blank search
    } else {
      analytics.logEvent("search_Request_" + people + "_People")
      request(input, radius, people).then(res => {
        params.setData(res);
        setInput(res.address);
        setLoading(false);
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