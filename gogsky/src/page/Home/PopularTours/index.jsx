import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import "./tours.css";

const PopularTours = () => {
  const array =[1,2,3,4]
  return (
    <div className="popularTours">
      <div className="popularTours_item">
        <dir className="sectionName">
          <h2>POPULAR TOURS</h2>
        </dir>
        <div>
          <h5>Let’s check-in most popular destinationt recomended by GOGsky</h5>
        </div>

        {/* Grid ccs */}
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
         {array.map((item,i)=>(
           <SwiperSlide key={i}>
           <div className="gridTemplate">
             <div className="gridItem1">
               <img
                 src="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="
                 alt=""
               />
             </div>
             <div className="gridItem2">
               <img
                 src="https://media.istockphoto.com/id/173682323/photo/says.jpg?s=612x612&w=0&k=20&c=7jnXQrYzUWNTnLhjPgimxHIbjsaHvZmAMALGVzYNARQ="
                 alt=""
               />
             </div>
             <div className="gridItem3">
               <img
                 src="https://1.bp.blogspot.com/-iCnFX7eWVjs/XR9NQutHXcI/AAAAAAAAJ9k/ISWH3UXgJF8QJdsV6P9wh3agzOwOF_aYgCLcBGAs/s1600/cat-1285634_1920.png"
                 alt=""
               />
             </div>
             <div className="gridItem4">
               <img
                 src="https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"
                 alt=""
               />
             </div>
             <div className="gridItem5">
               <div>
                 <p>Antalya Tours</p>
               </div>{" "}
               <p>
                 <AiFillStar />
                 <AiFillStar />
                 <AiFillStar />
                 <AiFillStar />
               </p>
               <div></div>{" "}
               <div>
                 <p>
                   During seven days, a journey through the ages awaits you.
                   Explore Antalya’s history by visiting its most famous
                   castels, surronded by equally beatifull lanscape
                 </p>
               </div>{" "}
               <div>
                 <p>Price from $700</p>
               </div>
             </div>
             <div className="gridItem6">
               <img
                 src="https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_1280.jpg"
                 alt=""
               />
             </div>
           </div>
         </SwiperSlide>
         ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularTours;
