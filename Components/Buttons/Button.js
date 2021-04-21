import { useState, useEffect } from "react"
import clickSound from "../../audio/buttonClick1.mp3"
import styles from "../../styles/components/buttons/Button.module.css"

export default function Button({ buttonText, gradientNum, onClick, disabled }) {
    // set sound on server
    const [sound, setSound] = useState(null)
    
    useEffect(() => {
        // set sound on client
        setSound(new Audio(clickSound))
    }, [])
    
    const handleClick = () => {
        sound.play()
        onClick
    }

    return (
        <button onClick={handleClick} disabled={disabled} className={`clickable-shadow ${styles.button} gradient-${gradientNum} padding-2 border-radius-12 cursor-pointer display-inline-flex align-center justify-center`}>
            <div className="width-100 height-100 border-radius-10 cursor-pointer background-white padding-5 padding-left-right-10">
                {buttonText}
            </div>
        </button>
    )
}