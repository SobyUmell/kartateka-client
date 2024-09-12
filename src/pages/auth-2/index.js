import { DirectionButton } from "../../shared/ui";
import { PageProgressBar } from "../../shared/ui";
import { Input } from "../../shared/ui";
import { atsign, lock, city, user } from "../../shared/assets";
import styles from "./style.module.scss";
import { useState } from "react";
export const Auth2 = () => {
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
        <PageProgressBar pageNumber={2} />
        <div className={styles.content}>
          <h2 className={styles.header}>Создание аккаунта</h2>
          <div className={styles.inputWrapper}>
            {[...new Array(4)].map((value, index) => {
              return (
                <Input
                  setState={object.setStates[index]}
                  state={object.states[index]}
                  svg={object.svgs[index]}
                  key={index}
                  text={object.values[index]}
                />
              );
            })}
          </div>
          <div className={styles.groupButton}>
            <DirectionButton text={"Продолжить"} direction={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
