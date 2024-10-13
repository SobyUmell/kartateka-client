import { Button, NavBar, WaveBackground } from "../../shared/ui";
import { TekaInput } from "../../shared/ui";
import styles from "./style.module.scss";
import { Search } from "../../shared/assets";
import { TekaWidget } from "../../widgets";
import { useState, useEffect } from "react";
import Stories from "react-insta-stories";

export const Teka = () => {
  const [flag, setFlag] = useState(false);
  const seeMoreContent = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "5px",
        }}
      >
        <Button
          style={{ padding: "15px" }}
          spanStyle={{ marginRight: "0px" }}
          onclick={() => setFlag(false)}
          span={"X"}
        ></Button>
      </div>
    );
  };
  const stories = [
    {
      url: "https://steamuserimages-a.akamaihd.net/ugc/1752456213847927038/87962D92C69DB797C2AC86972DF19A6D9AAC46A2/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
      seeMore: seeMoreContent,
    },
    {
      url: "https://sun9-60.userapi.com/impg/c857332/v857332443/ecb77/4GY2V_AOoaA.jpg?size=769x589&quality=96&sign=dc95a1fc094e8a9282dc6751fb099f5c&c_uniq_tag=h7S6cZNH8NgEM9fvbp1yBnXm2CzE7NKzzrNF2cpcfwI&type=album",
      seeMore: seeMoreContent,
    },
    {
      url: "https://avatars.dzeninfra.ru/get-zen_doc/1589949/pub_5cb1a44f7c45ef00b542e21e_5cb1a51568a9c800b4380ab8/scale_1200",
      seeMore: seeMoreContent,
    },
  ];
  const clickHandler = () => {
    setFlag(true);
  };

  return (
    <>
      {flag ? (
        <Stories
          stories={stories}
          defaultInterval={25000}
          width={"100%"}
          height={"100%"}
          loop={false}
          onAllStoriesEnd={() => {
            setFlag(false);
          }}
        />
      ) : (
        <WaveBackground>
          <div className={styles.container}>
            <TekaInput img={Search} />
            <TekaWidget
              clickHandler={() => {
                setFlag(true);
              }}
              label={"Просмотрено"}
            />
            <TekaWidget
              clickHandler={() => {
                setFlag(true);
              }}
              label={"Рекомендации"}
            />
            <NavBar />
          </div>
        </WaveBackground>
      )}
    </>
  );
};
