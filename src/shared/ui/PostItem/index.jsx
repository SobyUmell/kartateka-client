import styles from "./styles.module.scss";

export const PostItem = ({
  disableInfo,
  text,
  img,
  clickHandler,
  children,
  ...props
}) => {
  return (
    <div className={styles.div}>
      <div className={styles.sliderContainerCover} onClick={clickHandler}>
        {!disableInfo ? (
          <>
            <img className={styles.img} src={img} alt="фото компании" />
            <h2 className={styles.h2} style={{ marginTop: "15%" }}>
              {text ? text : "название компании"}
            </h2>
          </>
        ) : null}
      </div>
    </div>
  );
};
