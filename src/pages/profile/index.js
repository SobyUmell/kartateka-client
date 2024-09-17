import React from "react";
import { InputNoBorder, NavBar, WaveBackground } from "../../shared/ui";
import styles from "./style.module.scss";

export const Profile = () => {
  const [file, setFile] = React.useState(null);
  const [fileUrl, setFileUrl] = React.useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setFileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <WaveBackground>
      <InputNoBorder />
      {/* <input type="file" onChange={handleFileChange} />
      {fileUrl && <img src={fileUrl} alt="error" />} */}
      <NavBar />
    </WaveBackground>
  );
};
