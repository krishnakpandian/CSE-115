import React from 'react';
import GoogleMapReact from 'google-map-react';
import './MapResult.css';

interface props {
  data,
  view
}

let map;

const MapResult: React.FC<props> = ({ data, view }: props) => {
  const lat = data.lat;
  const lng = data.lng;

  map = data.address && (view == 'search') && (
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
