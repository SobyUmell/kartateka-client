import React from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../model";
import { PostItem } from "../../../shared/ui";
import { postItems } from "../model";
export const TekaWidget = ({ label, ...props }) => {
  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.h}>{label}</h2>
      <Slider {...settings}>
        {postItems.map((index, value) => {
          return <PostItem key={index} />;
        })}
      </Slider>
    </div>
  );
};
