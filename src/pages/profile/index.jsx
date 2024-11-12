import { useState } from "react";
import { Input, InputNoBorder, WaveBackground } from "../../shared/ui";
import { NavBar, TekaWidget } from "../../widgets";
import styles from "./style.module.scss";
import {
  atsign,
  lock,
  city,
  user,
  saveIcon,
  editProfile,
  smallEye,
} from "../../shared/assets";
import {
  miniProfileIMGs,
  miniProfileNames,
} from "../../widgets/teka-widget/model";
import { useSelector, useDispatch } from "react-redux";
export const Profile = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const swapstate = () => {
    setVisible(!visible);
  };
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const setEmail = (value) => {
    dispatch({ type: "SET_EMAIL", email: value });
  };
  const setPassword = (value) => {
    dispatch({ type: "SET_PASSWORD", password: value });
  };
  const setPhoto = (value) => {
    dispatch({ type: "SET_PHOTO", photo: value });
  };
  const [flag, setFlag] = useState(false); // длина массива с моими местами
  const nickname = useSelector((state) => state.user.info.username);
  const infoTemp = useSelector((state) => state.user.info);
  const fileUrl = useSelector((state) => state.user.photo);
  const setNickname = (value) => {
    let info = {};
    for (let field in infoTemp) {
      info[field] = infoTemp[field];
    }
    info = { ...info, username: value };
    console.log(info);
    dispatch({ type: "SET_INFO", info: info });
  };

  const [isDisabled, setIsDisabled] = useState(true);

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // схватили выбранный файл
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };
  const object = {
    values: ["Почта", "Пароль"],
    svgs: [atsign, lock, user, city],
    setStates: [setEmail, setPassword],
    states: [email, password],
    types: ["email", "password"],
    autocomplete: ["off", "current-password"],
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
        onChange={setNickname}
        value={nickname}
        onClick={() => setIsDisabled(!isDisabled)}
        icon={isDisabled ? editProfile : saveIcon}
      />
      <div className={styles.container}>
        <div className={styles.cotainerWithInput}>
          <img
            onClick={!isDisabled ? swapstate : null}
            className={styles.eye}
            src={smallEye}
          ></img>
          {[...new Array(2)].map((value, index) => (
            <Input
              key={index}
              disabled={isDisabled}
              setState={object.setStates[index]}
              value={object.states[index]}
              text={object.values[index]}
              type={object.types[index]}
              svg={object.svgs[index]}
              autocomplete={object.autocomplete[index]}
              setVisible={setVisible}
              visible={visible}
            />
          ))}
        </div>
        <div className={styles.cotainerForWidget}>
          <TekaWidget
            imgs={miniProfileIMGs}
            names={miniProfileNames}
            clickHandler={() => {
              setFlag(true);
            }}
            disableInfo={false}
            label={"Просмотрено"}
          />
        </div>
      </div>
      <NavBar />
    </WaveBackground>
  );
};
