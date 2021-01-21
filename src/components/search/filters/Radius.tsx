import './Radius.css';

const Radius = ({ currentRad, setCurrentRad }) => {
  return (
    <div className='Radius'>
      <div className="field">
        <div className="control">
          <div className="select is-info">
            <select value={currentRad} onChange={(e) => setCurrentRad(e.target.value)}>
              <option>25 miles</option>
              <option>50 miles</option>
              <option>75 miles</option>
              <option>100+ miles</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radius;