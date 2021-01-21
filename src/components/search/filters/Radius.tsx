import './Radius.css';

const Radius = ({ currentRad, setCurrentRad }) => {
  return (
    <div className='Radius'>
      <div className="field subtitle is-6">
        Radius
        <div className="control">
          <div className="select is-info">
            <select value={currentRad} onChange={(e) => setCurrentRad(e.target.value)}>
              <option value='10'>within 10 miles</option>
              <option value='25'>within 25 miles</option>
              <option value='50'>within 50 miles</option>
              <option value='75'>within 75 miles</option>
              <option value='100'>within 100 miles</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radius;