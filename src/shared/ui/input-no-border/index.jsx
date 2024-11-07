import styles from "./style.module.scss";
import { IconButton } from "..";
export const InputNoBorder = ({ onChange, value, onClick, icon, disabled }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className={styles.container}>
      <input
        style={{ marginLeft: "20px" }}
        disabled={disabled}
        type="text"
        onChange={handleChange}
        value={value}
      />
      <IconButton icon={icon} onClick={onClick} />
    </div>
  );
};
