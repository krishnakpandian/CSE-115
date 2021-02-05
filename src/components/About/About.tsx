import React from 'react';
import {developers} from './Props/developers';
import './About.css';
import DeveloperCard from './DeveloperCard/DeveloperCard';
import Fade from 'react-reveal/Fade';

const About: React.FC = () => {
    return (
      <>
        <div className="about-container">
          <div className= "title"> About Us</div>
          <Fade down delay={500} distance={"0.5em"}>
          <div className="developer-list">
          {developers.map((developer, i) => {
                return(
                <div className="developer-card" key={i}>
                    <DeveloperCard {...developer}/>
                </div>
            )    
          })}
          </div>
          </Fade>
        </div>
      </>
    )
  }

export default About;