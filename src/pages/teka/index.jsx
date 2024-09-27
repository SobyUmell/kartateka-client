import { Button, NavBar, WaveBackground } from "../../shared/ui";
import { TekaInput } from "../../shared/ui";
import styles from "./style.module.scss";
import { Search } from "../../shared/assets";
import { TekaWidget } from "../../widgets";
import { useState, useEffect } from "react";
import Stories from "react-insta-stories";
const object = {
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
};
const widgetContent = ({ index }) => {
  // контент истории
  return (
    <>
      <h2 style={{ color: "white" }}>Вы перешли на историю</h2>
      <h2 style={{ color: "white" }}>{index}</h2>
    </>
  );
};
export const Teka = () => {
  const [flag, setFlag] = useState(false);
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
  const [stories, setStories] = useState(null);

  useEffect(() => {
    // при каждом монтировании компонента, в widgetContent передается id по порядку
    for (let i = 0; i < 3; i++) {
      const object = { content: widgetContent, seeMore: seeMoreContent };
      setStories([...stories, object]);
    }
  }, []);
  return (
    <>
      {flag ? (
        <Stories
          stories={stories}
          defaultInterval={2000}
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
