import { NavBar } from "../../widgets";
import styles from "./style.module.scss";
import mmrgl from 'mmr-gl';
import { useEffect } from 'react'
import 'mmr-gl/dist/mmr-gl.css';

export const Map = () => {
    useEffect( () => {
        mmrgl.accessToken = '6960065e78ec62fc5f7ae70b0472ffcb37ad03630e3073560b9c8dba3e3dff83';
     
        const map = new mmrgl.Map({
          container: 'map',
          zoom: 8,
          center: [37.6165, 55.7505],
          style: 'mmr://api/styles/dark_style.json',
          hash: true,
        })
     
        return () => {
          if (map) map.remove();
        }
      }, [])
  return (
    <div className={styles.container}>
        <div id="map" className={styles.map}>

        </div>
        <NavBar />
    </div>
  );
};
