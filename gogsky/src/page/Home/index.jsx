import React from "react";
import HeroSection from "./Hero";
import HowItWorks from "./Worksh";
import ExploreWorld from "./ExploreWorld";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <HowItWorks />
      <ExploreWorld/>
      <Reviews/>
    </React.Fragment>
  );
};

export default Home;
