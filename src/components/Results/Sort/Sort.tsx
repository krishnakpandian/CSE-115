import React, { useState } from 'react';
import SortDropdown from './SortDropdown';
import './Sort.css'

interface props {
  data,
  setData
}

let display;

const Sort: React.FC<props> = ({ data, setData }: props) => {
  const [input, setInput] = useState('');

  const updateSort = (input) => {
    setInput(input);

    switch (input) {
      case 'cos low high':
        sort(data.results, 'averageCost', 'low high');
        break;
      case 'cos high low':
        sort(data.results, 'averageCost', 'high low');
        break;
      case 'dis low high':
        sort(data.results, 'distance', 'low high');
        break;
      case 'dis high low':
        sort(data.results, 'distance', 'high low');
        break;
      default:
        getTime(data.results, input);
    }

    console.log("After Sort", data.results)
    setData(data)
  }

  const getTime = (locations, range) => {
    // temporary but need to break down string into appropriate time int

    if (range == 'tim low high') {
      // sort from low travel time to high
      locations = locations.sort(function (a, b) {
        return parseInt(a['travelTime']) - parseInt(b['travelTime']);
      });
      data.results = locations

    }
    else {
      // sort from high travel time to low
      locations = locations.sort(function (a, b) {
        return parseInt(b['travelTime']) - parseInt(a['travelTime']);
      });
      data.results = locations
    }
  }

  const sort = (locations, dataType, direction) => {
    if (direction == 'low high') {
      locations = locations.sort(function (a, b) {
        return a[dataType] - b[dataType];
      });
      data.results = locations
    }
    else {
      locations = locations.sort(function (a, b) {
        return b[dataType] - a[dataType];
      });
      data.results = locations
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