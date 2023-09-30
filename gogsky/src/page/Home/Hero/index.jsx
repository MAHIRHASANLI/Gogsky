import React from "react";
import css from "./index.module.css";
import { GoArrowSwitch } from "react-icons/go";
import { LuSearch } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div
      className={css.hero}
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1395878839/photo/despair.webp?s=1024x1024&w=is&k=20&c=UwmEOZCAVRvcQr7MvNvTuKY-IAEtcKvaxTl-VFVnTyw=)",
      }}
    >
      <div>
        <div className={css.hero_content}>
          <p>
            Your Adventure Travel Expert in <span>GOGsky</span>
          </p>
        </div>

        <div className={css.frameForm}>
          <div className={css.textInput}>
            <label>Location</label>
            <input type="text" placeholder="Placeholder text" />
          </div>

          <div className={css.arrows}>
            <GoArrowSwitch />
          </div>

          <div className={css.textInput}>
            <label>Destination</label>
            <input type="text" placeholder="Placeholder text" />
          </div>

          <div className={css.checkOutSelect}>
            <label>Check in - Check out</label>
            <select>
              <option value="0">Choose Date</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
            </select>
          </div>

          <div className={css.chooseDateSelect}>
            <label>Guest</label>
            <select>
              <option value="0">Choose Guest</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
            </select>
          </div>
          <button className={css.btnSearch}>
            <LuSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
