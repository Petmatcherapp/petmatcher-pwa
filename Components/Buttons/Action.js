import styles from "./Action.module.css";

export default function Action({ text, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) onClick();
  };

  return (
    <p
      onClick={handleClick}
      className={`${styles.action} display-inline gradient-text gradient-3 cursor-pointer weight-600`}
    >
      {text}
    </p>
  );
}
