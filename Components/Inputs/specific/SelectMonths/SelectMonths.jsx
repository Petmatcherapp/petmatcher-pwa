import { useEffect, useState } from "react";
import { nextTwelveMonths, getDay } from "../../../../lib/functions";
import Month from "./Month";
import styles from "./SelectMonths.module.css";

export default function SelectMonths() {
  const today = getDay();
  const potentialSubMonths = nextTwelveMonths();
  const [selectedMonth, setSelectedMonth] = useState();

  useEffect(() => {
    setSelectedMonth({
      text: `${potentialSubMonths[0].month.shortName} ${today} ${potentialSubMonths[0].year}`,
      monthNum: potentialSubMonths[0].month.monthNum,
      monthYear: potentialSubMonths[0].month.year,
      index: 0,
    });
  }, []);

  const handleMonthChange = (month, index) => {
    setSelectedMonth({
      text: `${month.month.shortName} ${today} ${month.year}`,
      monthNum: month.month.monthNum,
      monthYear: month.year,
      index: index,
    });
  };

  return (
    <div className="opacity-100 display-flex-column margin-right-large width-100">
      <p>
        Subscribe until:
        <small>&nbsp;{selectedMonth?.text}</small>
      </p>
      <div
        className={`${styles.monthsContainer} display-flex-row relative bottom-margin-small width-100`}
      >
        {potentialSubMonths?.map((month, index) => (
          <div key={month.month.fullName} className={`${styles.month}`}>
            <Month
              potentialSubMonths={potentialSubMonths}
              index={index}
              month={month}
              selectedMonthIndex={selectedMonth?.index}
              handleMonthChange={handleMonthChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
