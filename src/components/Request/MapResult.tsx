import React from 'react';
import './MapResult.css';
import GoogleMapReact from 'google-map-react';

// https://blog.logrocket.com/a-practical-guide-to-integrating-google-maps-in-react/

const location = {
  // temporary for google maps, delete later
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

interface results {
  cityName: string,
  distance?: number,
  travelTime?: number,
  averageCost?: number
}

interface props {
  results: results[],
  statusCode: number,
  message: string
}

const MapResult: React.FC<props> = ({ results, statusCode, message }: props) => {
  return (
    <div className='MapResult'>
      <div className="googleMap columns">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={17}
        >
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default MapResult;