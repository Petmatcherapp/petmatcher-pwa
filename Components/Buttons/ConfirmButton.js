import { useContext } from "react"
import { AudioContext } from "../../lib/context"
import styles from "../../styles/components/buttons/ConfirmButton.module.css"

export default function ConfirmButton({ buttonText, onClick, disabled }) {
    const {playAudio} = useContext(AudioContext)
    
    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation();
        playAudio.buttonConfirm();
        if (onClick) onClick()
    }

    return (
        <button onClick={handleClick} disabled={disabled} className={`clickable-shadow ${styles.confirmButton} border-radius-8 gradient-success padding-2 padding-left-right-10 weight-500 color-white cursor-pointer`}>
            {buttonText}
        </button>
    )
}