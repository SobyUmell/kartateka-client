import s from "./map.module.scss";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
export const MapPage = () => {
  // I know where you live, your IP and MAC addresses are next
  const position = [47.212216916047225, 38.915121793521074];
  return (
    <div className={s.map_page}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
