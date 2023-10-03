import React from "react";
import css from "./index.module.css";
import SwiperSlider from "./SwiperSlider";

const Reviews = () => {
  return (
    <div className={css.reviews}>
      <div className={css.reviews_item}>
        <div className={css.sectionName}>
          <h2>REVIEWS</h2>
        </div>
        <div className={css.reviews_itemH5}>
          <h5 >What our customers say about their experience travel with us</h5>
        </div>
        <div className={css.description}>
          <p>
            We have collected the most extensive reviews of our customers about
            their experiences and emotions during tours with us.
          </p>
        </div>
        {/* ///// */}
        <SwiperSlider />
      </div>
    </div>
  );
};

export default Reviews;
