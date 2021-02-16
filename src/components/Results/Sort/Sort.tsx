import React, { useState, useEffect } from 'react';
import SortDropdown from './SortDropdown';
import './Sort.css'

interface props {
  data,
  setData
}

let display;

const Sort: React.FC<props> = ({ data, setData }: props) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput('')
  }, [data.address]);

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
      case 'tim low high':
        sorted = sort(data.results, 'travelSeconds', 'low high');
        break;
      default:
        sorted = sort(data.results, 'travelSeconds', 'high low');
    }

    setData({ ...data, results: sorted });
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