import { Input, WaveBackground } from "../../shared/ui";
import { useState } from "react";
import { city, atsign, lock, user, smallEye } from "../../shared/assets";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import axios from "axios";
import { API_URL } from "../../http";
export const Login = (props) => {
  const [visible, setVisible] = useState(false);
  const swapstate = () => {
    setVisible(!visible);
  };
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const setEmail = (value) => {
    dispatch({ type: "SET_EMAIL", email: value });
  };
  const setPassword = (value) => {
    dispatch({ type: "SET_PASSWORD", password: value });
  };
  const setAuth = (value) => {
    dispatch({ type: "SET_AUTH", isAuth: value });
  };
  const setInfo = (value) => {
    dispatch({ type: "SET_INFO", info: value });
  };
  const object = {
    values: ["Почта", "Пароль"],
    svgs: [atsign, lock, user, city],
    setStates: [setEmail, setPassword],
    states: [email, password],
    types: ["email", "password", "text"],
  };
  const router = useNavigate();
  const navigateToRegistration = () => {
    router("/auth-1");
    setEmail("");
    setPassword("");
  };
  const login = async (email, password) => {
    console.log("Попытка входа");
    try {
      const responce = await AuthService.login(email, password);
      console.log(responce);
      localStorage.setItem("token", responce.data.accessToken);
      setAuth(true);
      setInfo(responce.data.user);
    } catch (e) {
      console.log(e.responce?.data?.message);
    }
  };
  

  const logout = async () => {
    console.log("Попытка выхода");
    try {
      const responce = await AuthService.logout();
      localStorage.removeItem("token");
      setAuth(false);
      setEmail("");
      setPassword("");
      setInfo({});
    } catch (e) {
      console.log(e.responce?.data?.message);
    }
  };

  return (
    <WaveBackground>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h2 className={styles.headerH2}>Добро пожаловать в</h2>
          <h1 className={styles.headerH1}>KARTATEKA</h1>
        </header>
        <form action="">
          <img onClick={swapstate} className={styles.eye} src={smallEye}></img>
          {[...new Array(2)].map((value, index) => {
            return (
              <Input
                setState={object.setStates[index]}
                state={object.states[index]}
                svg={object.svgs[index]}
                key={index}
                text={object.values[index]}
                type={object.types[index]}
                visible={visible}
                setVisible={setVisible}
              />
            );
          })}
        </form>
        <div className={styles.preFotter}>
          <button
            onClick={() => {
              login(email, password);
            }}
            className={styles.btn}
          >
            Войти
          </button>
          <p className={styles.preFotterP}>
            Нет аккаунта? &nbsp;
            <span
              onClick={navigateToRegistration}
              className={styles.preFotterSPAN}
            >
              Зарегистрируйся
            </span>
          </p>
        </div>
      </div>
      <footer className={styles.footer}>pre alpha 0.0.1</footer>
    </WaveBackground>
  );
};
