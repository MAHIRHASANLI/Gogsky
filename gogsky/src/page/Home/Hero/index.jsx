import React from "react";
import css from "./index.module.css";
import SearchForm from "./SearchForm";

const HeroSection = () => {
  return (
    <div
      className={css.hero}
      style={{
        backgroundImage:
          "url(https://turlar.az/uploads/news/156950355413396844645d8cb9426d68d.jpg)",
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
