import React from 'react'
import css from "./index.module.css";

const GuestCount = ({ adulitCount, setadulitCount, childCount, setChildCount }) => {
    return (
        <div className={css.guestCount}>
            <div>
                <p>Adult</p>
                <div className={css.clickBtn}>
                    <button onClick={() => {
                        if (adulitCount < 1) setadulitCount(0)
                        else setadulitCount(adulitCount - 1)
                    }}>-</button>
                    {adulitCount}
                    <button onClick={() => setadulitCount(adulitCount + 1)}>+</button>
                </div>
            </div>
            <div>
                <p>Child</p>
                <div className={css.clickBtn}>
                    <button onClick={() => {
                        if (childCount < 1) setChildCount(0)
                        else setChildCount(childCount - 1)
                    }}>-</button>
                    {childCount}
                    <button onClick={() => {
                        setChildCount(childCount + 1)
                    }}>+</button>
                </div>
            </div>
        </div>
    )
}

export default GuestCount