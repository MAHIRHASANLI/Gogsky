import React from "react";
import css from "./index.module.css";
import { GoArrowSwitch ,GoArrowRight} from "react-icons/go";

const ExploreWorld = () => {
  const array = [
    "https://cdn.musavat.com/news/thumbnails/1507c711121b605195eba46a211eb90c.jpg",
    "https://banco.az/sites/default/files/synopsis.jpg",
    "https://azvision.az/photos/2022/08/ipek-yolu-turizmi-1659988424.jpg",
    "https://cdn.musavat.com/news/thumbnails/1507c711121b605195eba46a211eb90c.jpg",
  ];

  return (
    <div className={css.exploreWorld}>
      <div className={css.sectionName}>
        <h2>EXPLORE THE WORLD</h2>
        <div className={css.viewMore}><span>View More</span><GoArrowRight/></div>
      </div>
      <div className={css.container}>
        {array &&
          array.map((item, i) => (
            <div key={i} className={css.exploreWorld_item}>
              <div>
                <img src={item} alt="" />
              </div>
              <div className={css.exploreWorld_count}>
                <div className={css.names}>
                  <p>Baku</p> <GoArrowSwitch /> <p>Bodrum</p>
                </div>
                <div className={css.date}>
                  <p>Round trip</p>
                  <p>|</p>
                  <p>Tue, Oct 26 - Tue, Dec 12</p>
                </div>
                <div className={css.price}>
                  <p>$1025</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExploreWorld;
