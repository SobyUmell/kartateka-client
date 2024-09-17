import { useEffect } from "react";
import styles from "./style.module.scss";
import { useState } from "react";
export const TekaInput = ({ img, ...props }) => {
  const [index, setIndex] = useState();
  const array = ["Что хочешь попробовать", "Какую кофейню ищите"];
  useEffect(() => {
    setIndex(Math.floor(Math.random() * array.length + 0));
  }, []);
  return (
    <div className={styles.container}>
      <img className={styles.absoluteImg} src={img}></img>
      <input
        type="text"
        className={styles.customInput}
        placeholder={array[index]}
      ></input>
    </div>
  );
};
