import { MapContainer, TileLayer } from "react-leaflet";
import "../../shared/styles/leaflet-override.scss";
import s from "./map.module.scss";
import "leaflet/dist/leaflet.css";
import { NavBar } from "../../widgets";
import { useEffect, useState } from "react";
import { Marker } from "react-leaflet";
import { TekaWidget } from "../../widgets";

export const MapPage = () => {
  const [open, setOpen] = useState(false);
  const [orgName, setOrgName] = useState("Organization Name");

  useEffect(() => {}, [open]); // когда открываем маркер будет подгружаться информация организации
  // I know where you live, your IP and MAC addresses are next
  const position = [47.212216916047225, 38.915121793521074];
  const bounds = [
    [47.15759108614136, 38.817677182933565],
    [47.30454649974391, 39.011686089791],
  ];
  const [pointer, setPointer] = useState("Light Mode");
  var marker = L.marker([17.385044, 78.486671]);
  const handleSwitch = (event) => {
    setPointer(event.target.value);
    console.log(pointer == "Dark Mode");
  };

  return (
    <div className={s.wrapper}>
      <div className={s.map_page}>
        <MapContainer
          style={{ height: "100%", margin: "0px" }}
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          maxBounds={bounds}
          maxBoundsViscosity={bounds}
          eventHandlers={{
            click: (e) => {
              console.log("marker clicked", e);
              setOpen(!open);
            },
          }}
        >
          <Marker
            eventHandlers={{
              click: (e) => {
                console.log("marker clicked", e);
                setOpen(!open);
              },
            }}
            position={position}
          ></Marker>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        </MapContainer>
        <NavBar style={{ position: "relative", bottom: "63px" }} />
        {open ? (
          <div className={s.bottomMenu}>
            <div>
              <img src="" alt=""></img>
              <div></div>
            </div>
            <div>
              <TekaWidget></TekaWidget>
            </div>
            <div>
              <p style={{textAlign: "center"}}>Меню</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
