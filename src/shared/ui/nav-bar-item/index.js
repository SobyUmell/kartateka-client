import styles from "./style.module.scss";
export const NavBarItem = ({ icon, text }) => {
  return (
    <li className={styles.item}>
      <img src={icon} alt="map" className={styles.mapIcon} />
      <span className={styles.span}>{text}</span>
    </li>
  );
};
