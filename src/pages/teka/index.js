import { NavBar, WaveBackground } from "../../shared/ui";
import { TekaInput } from "../../shared/ui";
import styles from "./style.module.scss";
import { Search } from "../../shared/assets";
import { TekaWidget } from "../../widgets/teka-widget";
export const Teka = () => {
  return (
    <WaveBackground>
      <div className={styles.container}>
        <TekaInput img={Search} />
        <TekaWidget h2={'Просмотренно'}/>
        <TekaWidget h2={'Рекомендации'}/>
        <NavBar />
      </div>
    </WaveBackground>
  );
};
