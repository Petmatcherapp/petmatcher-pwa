import styles from "./TextArea.module.css";

export default function TextField({ value, id, onChange, rows, resize }) {
  const handleFocus = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onChange) onChange(e);
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="display-inline-flex-column width-90">
      <label className="bottom-margin-extra-small" htmlFor={id}>
        <small>{id}</small>
      </label>
      <label
        htmlFor={id}
        className={`width-100 gradient-2 padding-2 border-radius-10 display-inline-flex align-center clickable-shadow `}
      >
        <textarea
          onClick={handleClick}
          onChange={handleChange}
          onFocus={handleFocus}
          id={id}
          value={value}
          className={`${styles.textArea} width-100 height-100 background-white border-radius-8 padding-2 padding-left-right-10`}
          rows={rows}
          style={{ resize: `${resize ? "vertical" : "none"}` }}
        />
      </label>
    </div>
  );
}
