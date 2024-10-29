import {
  DirectionButton,
  PageProgressBar,
  Input,
  SelectTown,
} from "../../shared/ui";
import { city, atsign, lock, user } from "../../shared/assets";
import styles from "./style.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { townsList } from "../../shared/model"; // испортируем список городов, которые поддерживает приложение
export const Auth2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* 
  const [name, setName] = useState("");
  const [town, setTown] = useState(townsList[0].value);
  */
  const object = {
    values: ["Почта", "Пароль", "Имя", "Город"],
    svgs: [atsign, lock, user, city],
    setStates: [setEmail, setPassword /* setName, setTown*/],
    states: [email, password /* name, town*/],
    types: ["email", "password", "text"],
  };
  const router = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <PageProgressBar pageNumber={2} />
        <div className={styles.content}>
          <h2 className={styles.header}>Создание аккаунта</h2>
          <div className={styles.inputWrapper}>
            <form>
              {[...new Array(2)].map((value, index) => {
                // чтобы отрисовать последний инпут заменить 2 на 3
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
              {/* закоментировал selector города
              <SelectTown
                townsList={townsList}
                label={"Город"}
                svg={city}
                setTown={setTown}
              />
              */}
            </form>
          </div>
          <div className={styles.groupButton}>
            <DirectionButton
              text={"Назад"}
              direction={0}
              onClick={() => {
                router("/auth-1");
              }}
            />
            <DirectionButton
              text={"Продолжить"}
              direction={1}
              onClick={() => {
                router("/auth-3");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
