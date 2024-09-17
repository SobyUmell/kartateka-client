import styles from "./style.module.scss";
import { mapIcon, houseIcon, coffeeIcon, penIcon } from "../../assets";
export const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img src={houseIcon} alt="map" className={styles.mapIcon} />
          <span className={styles.span}>Главная</span>
        </li>
        <li className={styles.item}>
          <img src={mapIcon} alt="map" className={styles.mapIcon} />
          <span className={styles.span}>Главная</span>
        </li>
        <li className={styles.item}>
          <img src={penIcon} alt="map" className={styles.mapIcon} />
          <span className={styles.span}>Главная</span>
        </li>
        <li className={styles.item}>
          <img src={coffeeIcon} alt="map" className={styles.mapIcon} />
          <span className={styles.span}>Главная</span>
        </li>
      </ul>
    </div>
  );
};
