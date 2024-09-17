import styles from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const TekaWidget = ({ h2, childredn, ...props }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
  };
  return (
    <div className={styles.container}>
      <h2></h2>
      <Slider {...settings}>
        <div className={styles.sliderCover}>
          <div className={styles.sliderCoverItem}>

          </div>
        </div>
        <div className={styles.sliderCover}>
          <div className={styles.sliderCoverItem}>

          </div>
        </div>
        <div className={styles.sliderCover}>
          <div className={styles.sliderCoverItem}>

          </div>
        </div>
        <div className={styles.sliderCover}>
          <div className={styles.sliderCoverItem}>
            
          </div>
        </div>
      </Slider>
    </div>
  );
};
