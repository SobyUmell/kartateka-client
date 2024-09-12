import { DirectionButton } from "../../shared/ui";
import { PageProgressBar } from "../../shared/ui";
import { Input } from "../../shared/ui";
import { atsign, lock, city, user } from "../../shared/assets";
import styles from "./style.module.scss";
import { useState } from "react";
export const Auth3 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [town, setTown] = useState("");
  const object = {
    values: ["Почта", "Пароль", "Имя", "Город"],
    svgs: [atsign, lock, user, city],
    setStates: [setEmail, setPassword, setName, setTown],
    states: [email, password, name, town],
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <PageProgressBar pageNumber={3} />
        <div className={styles.content}>
          <h2 className={styles.header}>Почти готово....</h2>
          <p className={styles.paragraph}>
          Пожалуйста, подтвердите свою личность через письмо
            
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
