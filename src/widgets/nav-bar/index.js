import styles from "./style.module.scss";
import { mapIcon, houseIcon, coffeeIcon, penIcon } from "../../shared/assets";
import { NavBarItem } from "../../shared/ui";
export const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <NavBarItem icon={houseIcon} text="Главная" />
        <NavBarItem icon={mapIcon} text="Карта" />
        <NavBarItem icon={penIcon} text="Тека" />
        <NavBarItem icon={coffeeIcon} text="Инфо" />
      </ul>
    </div>
  );
};
