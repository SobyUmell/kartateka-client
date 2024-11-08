import classes from "./style.module.scss";
export const Input = ({
  setState,
  value,
  svg,
  text,
  type,
  disabled,
  visible,
  setVisible,
  autocomplete,
  ...props
}) => {
  const checkType = () => {
    if (type === "password" && visible === true) {
      return "text";
    }
    if (type === "password" && visible === false) {
      return "password";
    }
    if (type === "text") {
      return "text";
    }
    if (type === "email") {
      return "email";
    }
  };
  return (
    <div className={classes.wrapper}>
      <img className={classes.img} src={svg} alt={"error"}></img>
      <p className={classes.text}>{text}</p>
      <input
        autoComplete={autocomplete}
        disabled={disabled}
        type={checkType()}
        value={value}
        onChange={(e) => {
          setState(e.target.value);
        }}
        className={classes.input}
      />
    </div>
  );
};
