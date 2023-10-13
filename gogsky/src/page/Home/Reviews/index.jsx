import React from "react";
import SwiperSlider from "./SwiperSlider";
import "./slider.css";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews_item">
        <div className="sectionName">
          <h2>REVIEWS</h2>
        </div>
        <div className="reviews_itemH5">
          <h5 >What our customers say about their experience travel with us</h5>
        </div>
        <div className="description">
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
