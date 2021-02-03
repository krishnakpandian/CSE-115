import React from 'react';
import './MapResult.css';
import GoogleMapReact from 'google-map-react';
import { props } from "../Results/result-body";

let map;

const MapResult: React.FC<props> = ({ results, statusCode, message, lat, lng, address }: props) => {
  map = address && (
    <div className="googleMap columns">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_API_KEY }}
        center={{ lat, lng }}
        defaultZoom={11}
      >
      </GoogleMapReact>
    </div>
  );

  return (
    <div className='MapResult'>
      {map}
    </div>
  );
}

export default MapResult;