import { useEffect, useState } from "react";
import { WaveBackground } from "../../shared/ui";
import { NavBar, ProfileMenuItem } from "../../widgets";
import styles from "./styles.module.scss";
import { gypsum, loudspeaker, ellipse } from "../../shared/assets";
export const Business = (props) => {
  const textOutsideArray = ["публикации", "Меню"];
  const imgArray = [gypsum, loudspeaker];
  const textArray = ["TEKA", "KARTA"];
  const colorsArray = ["#DBC3FD", "#3F93FA"];
  const [orgName, setorgName] = useState("undefined");
  const [typeorg, settypeorg] = useState("undefined");
  const [addressorg, setaddressorg] = useState("undefined");
  useEffect(() => {}, []);
  return (
    <>
      <WaveBackground>
        <div className={styles.topBlock}></div>
        <div className={styles.centeredDiv}>
          <div className={styles.container}>
            <img src={ellipse} alt="" />
            <div style={{ marginLeft: "10px", width: "100%" }}>
              <p className={styles.orgName}>{orgName}</p>
              <div className={styles.info}>
                <p className={styles.typeOrg}>{typeorg}</p>
                <p className={styles.addressOrg}>{addressorg}</p>
              </div>
            </div>
          </div>
          <textarea
            placeholder="описание"
            className={styles.textarea}
            name=""
            id=""
          ></textarea>
          <div className={styles.menu}>
            {[...new Array(2)].map((item, index) => {
              return (
                <ProfileMenuItem
                  textColor={colorsArray[index]}
                  img={imgArray[index]}
                  text={textArray[index]}
                  key={index}
                  textOutside={textOutsideArray[index]}
                />
              );
            })}
          </div>
        </div>
        <footer>
          <NavBar />
        </footer>
      </WaveBackground>
    </>
  );
};
