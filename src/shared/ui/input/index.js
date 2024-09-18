import classes from "./style.module.scss";
export const Input = ({ setState, state, svg, text, type, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.img} src={svg} alt={"error"}></img>
      <p className={classes.text}>{text}</p>
      <input
        type={type}
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
        className={classes.input}
      />
    </div>
  );
};
