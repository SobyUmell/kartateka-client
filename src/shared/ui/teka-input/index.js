import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { array } from "./model/search-placeholder-data";
export const TekaInput = ({ img, ...props }) => {
  const [index, setIndex] = useState();
  useEffect(() => {
    setIndex(Math.floor(Math.random() * array.length + 0));
  }, []);
  return (
    <div className={styles.container}>
      <img className={styles.absoluteImg} src={img} />
      <input
        type="text"
        className={styles.customInput}
        placeholder={array[index]}
      />
    </div>
  );
};
