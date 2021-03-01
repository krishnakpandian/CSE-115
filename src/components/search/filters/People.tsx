import React from 'react'
import './People.css';

interface props {
  currentPeop,
  setCurrentPeop
}

const People: React.FC<props> = ({ currentPeop, setCurrentPeop }: props) => {
  return (
    <div className='People field has-addons MarginPeopleFix'>
      <div className='control'>
        <button className='button is-static PeopleMargin'>People</button>
      </div>
      <div className="control">
        <div className="select is-primary is-rounded">
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
  );
};

export default People;