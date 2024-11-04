import Slider from "react-slick";
import styles from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings, postItems, miniProfileIMGs, miniProfileNames } from "../model/index";
import { PostItem } from "../../../shared/ui";
export const TekaWidget = ({ style, clickHandler, label, ...props }) => {
  console.log(miniProfileIMGs);
  return (
    <div style={style} className={styles.sliderContainer}>
      <h2 className={styles.h}>{label}</h2>
      <Slider {...settings}>
        {postItems.map((value, index) => {
          return (
            console.log(miniProfileNames[index]),
            <PostItem
              img={miniProfileIMGs[index]}
              text={miniProfileNames[index]}
              clickHandler={clickHandler}
              key={index}
            />
          );
        })}
      </Slider>
    </div>
  );
};
