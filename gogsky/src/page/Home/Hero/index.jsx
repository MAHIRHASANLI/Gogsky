import React from "react";
import css from "./index.module.css";
import SearchForm from "./SearchForm";

const HeroSection = () => {
  return (
    <div
      className={css.hero}
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1395878839/photo/despair.webp?s=1024x1024&w=is&k=20&c=UwmEOZCAVRvcQr7MvNvTuKY-IAEtcKvaxTl-VFVnTyw=)",
      }}
    >
      <div className={css.hero_item}>
        <div className={css.hero_content}>
          <p>
            Your Adventure Travel Expert in <span>GOGsky</span>
          </p>
        </div>

        {/*Axtarish Formu*/}
        <SearchForm />
      </div>
    </div>
  );
};

export default HeroSection;
