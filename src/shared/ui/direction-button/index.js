import styles from "./style.module.scss";
import svgRight from "../../assets/arrow-right.svg";
import svgLeft from "../../assets/arrow-left.svg";
export function DirectionButton({ text, onClick, direction }) {
  if (direction) {
    return (
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={onClick}>
          {text}
        </button>
        <img src={svgRight} alt="arrow" className={styles.svg} />
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <img src={svgLeft} alt="arrow" className={styles.svg} />
        <button className={styles.button} onClick={onClick}>
          {text}
        </button>
      </div>
    );
  }
}
