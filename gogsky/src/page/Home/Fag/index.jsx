import React from "react";
import css from "./index.module.css";
import { FaChevronDown } from "react-icons/fa";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const FagSection = () => {
  const arrayn = [1, 2, 3, 4];
  return (
    <div className={css.fagSection}>
      {/* Left Item -IMAGE */}
      <div className={css.leftItem_image}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="https://cdn.musavat.com/news/thumbnails/1507c711121b605195eba46a211eb90c.jpg"
          alt=""
        />
      </div>
      {/* Right item -> */}
      <div className={css.rightItem}>
        <div className={css.rightItemAndTop}>
          <div className={css.sectionName}>
            <h2>FAG</h2>
          </div>
          <div className={css.description}>
            <div>
              <h5>
                The most popular questions that are of most interest to our
                customers
              </h5>
            </div>
            <div>
              <p>
                We have collected the most popular questionsto answer to which
                can help you with booking a tour.
              </p>
            </div>
          </div>
        </div>

        {/* ////// */}
        <div className={css.questions}>
          {arrayn.map((item, i) => (
            <Accordion key={i} className={css.accardion}>
              <AccordionSummary expandIcon={<FaChevronDown />}>
                <Typography variant="h6">
                  What is included in the price of the tours your offer?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="span">
                  The price of all our tour always included, travel around the
                  country, a tourist guide, breakfast and dinner at the hotel,
                  visits to all historical monuments.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FagSection;
