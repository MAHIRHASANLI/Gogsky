import React from "react";
import HeroSection from "./Hero";
import HowItWorks from "./Worksh";
import ExploreWorld from "./ExploreWorld";
import Reviews from "./Reviews";
import FagSection from "./Fag";
import PopularTours from "./PopularTours"
const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <PopularTours/>
      <HowItWorks />
      <ExploreWorld/>
      <Reviews/>
      <FagSection/>
    </React.Fragment>
  );
};

export default Home;
