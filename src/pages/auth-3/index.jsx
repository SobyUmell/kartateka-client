import { DirectionButton } from "../../shared/ui";
import { PageProgressBar } from "../../shared/ui";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

export const Auth3 = () => {
  const router = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <PageProgressBar pageNumber={3} />
        <div className={styles.content}>
        <div>
            <h2 className={styles.header}>Почти готово....</h2>
            <p className={styles.paragraph}>
              Пожалуйста, подтвердите свою личность через письмо
            </p>
          </div>
          <div className={styles.groupButton}>
            <DirectionButton
              text={"Назад"}
              direction={0}
              onClick={() => {
                router("/auth-2");
              }}
            />
            <DirectionButton text={"Продолжить"} direction={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
