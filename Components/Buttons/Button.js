import { useContext } from "react"
import { AudioContext } from "../../lib/context"
import styles from "./Button.module.css"

export default function Button({ buttonText, gradientNum, onClick, disabled }) {
    const {playAudio} = useContext(AudioContext)
    
    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation();
        playAudio.buttonNormal();
        if (onClick) onClick()
    }

    return (
        <button onClick={handleClick} disabled={disabled} className={`clickable-shadow ${styles.button} gradient-${gradientNum} padding-2 border-radius-10 cursor-pointer display-inline-flex align-center justify-center`}>
            <div className="width-100 border-radius-8 cursor-pointer background-white padding-2 padding-left-right-10">
                {buttonText}
            </div>
        </button>
    )
}