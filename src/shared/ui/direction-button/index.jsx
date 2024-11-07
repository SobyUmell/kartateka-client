import styles from "./style.module.scss";
import { arrowLeft, arrowRight } from "../../assets";
export const DirectionButton = ({
  type,
  onSubmit,
  text,
  onClick,
  direction,
}) => {
  if (direction) {
    return (
      <div
        onSubmit={onSubmit}
        type={type}
        className={styles.wrapper}
        onClick={onClick}
      >
        <button className={styles.button}>{text}</button>
        <img src={arrowRight} alt="arrow" className={styles.svg} />
      </div>
    );
  } else {
    return (
      <div
        onSubmit={onSubmit}
        type={type}
        className={styles.wrapper}
        onClick={onClick}
      >
        <img src={arrowLeft} alt="arrow" className={styles.svg} />
        <button className={styles.button}>{text}</button>
      </div>
    );
  }
};
