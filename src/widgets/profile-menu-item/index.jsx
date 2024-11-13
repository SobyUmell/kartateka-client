import styles from "./styles.module.scss";
export const ProfileMenuItem = ({ text, img }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <img className={styles.img} src={img} alt="error" />
    </div>
  );
};
