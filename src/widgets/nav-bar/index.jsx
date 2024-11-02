import styles from "./style.module.scss";
import { mapIcon, houseIcon, Manager, penIcon } from "../../shared/assets";
import { NavBarItem } from "../../shared/ui";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
  const router = useNavigate();
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <NavBarItem
          icon={Manager}
          text="Профиль"
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
          icon={houseIcon}
          text="Бизнес"
          onClick={() => {
            router("/info");
          }}
        />
      </ul>
    </div>
  );
};
