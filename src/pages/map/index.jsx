import { MapContainer, TileLayer } from "react-leaflet";
import "../../shared/styles/leaflet-override.scss";
import s from "./map.module.scss";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
export const MapPage = () => {
  // I know where you live, your IP and MAC addresses are next
  const position = [47.212216916047225, 38.915121793521074];
  const bounds = [
    [47.15759108614136, 38.817677182933565],
    [47.30454649974391, 39.011686089791],
  ];
  const [pointer, setPointer] = useState("Light Mode");

  const handleSwitch = (event) => {
    setPointer(event.target.value);
    console.log(pointer == "Dark Mode");
  };
  return (
    <div className={s.map_page}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        maxBounds={bounds}
        maxBoundsViscosity={bounds}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};
