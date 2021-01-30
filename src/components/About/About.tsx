import React from 'react';
import {developers} from './Props/developers';
import './About.css';
import DeveloperCard from './DeveloperCard/DeveloperCard';

const About: React.FC = () => {
    return (
      <>
        <div className="about-container">
          <div className= "title"> About Us</div>
          <div className="developer-list">
          {developers.map((developer, i) => {
                return(
                <div className="developer-card" key={i}>
                    <DeveloperCard {...developer}/>
                </div>
            )    
          })}
          </div>
        </div>
      </>
    )
  }

export default About;