import DownArrow from "../Images/Svgs/Icons/DownArrow"
import styles from "./Select.module.css"

export default function Select({ value, id, onChange }) {

    const handleFocus = (e) => {
        e.preventDefault()
        e.stopPropagation();
    }

    const handleChange = (e) => {
        e.preventDefault()
        e.stopPropagation();
        onChange()
    }

    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation();
    }

    return (
        <div className="display-inline-flex align-end">
            <div className="display-inline-flex-column">
                <label className="bottom-margin-extra-small" htmlFor={id}><small>{id}</small></label>
                <div className="display-inline-flex align-center">
                    <div className="display-inline-flex gradient-2 padding-2 border-radius-10 clickable-shadow">
                        <select value={value} onClick={handleClick} onChange={handleChange} onFocus={handleFocus} id={id} className={`${styles.select} width-100 height-100 background-white border-radius-8 padding-2 padding-left-right-10`}>
                            <optgroup label="common pets">
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                            </optgroup>
                            <optgroup label="else">
                                <option value="lizard">lizard</option>
                                <option value="horse">horse</option>
                                <option value="hamster">Hamster</option>
                            </optgroup>
                        </select>
                    </div>
                    <span className={`${styles.downArrowContainer} display-flex-row align-center`}>
                        <DownArrow height={10} />
                    </span>
                </div>
            </div>
        </div>
    )
}