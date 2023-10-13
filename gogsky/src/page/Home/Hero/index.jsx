import React from "react";
import css from "./index.module.css";
import SearchForm from "./SearchForm";

const HeroSection = () => {
  return (
    <div
      className={css.hero}
      style={{
        backgroundImage:
          "url(https://cdn.musavat.com/news/thumbnails/1507c711121b605195eba46a211eb90c.jpg)",
      }}
    >
      <div className={css.hero_item}>
        <div className={css.hero_content}>
          <p>
            Your Adventure Travel Expert in <span>GOGsky</span>
          </p>
        </div>

        <SearchForm />
      </div>
    </div>
  );
};

export default HeroSection;
