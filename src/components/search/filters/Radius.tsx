import React from "react";
import './Radius.css';

interface props {
  currentRad: number,
  setCurrentRad
}

const Radius: React.FC<props> = ({ currentRad, setCurrentRad }: props) => {
  return (
    <div className='Radius field has-addons MarginRadiusFix'>
      <div className='control'>
        <button className='button is-static RadiusMargin'>Radius</button>
      </div>
      <div className="control">
        <div className="select is-primary is-rounded">
          <select value={currentRad} onChange={(e) => setCurrentRad(e.target.value)}>
            <option value='10'>within 10 km</option>
            <option value='25'>within 25 km</option>
            <option value='50'>within 50 km</option>
            <option value='75'>within 75 km</option>
            <option value='100'>within 100 km</option>
            <option value='150'>within 150 km</option>
            <option value='200'>within 200 km</option>
            <option value='300'>within 300 km</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Radius;