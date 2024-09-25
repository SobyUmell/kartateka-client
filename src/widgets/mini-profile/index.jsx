import styles from "./style.module.scss";
import { miniProfileObj } from "../../shared/model";
import { IconButton } from "../../shared/ui/icon-button";
import { geoDataIcon, likeIcon, shareIcon } from "../../shared/assets";
import { getHeightMiniProfile } from "../../shared/lib/getHeightMiniProfile";
import { useState, useRef } from "react";
export const MiniProfile = ({ img }) => {
  const [height, setHeight] = useState(50);
  const startTouchY = useRef(0);
  const startHeight = useRef(50);

  const handleTouchStart = (e) => {
    startTouchY.current = e.touches[0].clientY;
    startHeight.current = height;
  };

  const handleTouchMove = (e) => {
    const currentTouchY = e.touches[0].clientY;
    const deltaY = startTouchY.current - currentTouchY;

    const newHeight = Math.min(
      Math.max(startHeight.current + (deltaY / window.innerHeight) * 100, 50),
      100
    );
    setHeight(newHeight);
  };

  const handleTouchEnd = () => {
    if (height > 50 && height < 75) {
      setHeight(75);
    } else if (height > 75 && height < 100) {
      setHeight(100);
    }
  };
  return (
    <div
      style={getHeightMiniProfile(height)}
      className={styles.container}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
    </div>
  );
};
