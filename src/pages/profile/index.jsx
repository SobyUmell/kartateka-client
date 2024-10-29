import { useState } from "react";
import {
  Input,
  InputNoBorder,
  SelectTown,
  WaveBackground,
} from "../../shared/ui";
import { saveIcon, editProfile } from "../../shared/assets";
import { NavBar } from "../../widgets";
import styles from "./style.module.scss";
import { atsign, lock, city, user } from "../../shared/assets";
import { townsList } from "../../shared/model";
import { TekaWidget } from "../../widgets";

export const Profile = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false); // длина массива с моими местами
  //const [name, setName] = useState("");
  //const [town, setTown] = useState(townsList[0].value);
  const [nickName, setNickName] = useState("tsuomicasi");
  const [isDisabled, setIsDisabled] = useState(true);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileUrl(URL.createObjectURL(file));
    }
  };
  const object = {
    values: ["Почта", "Пароль", "Имя", "Город"],
    svgs: [atsign, lock, user, city],
    setStates: [setEmail, setPassword /* setName, setTown*/],
    states: [email, password /* name, town*/],
    types: ["email", "password", "text"],
  };
  return (
    <WaveBackground>
      <div className={styles.wrapper}>
        <input
          id="input_file"
          type="file"
          onChange={handleFileChange}
          className={styles.inputImg}
        />
        <label
          className={styles.inputLabel}
          htmlFor="input_file"
          style={fileUrl ? { backgroundImage: `url(${fileUrl})` } : null}
        >
          {fileUrl ? null : <span>Нажмите, чтобы добавить фото профиля</span>}
        </label>
      </div>
      <InputNoBorder
        disabled={isDisabled}
        onChange={setNickName}
        value={nickName}
        onClick={() => setIsDisabled(!isDisabled)}
        icon={isDisabled ? editProfile : saveIcon}
      />
      <div className={styles.container}>
        <div className={styles.cotainerWithInput}>
          <form>
            {[...new Array(2)].map((value, index) => (
              <Input
                key={index}
                disabled={isDisabled}
                setState={object.setStates[index]}
                state={object.states[index]}
                text={object.values[index]}
                type={object.types[index]}
                svg={object.svgs[index]}
              />
            ))}
            {/*<SelectTown
              townsList={townsList}
              label={"Город"}
              svg={city}
              disabled={isDisabled}
              setTown={setTown}
            /> */}
          </form>
        </div>
        <div className={styles.cotainerForWidget}>
          <TekaWidget
            clickHandler={() => {
              setFlag(true);
            }}
            label={"Просмотрено"}
          />
        </div>
      </div>
      <NavBar />
    </WaveBackground>
  );
};
