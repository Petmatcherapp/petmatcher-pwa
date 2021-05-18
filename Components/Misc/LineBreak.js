import styles from "./LineBreak.module.css";

export default function LineBreak({ gradient, darkMode }) {
  return (
    <div
      className={`${gradient ? "gradient-2" : styles.normal} ${
        darkMode ? `${styles.darkMode}` : `${styles.normal}`
      } ${styles.lineBreak}`}
    ></div>
  );
}
