import styles from "./style.module.scss";
import { InfoContainer } from "../../widgets/info-container";
import {eye, gypsum, hand, loudspeaker } from "../../shared/assets";
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
      <InfoContainer p={"Добавление вашей метки на карту"} img={eye}></InfoContainer>
      <InfoContainer p={"Возможность создавать контент"} img={gypsum}></InfoContainer>
      <InfoContainer p={"Редактирование мини-профиля"} img={loudspeaker} ></InfoContainer>
    </div>
  );
};
