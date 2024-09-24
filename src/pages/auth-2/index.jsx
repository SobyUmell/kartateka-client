import { DirectionButton } from "../../shared/ui";
import { PageProgressBar } from "../../shared/ui";
import { Input } from "../../shared/ui";
import { atsign, lock, city, user } from "../../shared/assets";
import styles from "./style.module.scss";
import { useState } from "react";
import { SelectTown } from "../../shared/ui";
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
    types: ["email", "password", "text"],
  };
  const townsList = [
    { value: "Таганрог", label: "Таганрог" },
    { value: "Махачкала", label: "Махачкала" },
    { value: "Киев(Россия)", label: "Киев(Россия)" },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <PageProgressBar pageNumber={2} />
        <div className={styles.content}>
          <h2 className={styles.header}>Создание аккаунта</h2>
          <div className={styles.inputWrapper}>
            {[...new Array(3)].map((value, index) => {
              return (
                <Input
                  setState={object.setStates[index]}
                  state={object.states[index]}
                  svg={object.svgs[index]}
                  key={index}
                  text={object.values[index]}
                  type={object.types[index]}
                />
              );
            })}
            <SelectTown
              townsList={townsList}
              label={"Город"}
              svg={city}
              setTown={setTown}
            />
          </div>
          <div className={styles.groupButton}>
            <DirectionButton text={"Продолжить"} direction={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
