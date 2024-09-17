import React from "react";
import { NavBar, WaveBackground } from "../../shared/ui";
import styles from "./style.module.scss";
export const Profile = () => {
  const [file, setFile] = React.useState(null);

  return (
    <WaveBackground>
      <input type="file" value={image} />
      <img src={image} alt="error" />
      <NavBar />
    </WaveBackground>
  );
};
