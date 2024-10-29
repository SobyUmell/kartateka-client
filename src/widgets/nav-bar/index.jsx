import styles from "./style.module.scss";
import { mapIcon, houseIcon, coffeeIcon, penIcon } from "../../shared/assets";
import { NavBarItem } from "../../shared/ui";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
  const router = useNavigate();
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <NavBarItem
          icon={houseIcon}
          text="Главная"
          onClick={() => {
            router("/profile");
          }}
        />
        <NavBarItem
          icon={mapIcon}
          text="Карта"
          onClick={() => {
            router("/map");
          }}
        />
        <NavBarItem
          icon={penIcon}
          text="Тека"
          onClick={() => {
            router("/teka");
          }}
        />
        <NavBarItem
          icon={coffeeIcon}
          text="Инфо"
          onClick={() => {
            router("/info");
          }}
        />
      </ul>
    </div>
  );
};
