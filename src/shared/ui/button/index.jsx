import styles from "./style.module.scss";
export const Button = ({ span, children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      <span className={styles.spanF}>{span + " "} </span>
      <span className={styles.spanS}>{children}</span>
    </button>
  );
};
