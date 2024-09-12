import styles from "./style.module.scss";
import { arrowLeft, arrowRight } from "../../assets";
export const DirectionButton = ({ text, onClick, direction }) => {
  if (direction) {
    return (
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={onClick}>
          {text}
        </button>
        <img src={arrowRight} alt="arrow" className={styles.svg} />
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <img src={arrowLeft} alt="arrow" className={styles.svg} />
        <button className={styles.button} onClick={onClick}>
          {text}
        </button>
      </div>
    );
  }
};
