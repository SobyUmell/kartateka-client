import styles from "./style.module.scss";
export const Button = ({ onclick, style, span, children, ...props }) => {
  return (
    <button
      onClick={onclick}
      className={styles.button}
      style={style}
      {...props}
    >
      <span className={styles.spanF}>{span + " "} </span>
      <span className={styles.spanS}>{children}</span>
    </button>
  );
};
