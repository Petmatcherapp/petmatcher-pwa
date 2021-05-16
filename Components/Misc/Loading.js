import styles from "./Loading.module.css"
import {randomNum} from "../../lib/functions"

export default function Loading({whiteSpinner}) {
    return (
        <span>
            <div className={`${styles.petmatcherLoading}`}>
                <div className={`${whiteSpinner ? `${styles.whiteSpinner}` : ""} ${styles.spinner1}`}></div>
                <span className={`gradient-${randomNum(1, 7)}`}></span>
                <div className={`${whiteSpinner ? `${styles.whiteSpinner}` : ""} ${styles.spinner2}`}></div>
            </div>
        </span>
    )
}