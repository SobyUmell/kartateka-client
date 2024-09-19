import styles from "./styles.module.scss";

export const PostItem = ({ children, ...props }) => {
  return (
    <div className={styles.div}>
      <div className={styles.sliderContainerCover}>{children}</div>
    </div>
  );
};
