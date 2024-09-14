import styles from "./style.module.scss";
export const InfoContainer = ({ img, p }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerFlex}>
        <img className={styles.img} src={img} alt={'error'}></img>
        <p className={styles.p}>{p}</p>
      </div>
    </div>
  );
};
