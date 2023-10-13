import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css"

const SwiperSlider = () => {
    const array = ["https://cdn.musavat.com/news/thumbnails/1507c711121b605195eba46a211eb90c.jpg", "https://banco.az/sites/default/files/synopsis.jpg", "https://azvision.az/photos/2022/08/ipek-yolu-turizmi-1659988424.jpg"]
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={50}
            className="mySwiper"
        >
            {
                array && array.map((item, i) => (
                    <SwiperSlide
                        key={i}
                        style={{
                            backgroundImage:
                                `url(${item})`,
                        }}
                        className='swiperSlider'
                        >
                        <div
                            className="swiperSliderItem"

                        >
                            <div className="left_item">
                                <div>
                                    <img src={item} alt="" />
                                    <h5>Name</h5>
                                </div>
                                <div>
                                    <p>Azerbaijan, Baku</p>
                                    <span>August 2023</span>
                                </div>
                            </div>

                            {/* //// */}
                            <div className="right_item">
                                <div>
                                    <h5>Royal Lands Tour</h5>
                                    <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Scelerisque eget
                                        egestas consectetur urna porttitor diam. Molestie ut est est
                                        tortor morbi sed. Enim pulvinar hendrerit massa vulputate
                                        tempus. Diam feugiat massa viverra mollis. Mauris tortor sed
                                        ipsum non dolor massa lectus ultrices in. Fames egestas
                                        neque commodo cursus faucibus. Pellentesque magna urna
                                        faucibus egestas morbi dolor. Cursus massa elit luctus
                                        facilisis nec quis neque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default SwiperSlider