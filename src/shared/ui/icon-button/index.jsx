import styles from "./style.module.scss";
export const IconButton = ({ icon, onClick, withBackground }) => {
  return (
    <button
      className={withBackground ? styles.buttonWithBackground : styles.button}
      onClick={onClick}
    >
      <img src={icon} alt="icon" />
    </button>
  );
};
