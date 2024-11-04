import styles from "./style.module.scss";
export const NavBarItem = ({ icon, text , onClick}) => {
  return (
    <li className={styles.item} onClick={onClick}>
      <img src={icon} alt="map" className={styles.mapIcon} />
      <span className={styles.span}>{text}</span>
    </li>
  );
};
