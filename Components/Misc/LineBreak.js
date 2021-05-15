import styles from "./LineBreak.module.css"

export default function LineBreak({ gradient }) {
    return (
        <div className={`${gradient ? "gradient-2" : styles.normal} ${styles.lineBreak}`}></div>
    )
}