import React from 'react';
import { developers } from './Props/developers';
import './About.css';
import DeveloperCard from './DeveloperCard/DeveloperCard';
import Fade from 'react-reveal/Fade';

const About: React.FC = () => {
  return (
    <>
      <div className="about-container">
        <h1 className="navbar-item title is-1 is-flex is-horizontal-center" id="prompt_text">
          About Us
        </h1>
        <Fade down delay={500} distance={"0.5em"}>
          <div className="developer-list">
            {developers.map((developer, i) => {
              return (
                <div className="developer-card" key={i}>
                  <DeveloperCard {...developer} />
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