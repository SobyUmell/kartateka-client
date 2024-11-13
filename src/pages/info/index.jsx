import styles from "./style.module.scss";
import { InfoContainer } from "../../widgets/info-container";
import { eye, gypsum, hand, loudspeaker, arrowLeft } from "../../shared/assets";
import { Button } from "../../shared/ui";
import { useNavigate } from "react-router-dom";
export const Info = (props) => {
  const router = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <div className={styles.blur}>
          <img
            className={styles.absoluteArrow}
            onClick={() => {
              router("/profile");
            }}
            src={arrowLeft}
          />
          <div className={styles.hand}></div>
        </div>
      </div>
      <div className={styles.headerDiv}>
        <h2 className={styles.header}>Создайте первую метку за 0₽</h2>
      </div>
      <InfoContainer p={"Добавление вашей метки на карту"} img={eye} />
      <InfoContainer p={"Возможность создавать контент"} img={gypsum} />
      <InfoContainer p={"Редактирование мини-профиля"} img={loudspeaker} />
      <Button span="Upgrade">business</Button>
    </div>
  );
};
