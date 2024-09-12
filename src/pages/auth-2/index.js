import { DirectionButton } from "../../shared/ui";
import { PageProgressBar } from "../../shared/ui";
import styles from "./style.module.scss";
export const Auth2 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <PageProgressBar pageNumber={1} />
        <div className={styles.content}>
          <h2 className={styles.header}>Создание аккаунта</h2>

          <div className={styles.groupButton}>
            <DirectionButton text={"Продолжить"} direction={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
