import React, { useState, useEffect } from 'react';
import SortDropdown from './SortDropdown';
import './Sort.css'

interface props {
  data,
  setData,
  saves,
  sortSaves,
  view
}

let display;

const Sort: React.FC<props> = ({ data, setData, saves, sortSaves, view }: props) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput('')
  }, [data.address]);

  const updateSort = (input) => {
    setInput(input);

    let sortedResults;
    let sortedSaves;

    switch (input) {
      case 'cos low high':
        sortedResults = sort(data.results, 'averageCost', 'low high');
        sortedSaves = sort(saves, 'averageCost', 'low high');
        break;
      case 'cos high low':
        sortedResults = sort(data.results, 'averageCost', 'high low');
        sortedSaves = sort(saves, 'averageCost', 'high low');
        break;
      case 'dis low high':
        sortedResults = sort(data.results, 'distance', 'low high');
        sortedSaves = sort(saves, 'distance', 'low high');
        break;
      case 'dis high low':
        sortedResults = sort(data.results, 'distance', 'high low');
        sortedSaves = sort(saves, 'distance', 'high low');
        break;
      case 'tim low high':
        sortedResults = sort(data.results, 'travelSeconds', 'low high');
        sortedSaves = sort(saves, 'travelSeconds', 'low high');
        break;
      default:
        sortedResults = sort(data.results, 'travelSeconds', 'high low');
        sortedSaves = sort(saves, 'travelSeconds', 'high low');
    }

    setData({ ...data, results: sortedResults });
    sortSaves(sortedSaves);
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

  display = ((data.address && (view == 'search')) || ((view == 'saved') && (saves.length > 0))) && (
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