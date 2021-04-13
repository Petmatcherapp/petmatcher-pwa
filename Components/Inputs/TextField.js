import styles from "../../styles/components/inputs/TextField.module.css"

export default function TextField({ value, id }) {
    return (
        <div className="display-inline-flex-column">
            <label htmlFor={id}><small>{id}</small></label>
            <div className="gradient-2 padding-2 border-radius-10 display-inline-flex align-center clickable-shadow">
                <input id={id} value={value} className={`${styles.textInput} background-white border-radius-8 padding-5`} />
            </div>
        </div>
    )
}