import { NavBar, WaveBackground } from "../../shared/ui";
import { TekaInput } from "../../shared/ui";
import styles from "./style.module.scss";
import { Search } from "../../shared/assets";
import { TekaWidget } from "../../widgets";
import { useState, useEffect } from "react";
import Stories from "react-insta-stories";
import { eyeSvg } from "../../shared/assets";
import { ellipse } from "../../shared/assets";
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

let masTitle = ["Самый великий человек", "История 1", "История 2"]; // тестовые title
let masText = [
  "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло. Его многочисленные, убого тонкие по сравнению с остальным телом ножки беспомощно копошились у него перед глазами. «Что со мной случилось?» – подумал он. Это не было сном. Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах. Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку. На портрете была изображена дама в меховой шляпе и боа, она сидела очень прямо и протягивала зрителю тяжелую меховую муфту, в которой целиком исчезала ее рука. Затем взгляд Грегора устремился в окно, и пасмурная погода – слышно было, как по жести подоконника стучат капли дождя – привела его и вовсе в грустное настроение. «Хорошо бы еще немного поспать и забыть всю эту чепуху», – подумал он, но это было совершенно неосуществимо, он привык спать на правом боку, а в теперешнем своем",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum, iste, eveniet sed consectetur sint sequi eum quam, facilis dignissimos nemo cum officia at molestias libero. Est magnam quo doloribus!",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quas eligendi autem ipsa quod. Animi quasi quia, assumenda nemo ullam iure laboriosam quidem ipsam perferendis maiores magnam maxime voluptatibus deleniti.",
]; // тестовые text
let masViews = ["54", "2000", "3000"];
let masData = ["10.10.2022", "10.11.2022", "10.11.2022"];
let masUrls = [
  "https://steamuserimages-a.akamaihd.net/ugc/1752456213847927038/87962D92C69DB797C2AC86972DF19A6D9AAC46A2/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
  "https://sun9-60.userapi.com/impg/c857332/v857332443/ecb77/4GY2V_AOoaA.jpg?size=769x589&quality=96&sign=dc95a1fc094e8a9282dc6751fb099f5c&c_uniq_tag=h7S6cZNH8NgEM9fvbp1yBnXm2CzE7NKzzrNF2cpcfwI&type=album",
  "https://avatars.dzeninfra.ru/get-zen_doc/1589949/pub_5cb1a44f7c45ef00b542e21e_5cb1a51568a9c800b4380ab8/scale_1200",
];
let masOrg = ["Concept", "Tbank", "Yandex"];
let masSrc = ["", "", ""];
const widgetContent = ({ i, title, setFlag, text, views, data, org, Src }) => {
  // контент истории
  const [src, setSrc] = useState();
  useEffect(() => {
    // если приходит пустой image - выводим белый круг
    if (!Src) {
      setSrc(ellipse);
    } else {
      setSrc(Src);
    }
  }, []);

  return (
    <div className={styles.storyContainer}>
      <div className={styles.organizationDiv}>
        <div className={styles.organizationDivOrg}>
          <img className={styles.organizationImg} src={src} />
          <div className={styles.organizationDivOrgRight}>
            <h3 style={{ marginBottom: "5px" }} className={styles.organization}>
              {org}
            </h3>
            <p className={styles.date}>{data}</p>
          </div>
        </div>
        <button onClick={() => setFlag(false)} className={styles.storyButton}>
          X
        </button>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.storyContainerDiv}>
        <p>{text}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.views}>
          {views}
          <img className={styles.viewsSVG} src={eyeSvg} alt="views" />
        </div>
      </div>
    </div>
  );
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
        seeMore: () =>
          widgetContent({
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
