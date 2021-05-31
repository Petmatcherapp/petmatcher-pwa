import styles from "./Checkbox.module.css";

export default function Checkbox({ id, checked, onChange, name }) {
  const handleChange = () => {
    if (onChange) handleChange();
  };

  return (
    <div className="display-inline-flex">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        style={{ display: "none" }}
        className={`${styles.inpCbx}`}
        name={name}
      />
      <label className={`${styles.cbx}`} htmlFor={id}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span>{id}</span>
      </label>
    </div>
  );
}
