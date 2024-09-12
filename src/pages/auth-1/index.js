import { DirectionButton } from "../../shared/ui";
import { PageProgressBar } from "../../shared/ui";
import { fingerPrint } from "../../shared/assets";
import styles from "./style.module.scss";
export const Auth1 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <PageProgressBar pageNumber={1} />
        <div className={styles.content}>
          <img src={fingerPrint} alt="finger" className={styles.img} />
          <h2 className={styles.header}>Защитите свои данные</h2>
          <p className={styles.paragraph}>
            С помощью передовой системы авторизации{" "}
            <span className={styles.span}>concept id</span>
          </p>
          <div className={styles.groupButton}>
            <DirectionButton text={"Назад"} direction={0} />
            <DirectionButton text={"Продолжить"} direction={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
