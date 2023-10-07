import React, { useState } from "react";
import css from "./index.module.css";
import { GoArrowSwitch } from "react-icons/go";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GuestCount from "./GuestCount";

const SearchForm = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [isOpenGuest, setIsOpenGuest] = useState(false);
    const [isOpenDate, setIsOpenDate] = useState(false);
    const [adulitCount, setadulitCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    const handleChange = ([newStartDate, newEndDate]) => {
        setStartDate(newStartDate);
        setEndDate(newEndDate);
    };
    const values = (<>child: {childCount}, adulit: {adulitCount}</>)
    console.log(values.props.children);
    return (
        <div className={css.frameForm}>
            <div className={css.textInput}>
                <label>Location</label>
                <input type="text" placeholder="Placeholder text" onClick={() => setIsOpenGuest(false)} />
            </div>

            <div className={css.arrows}>
                <GoArrowSwitch />
            </div>

            <div className={css.textInput}>
                <label>Destination</label>
                <input type="text" placeholder="Placeholder text" onClick={() => setIsOpenGuest(false)} />
            </div>

            <div className={css.checkOutSelect}>
                <label>Check in - Check out</label>
                <div
                    className={css.datePicker}
                    onClick={() => {
                        setIsOpenDate(!isOpenDate)
                        setIsOpenGuest(false)
                    }}
                >
                    <DatePicker
                        id="datePicker"
                        placeholderText="Choose Date"
                        selected={startDate}
                        onChange={handleChange}
                        selectsRange
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        dateFormat="dd/MMMM/yyyy"
                        showDaysMonthYearPicker
                    />
                    {isOpenDate ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </div>

            <div className={css.chooseDateSelect}>
                <label>Guest</label>
                <div
                    onClick={() => setIsOpenGuest(!isOpenGuest)}
                    className={css.chooseDateSelect_item}
                >
                    {adulitCount < 1 && childCount < 1 ? (
                        <span>Choose guests</span>
                    ) : (
                        `${adulitCount} adullt, ${childCount} child`
                    )}
                    {isOpenGuest ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {isOpenGuest && (
                    <GuestCount
                        adulitCount={adulitCount}
                        setadulitCount={setadulitCount}
                        childCount={childCount}
                        setChildCount={setChildCount}
                    />
                )}
            </div>
            <button className={css.btnSearch} onClick={() => setIsOpenGuest(false)}>
                <LuSearch /> Search
            </button>
        </div>
    )
}

export default SearchForm