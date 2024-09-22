import styles from "./style.module.scss";
import { miniProfileObj } from "../../shared/model";
import { IconButton } from "../../shared/ui/icon-button";
import { geoDataIcon, likeIcon, shareIcon } from "../../shared/assets";
import { NavBar } from "../../shared/ui";
import { getHeightMiniProfile } from "../../shared/lib/getHeightMiniProfile";
export const MiniProfile = ({ img, height }) => {
  return (
    <div style={getHeightMiniProfile(height)} className={styles.container}>
      <div className={styles.header}>
        {img ? (
          <img className={styles.avatar} src={img} alt="profile avatar" />
        ) : (
          <div className={styles.grayCircle} />
        )}
        <div>
          <h2 className={styles.title}>CONCEPT</h2>
          <div className={styles.info}>
            <span className={styles.typePlace}>{miniProfileObj.coffee}</span>
            <span className={styles.address}>Таганрог/ Чехова 324</span>
          </div>
          <div className={styles.groupButton}>
            <IconButton icon={likeIcon} withBackground={true} />
            <IconButton icon={shareIcon} withBackground={true} />
            <IconButton icon={geoDataIcon} withBackground={true} />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentItem} />
        <div className={styles.contentItem} />
        <div className={styles.contentItem} />
      </div>
      <NavBar />
    </div>
  );
};
