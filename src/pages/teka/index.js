import { NavBar, WaveBackground } from "../../shared/ui";
import { TekaInput } from "../../shared/ui";
import styles from "./style.module.scss";
import { Search } from "../../shared/assets";
export const Teka = () => {
  return (
    <WaveBackground>
      <div className={styles.container}>
        <TekaInput img={Search}/>
        <NavBar />
      </div>
    </WaveBackground>
  );
};
