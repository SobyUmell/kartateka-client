import { NavBar, WaveBackground, TekaInput } from "../../shared/ui";
import styles from "./style.module.scss";
import { Search } from "../../shared/assets";
import { TekaWidget } from "../../widgets";
import { useState, useEffect } from "react";
import Stories from "react-insta-stories";
import { seeMore } from "../../widgets";
import {
  masTitle,
  masText,
  masViews,
  masData,
  masUrls,
  masOrg,
  masSrc,
} from "../../shared/model";
let object = {
  // объект, который будет ответственнен за контент, который передается в виджет для отрисовки
  postId: "",
  organizationId: "",
  views: "",
  createdAt: "",
  updatedAt: "",
  media: "",
  title: "",
  text: "",
  tags: "",
  img: "",
  content: "",
  src: "",
};
const stories = [];
export const Teka = () => {
  const [flag, setFlag] = useState(false);
  const [len, setLen] = useState(0);
  useEffect(() => {
    // хук предназначенный для вытягивания инфрормации об историях
    setLen(3);
  }, []);
  useEffect(() => {
    // реализована загрузка историй из массива историй
    for (let i = 0; i < len; i++) {
      object = {
        url: masUrls[i],
        seeMore: ({ close }) =>
          seeMore({
            close,
            i: i,
            title: masTitle[i],
            setFlag: setFlag,
            text: masText[i],
            views: masViews[i],
            data: masData[i],
            org: masOrg[i],
            Src: masSrc[i],
          }),
        postId: i,
      };
      stories.push(object);
    }
  }, [len]);

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
          <header style={{ display: "flex", justifyContent: "center" }}>
            <TekaInput img={Search} />
          </header>
          <div className={styles.container}>
            <TekaWidget
              clickHandler={() => {
                setFlag(true);
              }}
              label={"Просмотрено"}
            />
            <TekaWidget
              style={{ marginTop: "calc(100% - 340px)" }}
              clickHandler={() => {
                setFlag(true);
              }}
              label={"Рекомендации"}
            />
          </div>
          <NavBar />
        </WaveBackground>
      )}
    </>
  );
};
