import React from 'react';
import './Mapa.scss';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Mapa() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAAgamXNjHe8mopZlUwY4JVeh2CJkbihSk" }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
}
