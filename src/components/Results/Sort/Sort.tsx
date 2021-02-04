import React, { useState } from 'react';
import SortDropdown from './SortDropdown';
import './Sort.css'

interface props {
  data,
  setData
}

let display;

/*
  change back to no sort after each search
  fix travel time sort
*/

const Sort: React.FC<props> = ({ data, setData }: props) => {
  const [input, setInput] = useState('');

  const updateSort = (input) => {
    setInput(input);
    let sorted;

    switch (input) {
      case 'cos low high':
        sorted = sort(data.results, 'averageCost', 'low high');
        break;
      case 'cos high low':
        sorted = sort(data.results, 'averageCost', 'high low');
        break;
      case 'dis low high':
        sorted = sort(data.results, 'distance', 'low high');
        break;
      case 'dis high low':
        sorted = sort(data.results, 'distance', 'high low');
        break;
      default:
        sorted = getTime(data.results, input);
    }

    setData({ ...data, results: sorted });
  }

  const getTime = (results, range) => {
    // temporary but need to break down string into appropriate time int

    if (range == 'tim low high') {
      // sort from low travel time to high
      const newList = results.sort(function (a, b) {
        return parseInt(a['travelTime']) - parseInt(b['travelTime']);
      });
      return newList;
    }
    else {
      // sort from high travel time to low
      const newList = results.sort(function (a, b) {
        return parseInt(b['travelTime']) - parseInt(a['travelTime']);
      });
      return newList;
    }
  }

  const sort = (results, dataType, direction) => {
    if (direction == 'low high') {
      // sort from increasing value
      const newList = results.sort(function (a, b) {
        return a[dataType] - b[dataType];
      });
      return newList;
    }
    else {
      // sort by decreasing value
      const newList = results.sort(function (a, b) {
        return b[dataType] - a[dataType];
      });
      return newList;
    }
  }

  display = data.address && (
    <SortDropdown
      currentSort={input}
      setCurrentSort={updateSort}
    />
  );

  return (
    <div className='Sort'>
      {display}
    </div>
  );
};

export default Sort;