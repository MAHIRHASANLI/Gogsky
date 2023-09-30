import React, { useState } from "react";
import css from "./index.module.css";
import { GoArrowSwitch } from "react-icons/go";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GuestCount from "./GuestCount";

const HeroSection = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [adulitCount, setadulitCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const handleChange = ([newStartDate, newEndDate]) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };
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
            <div>
              <DatePicker
                placeholderText="Choose Date"
                selected={startDate}
                onChange={handleChange}
                selectsRange
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                dateFormat="dd/MMMM/yyyy"
                showDaysMonthYearPicker
                // showIcon
              />
            </div>
          </div>

          <div className={css.chooseDateSelect}>
            <label>Guest</label>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={css.chooseDateSelect_item}
            >
              {adulitCount < 1 && childCount < 1
                ? "Choose guests"
                : `${adulitCount} adullt, ${childCount} child`}
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isOpen && (
              <GuestCount
                adulitCount={adulitCount}
                setadulitCount={setadulitCount}
                childCount={childCount}
                setChildCount={setChildCount}
              />
            )}
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
