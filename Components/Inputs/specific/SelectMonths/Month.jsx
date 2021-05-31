import { useState } from "react";
import styles from "./Month.module.css";

export default function Month({
  potentialSubMonths,
  index,
  month,
  selectedMonthIndex,
  handleMonthChange,
}) {
  return (
    <div
      className={`${
        index === potentialSubMonths.length - 1 ? styles.extraRightMargin : ""
      }`}
      onClick={() => handleMonthChange(month, index)}
    >
      <small
        className={`${styles.subOptionMonth} ${
          index <= selectedMonthIndex ? `${styles.activeMonth}` : null
        } padding-top-bottom-5 margin-0 border-radius-10 clickable-shadow cursor-pointer`}
      >
        {month.month.shortName}
      </small>
    </div>
  );
}
