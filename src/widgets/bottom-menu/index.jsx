import s from "./styles.module.scss";
import { ellipse } from "../../shared/assets";
import { likeIcon } from "../../shared/assets";
import { shareIcon } from "../../shared/assets";
import { geoDataIcon } from "../../shared/assets";
import { TekaWidget } from "../teka-widget";
import { useState } from "react";
export const BottomMenu = ({
  swap,
  orgName,
  orgImage,
  address,
  type,
  open,
}) => {
  const [more, setMore] = useState(false);
  return (
    <>
      {open ? (
        <div
          className={s.bottomMenu}
          style={more ? { bottom: "697px", height: "650px" } : {}}
        >
          <div className={s.orgdiv}>
            <img src={!orgImage ? ellipse : orgImage} alt=""></img>
            <div className={s.orgInfo}>
              <div>
                <p className={s.orgName}>{orgName}</p>
                <p
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "4.25%",
                    cursor: "pointer",
                  }}
                  onClick={swap}
                >
                  X
                </p>
              </div>
              <div className={s.type_adress}>
                <p>
                  {type}
                  &nbsp;
                </p>
                <p>{address}</p>
              </div>
              <div className={s.icons}>
                <img className={s.icon} src={likeIcon} alt="error" />
                <img className={s.icon} src={shareIcon} alt="error" />
                <img className={s.icon} src={geoDataIcon} alt="error" />
              </div>
            </div>
          </div>
          <div>
            <TekaWidget disableInfo={true}></TekaWidget>
          </div>
          {more ? null : (
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => setMore(!more)}
            >
              ↓
            </div>
          )}
          {more ? (
            <div>
              <p className={s.menu}>Меню</p>
              <TekaWidget disableInfo={true}></TekaWidget>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};
