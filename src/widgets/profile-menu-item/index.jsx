import styles from "./styles.module.scss";
export const ProfileMenuItem = ({ text, img, textColor }) => {
  return (
    <div className={styles.container}>
      <p style={{ color: textColor }} className={styles.text}>
        {text}
      </p>
      <img className={styles.img} src={img} alt="error" />
    </div>
  );
};
