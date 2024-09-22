import styles from "./style.module.scss";
import Select from "react-select";
import { customStyles } from "../../model";

export const SelectTown = ({ townsList, svg, label, disabled, setTown }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={svg} alt={"error"} />
      <p className={styles.text}>{label}</p>
      <Select
        onChange={(e) => setTown(e.value)}
        isDisabled={disabled}
        defaultValue={townsList[0]}
        options={townsList}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "hsl(0, 0%, 80%)",
            primary50: "hsl(0, 0%, 80%)",
            primary75: "hsl(0, 0%, 80%)",
          },
        })}
      />
    </div>
  );
};
