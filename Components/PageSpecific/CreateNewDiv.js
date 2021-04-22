import { useState, useEffect } from "react"
import clickSound from "../../audio/buttonClick1.mp3"
import Link from "next/link"
import styles from "../../styles/components/pageSpecific/CreateNewDiv.module.css"

export default function CreateNewDiv({ icon, type, description, link, gradientNum}) {
    // set sound on server
    const [sound, setSound] = useState(null)
    
    useEffect(() => {
        // set sound on client
        setSound(new Audio(clickSound))
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        sound.play()
    }

    return (
        <Link href={link}>
            <div onClick={handleClick} className={`${styles.outerCreateNewDiv} gradient-${gradientNum} border-radius-20 bottom-margin-large clickable-shadow padding-2 cursor-pointer`}>
                    <div className={`${styles.innerCreateNewDiv} display-flex-row border-radius-18`}>
                        <div className={`${styles.typeContainer} display-flex-column align-center justify-center`}>
                            <div className={`${styles.iconContainer} bottom-margin-small`}>
                                {icon}
                            </div>
                        </div>
                        <div className="display-flex-column justify-center">
                            <h2>{type}</h2>
                            <small>{description}</small>
                        </div>
                    </div>
            </div>
        </Link>
    )
}