import styles from "./VerticleLineBreak.module.css"

export default function VerticleLineBreak({ gradient, height, darkMode }) {
    return (
        <div style={{height: `${height}`}} className={`${gradient ? "gradient-2" : null} ${darkMode ? `${styles.darkMode}` : `${styles.normal}`} ${styles.verticleLineBreak}`}></div>
    )
}