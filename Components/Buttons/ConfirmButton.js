import { useState, useEffect } from "react"
import clickSound from "../../audio/buttonClick2.mp3"
import styles from "../../styles/components/buttons/ConfirmButton.module.css"

export default function ConfirmButton({ buttonText, onClick, disabled }) {
    // set sound on server
    const [sound, setSound] = useState(null)

    useEffect(() => {
        // set sound on client
        setSound(new Audio(clickSound))
    }, [])
    
    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation();
        sound.play();
        () => onClick()
    }

    return (
        <button onClick={handleClick} disabled={disabled} className={`${styles.confirmButton} clickable-shadow border-radius-12 gradient-success padding-2 padding-left-right-10 weight-500 color-white cursor-pointer`}>
            {buttonText}
        </button>
    )
}