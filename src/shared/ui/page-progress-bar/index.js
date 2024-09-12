import styles from "./style.module.scss";

export const PageProgressBar = ({ pageNumber }) => {
  return (
    <div className={styles.wrapper}>
      {[...new Array(3)].map((_, i) => (
        <div key={i} className={pageNumber >= i + 1 ? styles.activeBar : ""} />
      ))}
    </div>
  );
};
