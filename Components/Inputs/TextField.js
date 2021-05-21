import styles from "./TextField.module.css";

export default function TextField({ value, id, type, onChange }) {
  // valid types: text, email, url, & password

  const handleFocus = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onChange) onChange();
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="display-inline-flex-column">
      <label className="bottom-margin-extra-small" htmlFor={id}>
        <small>{id}</small>
      </label>
      <label
        htmlFor={id}
        className="gradient-2 padding-2 border-radius-10 display-inline-flex align-center clickable-shadow"
      >
        <input
          onClick={handleClick}
          onChange={handleChange}
          onFocus={handleFocus}
          id={id}
          value={value}
          type={type}
          className={`${styles.textField} width-100 height-100 background-white border-radius-8 padding-2 padding-left-right-10`}
        />
      </label>
    </div>
  );
}
