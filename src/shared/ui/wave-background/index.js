import styles from "./style.module.scss";
export const WaveBackground = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>{children}</div>
    </div>
  );
};
