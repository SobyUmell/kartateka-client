import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "../../shared/styles/leaflet-override.css";
import s from "./map.module.scss";
import "leaflet/dist/leaflet.css";
export const MapPage = () => {
  // I know where you live, your IP and MAC addresses are next
  const position = [47.212216916047225, 38.915121793521074];
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};
