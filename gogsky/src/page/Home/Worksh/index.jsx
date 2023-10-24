import React from "react";
import css from "./index.module.css";
import Grid from "@mui/material/Grid";

const HowItWorks = () => {
  return (
    <div className={css.howItWorks}>
      <h2 className={css.sectionName}>HOW IT WORKS</h2>
      <div className={css.howItWorks_item}>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h5>
              Here are the main three steps how you can book the trip of your
              dreams
            </h5>
            <p style={{ margin: "20px 50px" }}>
              When planning your trips with us, you will spend a minimum of time
              and get a maximum of emotions and memories.
            </p>
            <div>
              <img
                src="https://cdn.musavat.com/news/thumbnails/1507c711121b605195eba46a211eb90c.jpg"
                alt="img"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className={css.turLists}>
              <div>
                <h2> 01 &nbsp;CHOOSE DESTINATION</h2>
              </div>
              <p>
                Check our the tour section. Choose one of the suggested ones.
              </p>
            </div>

            <div className={css.turLists}>
              <h2>02 &nbsp;MAKE YOUR PAYMENT</h2>
              <p>
                After choosing a tour, proceed to fill in the information
                required for booking. Complete the payment.
              </p>
            </div>

            <div className={css.turLists}>
              <h2>03 &nbsp;CHECK YOUR EMAIL</h2>
              <p>
                After choosing a tour, proceed to fill in the information
                required for booking. Complete the payment.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HowItWorks;
