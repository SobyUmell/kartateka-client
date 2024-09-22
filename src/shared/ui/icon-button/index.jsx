import styles from "./style.module.scss";
export const IconButton = ({ icon, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={icon} alt="icon" />
    </button>
  );
};
