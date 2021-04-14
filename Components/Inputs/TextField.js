import styles from "../../styles/components/inputs/TextField.module.css"

export default function TextField({ value, id, type }) {
    // valid types are only: text, email, url, & password
    return (
        <div className="display-inline-flex-column">
            <label className="bottom-margin-extra-small" htmlFor={id}><small>{id}</small></label>
            <div className="gradient-2 padding-2 border-radius-10 display-inline-flex align-center clickable-shadow">
                <input id={id} value={value} type={type} className={`${styles.textField} background-white border-radius-8 padding-5`} />
            </div>
        </div>
    )
}