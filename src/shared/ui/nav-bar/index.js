import styles from "./style.module.scss";
import { mapIcon, houseIcon, coffeeIcon, penIcon } from "../../assets";
export const NavBar = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <img src={mapIcon} alt="map" className={styles.mapIcon} />
        <span>Главная</span>
      </li>
    </ul>
  );
};
