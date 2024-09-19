import styles from "./style.module.scss";
import Select from "react-select";

const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: "black",
    width: "calc(100vw - 45px)",
    height: "54px",
    border: "1px solid #050505",
    boxShadow: "0px 0px 10px 1px #ffffff",
    borderRadius: "10px",
    color: "white",
    paddingLeft: "45px",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    fontFamily: "JetBrains Mono",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "17px",
    color: state.isSelected ? "black" : "white",
    backgroundColor: state.isSelected ? "white" : "black",
    borderRadius: "10px",
  }),
  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    fontFamily: "JetBrains Mono",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "17px",
    textAlign: "center",
    color: "white",
    fontSize: "16px",
  }),
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    fontFamily: "JetBrains Mono",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "17px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: "black",
    borderRadius: "10px",
  }),
  input: (baseStyles, state) => ({
    ...baseStyles,
    fontFamily: "JetBrains Mono",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "17px",
    textAlign: "center",
    color: "white",
    fontSize: "16px",
    caretСolor: "transparent",
  }),
};

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
