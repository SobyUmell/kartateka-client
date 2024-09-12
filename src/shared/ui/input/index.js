import classes from "./style.module.scss";
export const Input = ({ svg, text, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.img} src={svg}></img>
      <p className={classes.text}>{text}</p>
      <input className={classes.input}></input>
    </div>
  );
};
