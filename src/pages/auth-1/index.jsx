import {
  DirectionButton,
  PageProgressBar,
  WaveBackground,
} from "../../shared/ui";
import { fingerPrint } from "../../shared/assets";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export const Auth1 = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const setPassword = (value) => {
    dispatch({ type: "SET_PASSWORD", password: value });
  };
  const setEmail = (value) => {
    dispatch({ type: "SET_EMAIL", isAuth: value });
  };
  return (
    <WaveBackground>
      <PageProgressBar pageNumber={1} />
      <div className={styles.content}>
        <img src={fingerPrint} alt="finger" className={styles.img} />
        <h2 className={styles.header}>Защитите свои данные</h2>
        <p className={styles.paragraph}>
          С помощью передовой системы авторизации{" "}
          <span className={styles.span}>concept id</span>
        </p>
        <div className={styles.groupButton}>
          <DirectionButton
            text={"Назад"}
            direction={0}
            onClick={() => {
              router("/");
              setPassword("");
              setEmail("");
            }}
          />
          <DirectionButton
            text={"Продолжить"}
            direction={1}
            onClick={() => {
              router("/auth-2");
            }}
          />
        </div>
      </div>
    </WaveBackground>
  );
};
