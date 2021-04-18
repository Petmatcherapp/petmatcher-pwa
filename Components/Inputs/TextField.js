import styles from "../../styles/components/inputs/TextField.module.css"

export default function TextField({ value, id, type, onChange }) {
    // valid types: text, email, url, & password

    const handleFocus = () => {
        window.navigator.vibrate(50)
    }

    const handleChange = (e) => {
        onChange
    }

    return (
        <div className="display-inline-flex-column">
            <label className="bottom-margin-extra-small" htmlFor={id}><small>{id}</small></label>
            <div className="gradient-2 padding-2 border-radius-12 display-inline-flex align-center clickable-shadow">
                <input onChange={handleChange} onFocus={handleFocus} id={id} value={value} type={type} className={`${styles.textField} width-100 height-100 background-white border-radius-10 padding-5`} />
            </div>
        </div>
    )
}