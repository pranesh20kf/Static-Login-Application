import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for the missing marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;

const MapData = () => {
  // State to manage the selected map layer
  const [mapLayer, setMapLayer] = useState("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

  // Array of different map layer options
  const mapLayers = [
    { name: "OpenStreetMap", url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" },
    { name: "Topography", url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" },
    { name: "Dark", url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" },
    { name: "Satellite", url: "https://{s}.tile.jawg.io/jawg-satellite/{z}/{x}/{y}.png?access-token=YOUR_ACCESS_TOKEN" },
    { name: "Terrain", url: "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg" },
  ];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* Dropdown for map layer selection */}
      <div className="absolute top-4 left-4 z-10 bg-white p-2 rounded shadow-md">
        <label htmlFor="mapSelect" className="block text-sm font-medium text-gray-700 mb-1">Select Map View</label>
        <select
          id="mapSelect"
          onChange={(e) => setMapLayer(e.target.value)}
          className="p-2 border rounded"
        >
          {mapLayers.map((layer) => (
            <option key={layer.name} value={layer.url}>
              {layer.name}
            </option>
          ))}
        </select>
      </div>

      <MapContainer
        center={[28.6139, 77.2090]} // New Delhi, India
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        {/* TileLayer changes dynamically based on the selected map layer */}
        <TileLayer
          url={mapLayer}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marker for New Delhi */}
        <Marker position={[28.6139, 77.2090]}>
          <Popup>India</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapData;
