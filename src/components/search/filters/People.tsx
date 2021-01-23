import './People.css';

const People = ({ currentPeop, setCurrentPeop }) => {
  return (
    <div className='People'>
      <div className="field subtitle is-6">
        People
        <div className="control">
          <div className="select is-primary">
            <select value={currentPeop} onChange={(e) => setCurrentPeop(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option value='5'>5+</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;