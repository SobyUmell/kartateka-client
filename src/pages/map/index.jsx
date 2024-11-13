import { MapContainer, TileLayer } from "react-leaflet";
import "../../shared/styles/leaflet-override.scss";
import s from "./map.module.scss";
import "leaflet/dist/leaflet.css";
import { NavBar } from "../../widgets";
import { useEffect, useState } from "react";
import { Marker } from "react-leaflet";
import { BottomMenu } from "../../widgets";
export const MapPage = () => {
  const [open, setOpen] = useState(false);
  const [orgImage, setOrgImage] = useState(undefined);
  const [orgName, setOrgName] = useState("Organization Name");
  const [type, setType] = useState("undefined");
  const [address, setAddress] = useState("undefined");
  const [more, setMore] = useState(false);

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
  const swap = () => {
    open ? setOpen(!open) : null;
    more ? setMore(!more) : null;
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
        >
          <Marker
            eventHandlers={{
              click: (e) => {
                console.log("marker clicked", e);
                setOpen(!open);
              },
            }}
            position={position}
          />
          <div
            style={{ width: "100%", height: "100%", position: "absolute" }}
            onClick={swap}
          />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
        <NavBar style={{ position: "relative", bottom: "63px" }} />
        <BottomMenu
          open={open}
          swap={swap}
          orgName={orgName}
          orgImage={orgImage}
          type={type}
          address={address}
        />
      </div>
    </div>
  );
};
