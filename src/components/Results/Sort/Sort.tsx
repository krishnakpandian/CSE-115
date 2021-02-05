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
      default:
        sorted = getTime(data.results, input);
    }

    setData({ ...data, results: sorted });
  }

  const getTime = (results, range) => {
    // convert each travel time from string to minutes
    results.forEach(function (item) {
      item['travelTime'] = convert(item['travelTime']);
    });

    // sort
    let sorted;
    if (range == 'tim low high') {
      sorted = sort(results, 'travelTime', 'low high');
    }
    else {
      sorted = sort(results, 'travelTime', 'high low');
    }

    // convert travel time from minutes back to string
    sorted.forEach(function (item) {
      item['travelTime'] = convert(item['travelTime']);
    });

    return sorted;
  }

  const convert = (time) => {
    if (isNaN(time)) {
      // convert from string to number of minutes
      let sum = 0;
      const str = time.split(" ");
      sum += convertString(parseInt(str[0]), str[1]);
      if (str.length > 2) {
        sum += convertString(parseInt(str[2]), str[3]);
      }
      return sum;
    }
    else {
      // convert from number of minutes to string
      let str = '';

      // days
      const days = Math.trunc(time / (60 * 24));
      if (days > 0) {
        if (days > 1) {
          str += days + ' days '
        }
        else {
          str += days + ' day '
        }
        time = time % (60 * 24);
      }

      // hours
      const hours = Math.trunc(time / 60);
      if (hours > 0) {
        if (hours > 1) {
          str += hours + ' hours '
        }
        else {
          str += hours + ' hour '
        }
        time = time % 60;
      }

      // minutes
      if (time > 0) {
        if (time > 1) {
          str += time + ' mins'
        }
        else {
          str += time + ' min'
        }
      }

      return str;
    }
  }

  const convertString = (time, unit) => {
    if (unit.includes('min')) {
      return time;
    }
    else if (unit.includes('hour')) {
      return time * 60;
    }
    else if (unit.includes('day')) {
      return time * 24 * 60;
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