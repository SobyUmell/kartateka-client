import styles from "./style.module.scss";
import { miniProfileObj } from "../../shared/model";
import { IconButton } from "../../shared/ui/icon-button";
import { geoDataIcon, likeIcon, shareIcon } from "../../shared/assets";
import { getHeightMiniProfile } from "../../shared/lib/getHeightMiniProfile";
import { useState, useRef } from "react";
import { TekaWidget } from "../../widgets";

export const MiniProfile = ({ img }) => {
  const [height, setHeight] = useState(50);
  const [locker, setLocker] = useState(false);
  const startTouchY = useRef(0);
  const startHeight = useRef(50);

  const handleTouchStart = (e) => {
    e.stopPropagation();
    startTouchY.current = e.touches[0].clientY;
    startHeight.current = height;
  };

  const handleTouchMove = (e) => {
    e.stopPropagation();
    const currentTouchY = e.touches[0].clientY;
    const deltaY = startTouchY.current - currentTouchY;

    const newHeight = Math.min(
      Math.max(startHeight.current + (deltaY / window.innerHeight) * 100, 0),
      100
    );

    if (newHeight === 0) {
      setHeight(0);
      setLocker(true);
      return;
    }
    if (!locker) {
      setHeight(newHeight);
    }
  };

  const handleTouchEnd = () => {
    if (locker) {
      setLocker(false);
      return;
    }
    if (height > 50 && height <= 75) {
      setHeight(75);
    } else if (height > 75 && height <= 100) {
      setHeight(100);
    } else if (height > 20 && height <= 50) {
      setHeight(50);
    } else {
      setHeight(0);
    }
  };

  const handleReturnBarTouchStart = (e) => {
    setLocker(false);
    e.stopPropagation();
    startTouchY.current = e.touches[0].clientY;
    startHeight.current = 0;
  };

  const handleReturnBarTouchMove = (e) => {
    e.stopPropagation();
    const currentTouchY = e.touches[0].clientY;
    const deltaY = startTouchY.current - currentTouchY;

    const newHeight = Math.min(
      Math.max(startHeight.current + (deltaY / window.innerHeight) * 100, 0),
      50
    );
    if (!locker) {
      setHeight(newHeight);
    }
  };

  const handleReturnBarTouchEnd = () => {
    if (height > 0) {
      setHeight(50);
    }
  };

  if (height === 0) {
    return (
      <div
        className={styles.widgetReturnBar}
        onTouchStart={handleReturnBarTouchStart}
        onTouchMove={handleReturnBarTouchMove}
        onTouchEnd={handleReturnBarTouchEnd}
      >
        <div />
      </div>
    );
  } else {
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
          <TekaWidget />
          <TekaWidget />
          <TekaWidget />
        </div>
      </div>
    );
  }
};
