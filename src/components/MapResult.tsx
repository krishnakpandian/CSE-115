import './MapResult.css';
import GoogleMapReact from 'google-map-react';

// https://blog.logrocket.com/a-practical-guide-to-integrating-google-maps-in-react/

const MapResult = ({ location, zoomLevel }) => {
  return (
    <div className='MapResult'>
      <div className="googleMap">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default MapResult;