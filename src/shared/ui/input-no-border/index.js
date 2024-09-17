import styes from "./style.module.scss";
import { editProfile } from "../../assets";
export const InputNoBorder = () => {
  return (
    <div className={styes.container}>
      <input className={styes.input} type="text" />
      <img src={editProfile} alt="editProfileIcon" className={styes.svg} />
    </div>
  );
};
