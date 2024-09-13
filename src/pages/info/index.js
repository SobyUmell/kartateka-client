import styles from "./style.module.scss";
export const Info = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <div className={styles.blur}>
          <p className={styles.p}>
            buisness<span className={styles.span}>Karta</span>
          </p>
        </div>
      </div>
      <div className={styles.headerDiv}>
        <h2 className={styles.header}>Создайте первую метку за 0₽</h2>
      </div>
    </div>
  );
};
