import { NavBar, WaveBackground } from "../../shared/ui";
import { TekaInput } from "../../shared/ui";
import styles from "./style.module.scss";
import { Search } from "../../shared/assets";
import { TekaWidget } from "../../widgets";
export const Teka = () => {
  return (
    <WaveBackground>
      <div className={styles.container}>
        <TekaInput img={Search} />
        <TekaWidget label={'Просмотрено'}></TekaWidget>
        <TekaWidget label={'Рекомендации'}></TekaWidget>
        <NavBar />
      </div>
    </WaveBackground>
  );
};
