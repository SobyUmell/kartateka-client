import React from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const TekaWidget = ({ h, ...props }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  };
  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.h}>{h}</h2>
      <Slider {...settings}>
        <div className={styles.div}>
          <div className={styles.sliderContainerCover}></div>
        </div>
        <div className={styles.div}>
          <div className={styles.sliderContainerCover}></div>
        </div>
        <div className={styles.div}>
          <div className={styles.sliderContainerCover}></div>
        </div>
        <div className={styles.div}>
          <div className={styles.sliderContainerCover}></div>
        </div>
        <div className={styles.div}>
          <div className={styles.sliderContainerCover}></div>
        </div>
        <div className={styles.div}>
          <div className={styles.sliderContainerCover}></div>
        </div>
      </Slider>
    </div>
  );
};
