import { DirectionButton } from "../../shared/ui";
import { PageProgressBar } from "../../shared/ui";
import finger from "../../shared/assets/finger-print.png";
import styles from "./style.module.scss";
export function Auth1() {
  return (
    <div className={styles.wrapper}>
      <PageProgressBar pageNumber={1} />

      <img src={finger} alt="finger" className={styles.img} />
      <h2 className={styles.header}>Защитите свои данные</h2>
      <p className={styles.paragraph}>
        С помощью передовой системы авторизации{" "}
        <span className={styles.span}>concept id</span>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "22px",
          paddingRight: "22px",
          alignContent: "center",
        }}
      >
        <DirectionButton text={"Назад"} direction={0} />
        <DirectionButton text={"Продолжить"} direction={1} />
      </div>
    </div>
  );
}
