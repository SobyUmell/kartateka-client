import styles from "./style.module.scss";
import { mapIcon, houseIcon, coffeeIcon, penIcon } from "../../assets";
export const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img src={houseIcon} alt="house" className={styles.mapIcon} />
          <span className={styles.span}>Главная</span>
        </li>
        <li className={styles.item}>
          <img src={mapIcon} alt="map" className={styles.mapIcon} />
          <span className={styles.span}>Карта</span>
        </li>
        <li className={styles.item}>
          <img src={penIcon} alt="teka" className={styles.mapIcon} />
          <span className={styles.span}>Тека</span>
        </li>
        <li className={styles.item}>
          <img src={coffeeIcon} alt="info" className={styles.mapIcon} />
          <span className={styles.span}>Инфо</span>
        </li>
      </ul>
    </div>
  );
};
