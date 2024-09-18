import React from "react";
import {
  Input,
  InputNoBorder,
  NavBar,
  SelectTown,
  WaveBackground,
} from "../../shared/ui";
import styles from "./style.module.scss";
import { atsign, lock, city, user } from "../../shared/assets";

export const Profile = () => {
  const [file, setFile] = React.useState(null);
  const [fileUrl, setFileUrl] = React.useState(null);
  const [email, setEmail] = React.useState("tyrew3441@gmail.com");
  const [password, setPassword] = React.useState("12345678");
  const [name, setName] = React.useState("Дмитрий Пучков");
  const [town, setTown] = React.useState(null);
  const [nickName, setNickName] = React.useState("tsuomicasi");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setFileUrl(URL.createObjectURL(file));
    }
  };
  const townsList = [
    { value: "Таганрог", label: "Таганрог" },
    { value: "Махачкала", label: "Махачкала" },
    { value: "Киев(Россия)", label: "Киев(Россия)" },
  ];
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
        ></label>
      </div>
      <InputNoBorder onChange={setNickName} value={nickName} />
      <div className={styles.cotainerWithInput}>
        <Input
          setState={setEmail}
          state={email}
          text={"Почта"}
          type={"email"}
          svg={atsign}
        />
        <Input
          setState={setPassword}
          state={password}
          text={"Пароль"}
          type={"password"}
          svg={lock}
        />
        <Input
          setState={setName}
          state={name}
          text={"Имя"}
          type={"text"}
          svg={user}
        />
        <SelectTown townsList={townsList} label={"Город"} svg={city} />
      </div>

      <NavBar />
    </WaveBackground>
  );
};
