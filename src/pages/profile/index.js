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
const townsList = [
  { value: "Таганрог", label: "Таганрог" },
  { value: "Махачкала", label: "Махачкала" },
  { value: "Киев(Россия)", label: "Киев(Россия)" },
];
export const Profile = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [email, setEmail] = useState("tyrew3441@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [name, setName] = useState("Дмитрий Пучков");
  const [town, setTown] = useState(townsList[0].value);
  const [nickName, setNickName] = useState("tsuomicasi");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileUrl(URL.createObjectURL(file));
    }
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
      <div className={styles.cotainerWithInput}>
        <Input
          disabled={isDisabled}
          setState={setEmail}
          state={email}
          text={"Почта"}
          type={"email"}
          svg={atsign}
        />
        <Input
          disabled={isDisabled}
          setState={setPassword}
          state={password}
          text={"Пароль"}
          type={"password"}
          svg={lock}
        />
        <Input
          disabled={isDisabled}
          setState={setName}
          state={name}
          text={"Имя"}
          type={"text"}
          svg={user}
        />
        <SelectTown
          townsList={townsList}
          label={"Город"}
          svg={city}
          disabled={isDisabled}
          setTown={setTown}
        />
      </div>
      <NavBar />
    </WaveBackground>
  );
};
