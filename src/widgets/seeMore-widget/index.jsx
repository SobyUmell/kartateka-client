import { useState, useEffect } from "react";
import { eyeSvg } from "../../shared/assets";
import { ellipse } from "../../shared/assets";
import styles from "./style.module.scss";
export const seeMore = ({ i, close, title, text, views, data, org, Src }) => {
  // контент истории
  const [src, setSrc] = useState();
  useEffect(() => {
    // если приходит пустой image - выводим белый круг
    if (!Src) {
      setSrc(ellipse);
    } else {
      setSrc(Src);
    }
  }, []);

  return (
    <div className={styles.storyContainer}>
      <div className={styles.organizationDiv}>
        <div className={styles.organizationDivOrg}>
          <img className={styles.organizationImg} src={src} />
          <div className={styles.organizationDivOrgRight}>
            <h3 style={{ marginBottom: "5px" }} className={styles.organization}>
              {org}
            </h3>
            <p className={styles.date}>{data}</p>
          </div>
        </div>
        <button onClick={close} className={styles.storyButton}>
          X
        </button>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.storyContainerDiv}>
        <p style={{ paddingRight: "15px" }} className={styles.text}>
          {text}
        </p>
      </div>
      <div className={styles.info}>
        <div className={styles.views}>
          {views}
          <img className={styles.viewsSVG} src={eyeSvg} alt="views" />
        </div>
      </div>
    </div>
  );
};
