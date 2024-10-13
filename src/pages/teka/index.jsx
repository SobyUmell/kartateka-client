import { Button, NavBar, WaveBackground } from "../../shared/ui";
import { TekaInput } from "../../shared/ui";
import styles from "./style.module.scss";
import { Search } from "../../shared/assets";
import { TekaWidget } from "../../widgets";
import { useState, useEffect } from "react";
import Stories from "react-insta-stories";
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
};
const seeMoreContent = () => {
  // контент отображаемый при нажатии на seeMore
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "right",
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
let masTitle = ["История 0", "История 1", "История 2"];
let masText;
const widgetContent = ({ i, title }) => {
  // контент истории
  return (
    <div className={styles.storyContainer}>
      <h2 className={styles.title}>{title}</h2>
      {!title ? seeMoreContent() : <></>}
    </div>
  );
};
const stories = [];
export const Teka = () => {
  const [flag, setFlag] = useState(false);
  const [len, setLen] = useState(0);
  useEffect(() => {
    // фук предназначенный для вытягивания инфрормации об историях
    setLen(3);
  }, []);
  useEffect(() => {
    // реализована загрузка историй из массива историй
    for (let i = 0; i < len; i++) {
      object = {
        content: () => widgetContent({ i: i, title: masTitle[i] }),
        postId: i,
      };
      stories.push(object);
      console.log("история загружена ", { i });
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
