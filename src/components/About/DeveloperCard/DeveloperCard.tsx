import React from 'react';
import './DeveloperCard.css';
import {props} from '../Props/Props';


const DeveloperCard: React.FC<props> = ( prop: props) => {
    return (
      <>
        <div className="DeveloperCard">
            <div className="upper-container">
                <div className="image-container">
                    <img src={prop.image} alt="error"/>
                </div>
            </div>
            <div className="lower-container">
                <div className="name">{prop.name}</div>
                <div className="major">{prop.major}</div>
                <div className="description">{prop.description}</div>
                <a href={prop.profile} target="_blank" rel="noopener noreferrer"><button>Visit Profile</button></a>
            </div>
        </div>
      </>
    )
}

export default DeveloperCard;



