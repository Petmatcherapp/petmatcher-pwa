import { useEffect, useState } from "react";
import styles from "./Loading.module.css";
import { randomNum } from "../../lib/functions";

export default function Loading({ whiteSpinner }) {
  const [gradientNum, setGradientNum] = useState();

  useEffect(() => {
    setGradientNum(randomNum(1, 7));
  }, []);

  return (
    <span>
      <div className={`${styles.petmatcherLoading}`}>
        <div
          className={`${whiteSpinner ? `${styles.whiteSpinner}` : ""} ${
            styles.spinner1
          }`}
        ></div>
        <span className={`gradient-${gradientNum}`}></span>
        <div
          className={`${whiteSpinner ? `${styles.whiteSpinner}` : ""} ${
            styles.spinner2
          }`}
        ></div>
      </div>
    </span>
  );
}
