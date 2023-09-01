import React from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import icon from './icon';

const position = [51.505, -0.09]

const Map = (props) => {
  return (
    <div>

<MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{width: "100vw", height: "100vh"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker icon={icon} position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
      
    </div>
  )
}

export default Map
