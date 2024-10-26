import { DirectionButton } from "../../shared/ui";
import { PageProgressBar } from "../../shared/ui";
import { fingerPrint } from "../../shared/assets";
import styles from "./style.module.scss";
import { WaveBackground } from "../../shared/ui";
import { useNavigate } from "react-router-dom";
export const Auth1 = () => {
  const router = useNavigate();
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
          <DirectionButton text={"Продолжить"} direction={1} onClick={()=>{router("/auth-2");}} />
        </div>
      </div>
    </WaveBackground>
  );
};
