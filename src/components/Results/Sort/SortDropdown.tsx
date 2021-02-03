import React from 'react';
import './SortDropdown.css'

interface props {
  currentSort,
  setCurrentSort
}

const SortDropdown: React.FC<props> = ({ currentSort, setCurrentSort }: props) => {
  return (
    <div className='SortDropdown field has-addons'>
      <div className='control'>
        <button className='button is-static SortMargin'>Sort By</button>
      </div>
      <div className="control">
        <div className="select is-primary is-rounded">
          <select value={currentSort} onChange={(e) => setCurrentSort(e.target.value)}>
            <option value='cos low high'>Cost (Low to High)</option>
            <option value='cos high low'>Cost (High to Low)</option>
            <option value='dis low high'>Distance (Low to High)</option>
            <option value='dis high low'>Distance (High to Low)</option>
            <option value='tim low high'>Travel Time (Low to High)</option>
            <option value='tim high low'>Travel Time (High to Low)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SortDropdown;