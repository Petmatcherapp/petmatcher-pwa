import styles from "./Action.module.css"

export default function Action({ text, onClick }) {
    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation();
        onClick()
    }

    return (
        <p onClick={handleClick} className={`${styles.action} display-inline gradient-text gradient-3 cursor-pointer weight-700`}>{text}</p>
    )
}