import styles from "./styles.module.scss";

export const PostItem = ({ clickHandler, children, ...props }) => {
  return (
    <div className={styles.div}>
      <div className={styles.sliderContainerCover} onClick={clickHandler}></div>
    </div>
  );
};
