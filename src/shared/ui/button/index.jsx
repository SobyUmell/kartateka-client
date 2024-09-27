import styles from "./style.module.scss";
export const Button = ({ onclick,spanStyle, style, span, children, ...props }) => {
  return (
    <button
      onClick={onclick}
      className={styles.button}
      style={style}
      {...props}
    >
      <span style={spanStyle} className={styles.spanF}>{span + " "} </span>
      <span className={styles.spanS}>{children}</span>
    </button>
  );
};
