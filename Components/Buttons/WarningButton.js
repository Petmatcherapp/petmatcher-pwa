import { useContext } from "react"
import { AudioContext } from "../../lib/context"
import styles from "../../styles/components/buttons/WarningButton.module.css"

export default function WarningButton({ buttonText, onClick, disabled }) {
    const {playAudio} = useContext(AudioContext)
    
    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation();
        playAudio.buttonConfirm();
        if (onClick) onClick()
    }

    return (
        <button onClick={handleClick} disabled={disabled} className={`${styles.warningButton} clickable-shadow border-radius-8 gradient-warning padding-2 padding-left-right-10 weight-500 color-white cursor-pointer`}>
            {buttonText}
        </button>
    )
}