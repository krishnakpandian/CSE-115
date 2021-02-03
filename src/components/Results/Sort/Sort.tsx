import React from 'react';
import SortCost from './SortCost';
import SortDistance from './SortDistance';
import SortTime from './SortTime';
import './Sort.css'

interface props {
  data,
  setData
}

const Sort: React.FC<props> = ({ data, setData }: props) => {
  return (
    <div className='Sort'>
      <SortCost />
      <SortDistance />
      <SortTime />
    </div>
  );
};

export default Sort;