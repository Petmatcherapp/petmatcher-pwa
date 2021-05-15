import styles from "./VerticleLineBreak.module.css"

export default function VerticleLineBreak({ gradient, height }) {
    return (
        <div style={{height: `${height}`}} className={`${gradient ? "gradient-2" : styles.normal} ${styles.verticleLineBreak}`}></div>
    )
}