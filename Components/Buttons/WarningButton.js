import { useState, useEffect } from "react"
import clickSound from "../../audio/buttonClick3.mp3"
import styles from "../../styles/components/buttons/WarningButton.module.css"

export default function WarningButton({ buttonText, onClick, disabled }) {

    // set sound on server to null
    const [sound, setSound] = useState(null)

    useEffect(() => {
        const AudioContext = window.AudioContext || window.webkitAudioContext
        const audioCtx = new AudioContext();
        const audio = new Audio(clickSound)
        const source = audioCtx.createMediaElementSource(audio)
        source.connect(audioCtx.destination)
        setSound(audio)
    }, [])
    
    const handleClick = () => {
        // window.navigator.vibrate(50)
        sound.play()
        onClick
    }

    return (
        <button onClick={handleClick} disabled={disabled} className={`${styles.warningButton} clickable-shadow border-radius-12 gradient-warning padding-5 padding-left-right-10 weight-500 color-white cursor-pointer`}>
            {buttonText}
        </button>
    )
}