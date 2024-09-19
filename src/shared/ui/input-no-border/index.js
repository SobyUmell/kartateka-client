import styles from "./style.module.scss";
import { editProfile } from "../../assets";
import { IconButton } from "..";
export const InputNoBorder = ({ onChange, value, onClick }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <IconButton icon={editProfile} onClick={onClick} />
    </div>
  );
};
