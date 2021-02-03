import React, { useState } from 'react';
import SortDropdown from './SortDropdown';
import './Sort.css'

interface props {
  data,
  setData
}

let display;

const Sort: React.FC<props> = ({ data, setData }: props) => {
  const [input, setInput] = useState('cost low high');

  const updateSort = (input) => {
    setInput(input);
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