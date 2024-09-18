import styles from "./style.module.scss";
import { editProfile } from "../../assets";
export const InputNoBorder = ({ onChange, value }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <img src={editProfile} alt="editProfileIcon" />
    </div>
  );
};
