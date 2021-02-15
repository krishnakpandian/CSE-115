import React from 'react';
import './AboutProduct.css';
import truck_logo from '../../assets/moving_truck.png'
import form_logo from '../../assets/form_icon.png'
import apartment_logo from '../../assets/apartment_icon.png'

const AboutProduct: React.FC = () => {
    return(
        <>
        <div className="columns is-centered" id="about_section">
        <div className="column is-one-third">
          <div id="info_card">
            <div className='is-flex is-horizontal-center'>
              <figure className='image is-64x64'><img src={form_logo}></img></figure>
            </div>
            <h1 className="title is-2"> Search </h1>
            <p className="is-size-4">Enter an address to receive vital information
              about cost of living, traffic, and distances to 
              places to visit.
            </p>
            </div>
        </div>
        <div className="column is-one-third">
          <div id="info_card">
            <div className='is-flex is-horizontal-center'>
              <figure className='image is-64x64'><img src={apartment_logo}></img></figure>
            </div>
            <h1 className="title is-2"> Choose </h1>
            <p className="is-size-4">Pick a place that fits your creteria from the results
              and save it along with other relevant links. 
            </p>
          </div>
        </div>
        <div className="column is-one-third">
          <div id="info_card">
              <div className='is-flex is-horizontal-center'>
                <figure className='image is-64x64'><img src={truck_logo}></img></figure>
              </div>
              <h1 className="title is-2"> Relocate </h1>
              <p className="is-size-4">Now that you are informed and prepared, it is time to make your 
                life-changing move. 
              </p>
              
            </div>
          </div>
        </div>
        </>
    )
}

export default AboutProduct;