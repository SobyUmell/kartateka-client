import { useEffect, useState } from "react";
import { WaveBackground } from "../../shared/ui";
import { NavBar } from "../../widgets";
import styles from "./styles.module.scss";
import { ellipse } from "../../shared/assets";
export const Business = (props) => {
  const [orgName, setorgName] = useState("undefined");
  const [typeorg, settypeorg] = useState("undefined");
  const [addressorg, setaddressorg] = useState("undefined");
  useEffect(() => {}, []);
  return (
    <WaveBackground>
      <div className={styles.centeredDiv}>
        <div className={styles.container}>
          <img src={ellipse} alt="" />
          <div style={{ marginLeft: "10px",width:"100%" }}>
            <p className={styles.orgName}>{orgName}</p>
            <div className={styles.info}>
              <p className={styles.typeOrg}>{typeorg}</p>
              <p className={styles.addressOrg}>{addressorg}</p>
            </div>
          </div>
        </div>
        <textarea placeholder="описание" className={styles.textarea} name="" id=""></textarea>
        <div className={styles.menu}>
          <div></div>
        </div>
      </div>
      <footer>
        <NavBar />
      </footer>
    </WaveBackground>
  );
};
